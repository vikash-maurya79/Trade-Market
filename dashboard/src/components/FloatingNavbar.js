import { useState } from 'react';
import Sidebar from './Sidebar';
import Button from '@mui/material/Button';
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
function FloatingNavbar({ children }) {

    const [open, setOpen] = useState(false);
    return (

        <>
            {open ? '' :
                <Button
                    variant="contained"
                    onClick={() => setOpen(true)}
                    sx={{ m: 2 }}
                >
                    <MenuOutlinedIcon />

                </Button>
            }

            <Sidebar open={open} onClose={() => setOpen(false)} />

            {children}
        </>
    )
}
export default FloatingNavbar;