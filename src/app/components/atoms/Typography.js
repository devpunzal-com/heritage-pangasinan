export default function Typography({
  children,
  variant = "body",
  className = "",
}) {
  const Tag = variant === "title" ? "h1" : variant === "heading" ? "h2" : "p";

  return (
    <Tag className={`typography typography-${variant} ${className}`}>
      {children}
    </Tag>
  );
}