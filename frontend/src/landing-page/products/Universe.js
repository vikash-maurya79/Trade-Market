import Hero from "./Hero";
import LeftSection from "./LeftSection";
import RightSection from "./RightSection";
function ProductPage() {
    return (
        <>
            <div className="container border-bottom pb-5">
                <div className="row mt-5 pt-5 text-center">
                    <h5>Zerodha Products</h5>
                    <p className="mt-3">Sleek, modern, and intuitive trading platforms</p>
                    <p className="mb-5">Check out our <a href="#" style={{ textDecoration: "none" }}>investment offerings <i class="fa-solid fa-arrow-right"></i></a>(Soon..)</p>
                </div>
            </div>
            
            <LeftSection imageUrl='/media/image/products-image.png'
                rightHeading='Kite'
                rightParagraph='Our ultra-fast flagship trading platform with streaming market data, advanced charts, an elegant UI, and more. Enjoy the Kite experience seamlessly on your Android and iOS devices.'
                firstLink='Try demo'
                secondLink='Learn more'
                playStoreImage='/media/image/google-play-badge.svg'
                appleAppStoreImage='/media/image/apple-store-badge.svg'
            />
            <RightSection
                leftHeading='Console'
                leftLink='Learn more'
                leftParagraph='The central dashboard for your Zerodha account. Gain insights into your trades and investments with in-depth reports and visualisations.'
                rightImageUrl='/media/image/product-second-image.png'
            />
            <LeftSection
                imageUrl='/media/image/product-third-image.png'
                rightHeading='Coin'
                rightParagraph='Buy direct mutual funds online, commission-free, delivered directly to your Demat account. Enjoy the investment experience on your Android and iOS devices.'
                firstLink='Coin'
                playStoreImage='/media/image/google-play-badge.svg'
                appleAppStoreImage='/media/image/apple-store-badge.svg'

            />
            <RightSection
                leftHeading='Kite Connect API'
                leftLink='Kite Connect'
                leftParagraph='Build powerful trading platforms and experiences with our super simple HTTP/JSON APIs. If you are a startup, build your investment app and showcase it to our clientbase.'
                rightImageUrl='/media/image/product-fourth-image.svg'

            />
            <LeftSection
                imageUrl='/media/image/product-fifth-image.png'
                rightHeading='Varsity mobile'
                rightParagraph='An easy to grasp, collection of stock market lessons with in-depth coverage and illustrations. Content is broken down into bite-size cards to help you learn on the go.'
                firstLink=''
                playStoreImage='/media/image/google-play-badge.svg'
                appleAppStoreImage='/media/image/apple-store-badge.svg'
            />
            <Hero/>
        </>
    );
}

export default ProductPage;