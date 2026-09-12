import "./globals.css";

export const metadata = {
  title: "Pangasinan Heritage",
  description:
    "Discover the heritage and historical places of Pangasinan.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}