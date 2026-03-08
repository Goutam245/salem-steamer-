import logoImage from "@/assets/logo-salem-steamer.png";

interface LogoProps {
  height?: number;
  className?: string;
}

const Logo = ({ height = 48, className = "" }: LogoProps) => {
  return (
    <img
      src={logoImage}
      alt="Salem Steamer"
      style={{ height }}
      className={`object-contain ${className}`}
    />
  );
};

export default Logo;
