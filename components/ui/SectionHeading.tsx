interface SectionHeadingProps {
  children: string;
  className?: string;
  as?: "h1" | "h2" | "h3" | "h4";
}

export default function SectionHeading({ 
  children, 
  className = "", 
  as: Tag = "h2" 
}: SectionHeadingProps) {
  return (
    <Tag className={`font-serif text-section-heading font-semibold text-foreground leading-tighter tracking-tighter text-balance ${className}`}>
      {children}
    </Tag>
  );
}
