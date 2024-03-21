import Image from "next/image";
import React from "react";
import { twMerge } from "tailwind-merge";

const Picture = ({ src, alt, onLoad=()=>{} ,className = "", ...restProps }) => {
  return (
    <div className={twMerge("relative cover-image", className)} {...restProps}>
      <Image
        alt={alt || "image"}
        src={src}
        onLoad={onLoad }
        
        fill
        className="object-cover object-center bg-white/80 backdrop-blur-sm p-1.5"
      />
    </div>
  );
};

export default Picture;
