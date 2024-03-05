import React from "react";

function CustomImage({ className, src, alt, style, ...props }) {
  // console.log(src);
  return (
    <img
      className={`${className}`}
      src={src}
      style={style}
      alt={alt}
      {...props}
    />
  );
}

export default CustomImage;
