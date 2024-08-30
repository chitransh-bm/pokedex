import React from "react";

const styles = {
  leftHeader: {
    backgroundImage: "url('/assets/images/header-top-left.svg')",
    height: "135px",
    width: "250px",
  },
  rightHeader: {
    backgroundImage: "url('/assets/images/header-top-right.svg')",
    height: "87px",
    left: "250px",
  },
};

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 bg-slate-100 z-50">
      <div className="absolute top-0 left-0" style={styles.leftHeader} />
      <div className="absolute top-0 right-0" style={styles.rightHeader} />
    </header>
  );
};

export default Header;
