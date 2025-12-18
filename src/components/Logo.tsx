import { useConfig } from "@/contexts/ConfigContext";

interface LogoProps {
  className?: string;
  showTagline?: boolean;
  size?: "sm" | "md" | "lg";
  onClick?: () => void;
  href?: string;
  textClassName?: string;
}

const Logo = ({
  className = "",
  showTagline = true,
  size = "md",
  onClick,
  href,
  textClassName
}: LogoProps) => {
  const config = useConfig();

  const sizeClasses = {
    sm: "w-8 h-8",
    md: "w-11 h-11 lg:w-13 lg:h-13",
    lg: "w-16 h-16",
  };

  const handleClick = (e: React.MouseEvent) => {
    if (onClick) {
      e.preventDefault();
      onClick();
    }
  };

  const Component = href ? "a" : "div";

  const logo = config.general?.logo;

  return (
    <Component
      href={href}
      onClick={handleClick}
      className={`flex items-center gap-3 ${href ? "cursor-pointer" : ""} ${className}`}
    >
      {logo?.image && (
        <div className={`${sizeClasses[size]} rounded-full flex items-center justify-center overflow-hidden`}>
          <img
            src={logo.image}
            alt={`${logo.text} Logo`}
            className="w-full h-full object-contain"
          />
        </div>
      )}

      <div className="flex flex-col leading-tight">
        <span className={`font-serif text-lg lg:text-xl font-semibold ${textClassName || ""}`}>
          {logo?.text}
        </span>

        {showTagline && (
          <span className={`text-xs tracking-widest uppercase ${textClassName || ""}`}>
            {logo?.subText}
          </span>
        )}
      </div>
    </Component>
  );
};

export default Logo;
