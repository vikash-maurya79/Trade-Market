const express = require("express")
const app = express();
const cors = require("cors");
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const cookieParser = require('cookie-parser');


const authMiddleware = require('./authMiddleware.js');



app.use(cors({
    origin: 'http://localhost:3000',
    credentials: true
}));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());



const holdings = require("./models/HoldingsModel");
const position = require("./models/PositionModel");
const WatchList = require("./models/WatchListModel.js");
const order = require('./models/OrderModel.js');
const User = require("./models/UserModel.js");


require("dotenv").config();
const mongoose = require("mongoose");


const PORT = process.env.PORT || 3001;
const url = process.env.MONGO_URL;


mongoose.connect(url);
console.log("Database connected");

app.get('/user', authMiddleware, async (req, res) => {
    const user = req.user.id;
    const userFound = await User.find({ _id: user });
    return res.status(200).json({
        message: 'working well',
        user: userFound
    });
})

app.post('/sell', authMiddleware, async (req, res) => {
    try {
        let foundedHolding = await holdings.findOne({
            _id: req.body.stockId,
            user: req.user.id
        });

        if (!foundedHolding) {
            return res.status(404).json({
                message: 'Data not found'
            });
        }

        const availableQty = Number(foundedHolding.qty);
        const sellQty = req.body.stockQty;

        if (!sellQty || sellQty <= 0) {
            return res.status(400).json({
                message: 'Invalid quantity'
            });
        }

        if (sellQty > availableQty) {
            return res.status(400).json({
                message: 'Somthing went wrong'
            });
        }

        const remainingQty = availableQty - sellQty;

        // 🔥 CASE 1: sell all → delete holding
        if (remainingQty == 0) {
            await foundedHolding.deleteOne();

            return res.status(200).json({
                message: 'Order successfull'
            });
        }

        // 🔥 CASE 2: partial sell → update holding
        foundedHolding.qty = String(remainingQty); // keep string (as per your schema)
        await foundedHolding.save();

        return res.status(200).json({
            message: 'Order done !'
        });

    } catch (err) {
        console.error(err);
        return res.status(500).json({
            message: 'Internal server error'
        });
    }
});



app.get("/check_login", authMiddleware, async (req, res) => {
    if (req.user != null) {
        return res.status(200).json({
            message: 'User Logged In',
            isLoggedIn: true
        })
    }
})



app.get("/holdings", authMiddleware, async (req, res) => {

    let holdingsData = await holdings.find({ user: req.user.id });
    return res.status(200).json(
        holdingsData
    );
})

app.get("/positions", authMiddleware, async (req, res) => {
    let positionData = await position.find({});
    res.json(positionData);
})

app.get("/watchlist", async (req, res) => {
    let watchlistData = await WatchList.find({});
    res.json(watchlistData);
})
app.post("/buy", authMiddleware, async (req, res) => {
    if (!req.body.quantity ||
        !req.body.amount ||
        !req.body.mode) {
        return res.status(400).json({
            message: 'fill required fields carefully'
        })
    }
    if (!req.body.name) {
        return res.status(401).json({
            message: 'Login is required'
        })
    }
    let tempOrder = new order({
        name: req.body.name,
        qty: req.body.quantity,
        price: req.body.amount,
        mode: req.body.mode
    })
    let comp_name = req.body.name;
    let checkHolding = await holdings.find(
        { name: comp_name, user: req.user.id }
    );
    if (checkHolding.length > 0) {
        let newAvrg = Number(req.body.amount) / Number(req.body.quantity);
        let new_Avrg = Number(newAvrg + Number(checkHolding[0].avg)) / 2;
        let newQty = Number(req.body.quantity) + Number(checkHolding[0].qty);
        let updateHoldings = {
            qty: newQty,
            avg: new_Avrg,
            price: Number(req.body.amount) + Number(checkHolding[0].price),
            net: req.body.amount,
            day: '+1%',
        }
        await holdings.findOneAndUpdate(
            { name: comp_name },
            { $set: updateHoldings },
            { new: true }

        );
    }
    else {
        let avrg = Number(Number(req.body.amount) / Number(req.body.quantity));
        let tempHolding = new holdings({
            name: req.body.name,
            qty: req.body.quantity,
            avg: avrg,
            price: req.body.amount,
            net: req.body.amount,
            day: '+1%',
            user: req.user.id
        })
        let savedHolding = await tempHolding.save();
        let userFound = await User.findOne({ _id: req.user.id });
        userFound.holding.push(savedHolding._id);
        await userFound.save();
    }
    tempOrder.save();
    res.status(200).json({
        message: 'Order done !'
    })
})


app.post('/signup', async (req, res) => {
    console.log("Route hitten");
    const { username, email, password } = req.body;
    if (!username || !email || !password) {
        return res.status(400).json({
            message: 'Fill all required fields'
        })
    }
    let userFound = await User.findOne({ email });

    if (userFound) {
        return res.status(409).json({
            message: 'User already exists'
        })
    }
    let salt = await bcrypt.genSalt(10);
    let hashedPass = await bcrypt.hash(password, salt);
    let tempUser = new User({
        username: username,
        email: email,
        password: hashedPass,
    })
    let signedupUser = await tempUser.save();
    const token = jwt.sign({ id: signedupUser._id }, process.env.SECRET, {
        expiresIn: '2D'
    })
    res.cookie('token', token, {
        httpOnly: true,
        sameSite: 'lax',
        secure: process.env.NODE_ENV === 'production',
        maxAge: 30 * 24 * 60 * 60 * 1000
    });
    res.status(200).json({
        message: 'User registered successfully'
    })


})

app.post('/login', async (req, res) => {
    const { email, password } = req.body;
    if (!email || !password) {
        return res.status(400).json({
            message: 'Fill all required fields'
        });
    }
    let userFound = await User.findOne({ email });
    if (userFound != null) {
        let compareSuccess = await bcrypt.compare(password, userFound.password);
        if (compareSuccess) {
            const token = jwt.sign({ id: userFound._id }, process.env.SECRET, {
                expiresIn: '2D'
            })
            res.cookie('token', token, {
                httpOnly: true,
                sameSite: 'lax',
                maxAge: 30 * 24 * 60 * 60 * 1000
            })
            return res.status(200).json({
                message: 'Login successfull'
            })
        }
        else {
            return res.status(409).json({
                message: 'Wrong password'
            })
        }
    }
    else {
        return res.status(409).json({
            message: 'No account registered with this email'
        })
    }
})

app.post('/logout', (req, res) => {
    res.clearCookie('token', {
        httpOnly: true,
        sameSite: 'lax',
        maxAge: '0'
    })
    console.log('Logout successfull');
    res.status(200).json({
        message: 'Logout successfully'
    })
})

app.listen(PORT, () => {
    console.log("Server started at port 3001");

})