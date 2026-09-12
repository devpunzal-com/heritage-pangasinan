import NavigationItem from "../molecules/NavigationItem";

export default function HeaderNavigation() {
  return (
    <header className="header-navigation">
      <div className="header-brand">
        <div className="logo-circle">
          PH
        </div>

        <span>Pangasinan Heritage</span>
      </div>

      <nav>
        <NavigationItem
          label="Home"
          href="#home"
          active
        />

        <NavigationItem
          label="Heritage Sites"
          href="#heritage"
        />

        <NavigationItem
          label="About"
          href="#about"
        />

        <NavigationItem
          label="Contact"
          href="#contact"
        />
      </nav>
    </header>
  );
}