import React from "react";

export default function Button({
    children,
    type = "button",
    bgColor = "",
    textColor = "text-white",
    className = "",
    ...props
}) {
    return (
        <button className={`py-1 w-28 my-2 mx-auto bg-amber-600 rounded-md hover:bg-amber-700 ${bgColor} ${textColor} ${className}`} {...props}>
            {children}
        </button>
    );
}