import { getTechIcon } from "@/lib/techIcons";

interface TagProps {
  children: string;
  className?: string;
  size?: "sm" | "md" | "lg";
}

export default function Tag({ children, className = "", size = "md" }: TagProps) {
  const icon = getTechIcon(children);

  const sizeClasses = {
    sm: "px-3.5 py-1.5 text-sm gap-2",
    md: "px-4 py-2.5 text-sm gap-2.5",
    lg: "px-5 py-3 text-base gap-3",
  };

  const iconPx = {
    sm: 20,
    md: 22,
    lg: 26,
  };

  return (
    <span
      className={`inline-flex items-center rounded-full border border-border dark:border-[#2D3A5E] bg-background dark:bg-[#1E2540] font-medium text-foreground dark:text-[#93C5FD] ${sizeClasses[size]} ${className}`}
    >
      {icon && (
        <span
          className="flex-shrink-0 flex items-center justify-center rounded-md bg-white dark:bg-white p-0.5"
          style={{ width: iconPx[size] + 8, height: iconPx[size] + 8 }}
        >
          <svg
            role="img"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            style={{ fill: `#${icon.hex}`, width: iconPx[size], height: iconPx[size] }}
            aria-label={icon.label}
          >
            <path d={icon.path} />
          </svg>
        </span>
      )}
      {children}
    </span>
  );
}
