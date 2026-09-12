import NextImage from "next/image";

export default function Image({
  src,
  alt,
  width = 600,
  height = 400,
  className = "",
}) {
  return (
    <NextImage
      src={src}
      alt={alt}
      width={width}
      height={height}
      className={className}
    />
  );
}