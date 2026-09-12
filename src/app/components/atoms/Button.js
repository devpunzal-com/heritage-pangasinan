"use client";

export default function Button({
  children,
  variant = "primary",
  onClick,
  type = "button",
}) {
  return (
    <button
      type={type}
      className={`atom-button atom-button-${variant}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
}