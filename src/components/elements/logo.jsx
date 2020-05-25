import React, { useEffect, useState } from "react";
import asciiWord from "../../functions/ascii-word";

/*
░█░█░█▀█░█▀▄░█░█░▀█▀░█░█░░░░█▀▄░█▀▀░█░█
░█▀█░█░█░█▀▄░█▀█░░█░░█▀▄░░░░█░█░█▀▀░▀▄▀
░▀░▀░▀▀▀░▀░▀░▀░▀░▀▀▀░▀░▀░▀░░▀▀░░▀▀▀░░▀░
*/

const Logo = (props) => {
  useEffect(() => {}, []);
  return (
    <div className={"logo--wrapper"}>
      <div className={"logo"}>
        <pre className={"toilet-logo"}>{asciiWord(props.header)}</pre>
      </div>
      <span className={"logo-quote"}>{props.child}</span>
    </div>
  );
};

export default Logo;
