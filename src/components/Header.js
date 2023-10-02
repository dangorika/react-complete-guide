import "./Header.css";

const Header = ({ logo, alt, title, description }) => {
  return (
    <header>
      <img src={logo} alt={alt} />
      <h1>{title}</h1>
      <p>{description}</p>
    </header>
  );
};

export default Header;
