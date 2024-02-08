import React from "react";
const Chip = ({ label }) => {
  return (
    <p
      className="chip"
      style={{
        background: "#9797e9",

        color: "#060606",
        padding: "0.3rem 0.5rem",
        borderRadius: "5px",
        width: "fit-content",
        textTransform: "capitalize",
      }}
    >
      {label}
    </p>
  );
};
export default Chip;
