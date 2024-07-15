import React from "react";
import { memo } from "react";
const Navbar = ({ adjective,changeadjective }) => {
  console.log(" navbaris rendered");

  return <>
  <div>i am a {adjective} navbar</div>
    <button> {changeadjective() }</button>
          </>
  ;
};

export default memo(Navbar);   
