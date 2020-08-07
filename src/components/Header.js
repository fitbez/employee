import React from "react";

function Header() {
  return (
    <div>
      <h2 style={styleHeader}>Employee Directory</h2>
    </div>
  );
}

const styleHeader = {
  color: "#333",
  padding: "5px 0",
};

export default Header;
