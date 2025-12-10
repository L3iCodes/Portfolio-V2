'use client'
import { useState } from "react";
import { borderColors, projectCoverColors, shadowColors } from "../lib/styles";

interface GalleryProps {
    images?: string[];
    colors: projectCoverColors;
}

const Gallery = ({ images, colors }: GalleryProps) => {
  const [activeImg, setActiveImg] = useState<string | null>(null);

  return (
    <>
        <div className="columns-1 md:columns-2 gap-5 relative">
            {images?.map((img, index) => (
            <img
                key={index}
                src={img}
                alt={`Gallery image ${index + 1}`}
                className={`mb-5 w-full object-cover rounded-sm border ${borderColors[colors]} cursor-pointer transition-transform duration-300 hover:scale-105`}
                onClick={() => setActiveImg(img)}
            />
            ))}
        </div>
    
        {activeImg && (
        <div
            className="fixed inset-0 z-200 flex items-center justify-center bg-base-200/50 backdrop-blur-md"
            onClick={() => setActiveImg(null)}
        >
            <img
                src={activeImg}
                alt="Fullscreen"
                className={`max-w-[90%] max-h-[90%] rounded-lg shadow-lg animate-scale-in border ${borderColors[colors]} ${shadowColors[colors]}`}
            />
        </div>
      )}
    </>
      
  );
};

export default Gallery;
