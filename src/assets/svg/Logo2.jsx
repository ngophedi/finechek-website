import * as React from "react";

function SvgComponent(props) {
  return (
       <img
        src="/Finecheck1.png"
        alt="Logo"
        width={120}
        height={40}
        {...props}
    />
  );
}

export default SvgComponent;
