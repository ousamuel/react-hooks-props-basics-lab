import React from "react";

function Links({linkedin,github}){
  return (
    <h3>Links
      <a href={github}>{github}</a>
      <a href={linkedin}>{linkedin}</a>

    </h3>
  );
}




export default Links;