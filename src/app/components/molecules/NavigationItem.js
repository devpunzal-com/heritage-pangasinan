export default function NavigationItem({
  label,
  href,
  active = false,
}) {
  return (
    <a
      href={href}
      className={`navigation-item ${
        active ? "navigation-item-active" : ""
      }`}
    >
      {label}
    </a>
  );
}