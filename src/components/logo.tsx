
// Logo.tsx
interface LogoProps {
    src: string;
    alt: string;
  }
  
  export const Logo = ({ src, alt }: LogoProps) => {
    return (
      <div className="relative">
        <img
          className="h-44 w-44 rounded-lg shadow-md object-cover
                   transition-transform duration-300
                   ring-2 ring-blue-100"
          src={src}
          alt={alt}
        />
      </div>
    );
  };