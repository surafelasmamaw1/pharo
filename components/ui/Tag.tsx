interface TagProps {
  children: string;
  className?: string;
  size?: "sm" | "md" | "lg";
}

export default function Tag({ children, className = "", size = "md" }: TagProps) {
  const sizeClasses = {
    sm: "px-3.5 py-1.5 text-sm",
    md: "px-4 py-2.5 text-sm",
    lg: "px-5 py-3 text-base",
  };

  return (
    <span
      className={`inline-flex items-center rounded-full border border-border dark:border-[#2D3A5E] bg-background dark:bg-[#1E2540] font-medium text-foreground dark:text-[#93C5FD] ${sizeClasses[size]} ${className}`}
    >
      {children}
    </span>
  );
}
