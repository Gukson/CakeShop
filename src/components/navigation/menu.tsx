import React from "react";

type IconedMenuProps = {
    icon: React.ReactNode
}

export const IconedMenu = ({icon}: IconedMenuProps) =>
{
    return (<>{icon}</>)
}