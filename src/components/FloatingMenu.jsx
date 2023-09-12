export const FloatingMenu = ({ toggleFloatingMenu, isFloatingMenuOpen }) => {
  return (
    <div className="floating" onClick={toggleFloatingMenu}>
      {isFloatingMenuOpen ? "-" : "+"}
    </div>
  );
};
