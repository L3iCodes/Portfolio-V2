import Image, { StaticImageData } from "next/image";

interface ImageHolderProps {
    src: string | StaticImageData;
    className?: string;
    title?: string;
}

const ImageHolder = ({ src, className, title }: ImageHolderProps) => {
    return (
        <div 
            className={
                `
                ${className} relative flex flex-col gap-1
                transition-all ease-in duration-50
                hover:scale-102
                `
            }
        >
            <Image
                    className="w-full h-full p-3 object-cover border border-base-content/20 rounded-xs"
                    src={src}
                    fill
                    alt="Profile"
                />            
            
            {title && <p className="text-xs ml-auto font-bricolage text-base-content/50">{title}</p>}
        </div>
    );
};

export default ImageHolder