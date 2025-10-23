type LogoProps = {
  width?: number | string;
  height?: number | string;
  alt?: string;
  className?: string;
};

const Logo = ({ width = 50, height = "auto", alt = "Zabota logo", className = "" }: LogoProps) => {
  return <img src="/ZABOTA.svg" width={width} height={height as any} alt={alt} className={`block object-contain ${className}`} />;
};

export default Logo;
