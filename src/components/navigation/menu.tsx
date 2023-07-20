import React, {useState} from "react";
import {IconButton, Menu, MenuItem} from "@mui/material";
type IconedMenuProps = {
    icon: React.ReactNode
}

export const IconedMenu = ({icon}: IconedMenuProps) =>
{
    const [open, setOpen] = useState(false)

    return (<>
        <Menu open={open} onClose={()=>setOpen(false)}>
            <MenuItem>Profile</MenuItem>
            <MenuItem>My account</MenuItem>
            <MenuItem>Logout</MenuItem>
        </Menu>
        <IconButton onClick={() => setOpen(!open)}>{icon}</IconButton>
    </>)
}