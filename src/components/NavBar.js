import React from "react";

function NavBar() {
  const links = ["home", "about", "projects"];

  let linkName = links.map((link) => {
    return (
      <a key = {link} href={"#" + link}>{link}</a>
    )
  })

  return <nav>{linkName}</nav>;
}

export default NavBar;
