type LogoProps = {
  width?: number | string;
  height?: number | string;
  alt?: string;
  className?: string;
};

const Logo = ({ width = 120, height = "auto", alt = "Zabota logo", className = "" }: LogoProps) => {
  return (
    // Serve from public folder at root path; Next.js will statically serve it
    <img src="/ZABOTA.svg" width={width} height={height as any} alt={alt} className={`block object-contain ${className}`} />
  );
};

export default Logo;
