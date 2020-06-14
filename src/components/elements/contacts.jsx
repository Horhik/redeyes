import React from "react";
import asciiWord from "../../functions/ascii-word";

const links = [
  {
    site: "github",
    url: "https://github.com/horhik",
  },
  {
    site: "twitter",
    url: "https://twitter.com/HORHl",
  },
  {
    site: "mail",
    mail: "horhik@tuta.io",
  },
];

const SocialLink = (props) => {
  return (
    <a href={props.url} className={" contact-link"}>
      <pre>{asciiWord(props.site, "Nacyj")}</pre>
    </a>
  );
};

const Contacts = (props) => {
  return (
    <ul className={"contacts"}>
      {links.map((link) => (
        <li key={link.url}>
          {link.mail ? (
            <SocialLink url={`mailto:${link.mail}`} site={link.site} />
          ) : (
            <SocialLink url={link.url} site={link.site} />
          )}
        </li>
      ))}
    </ul>
  );
};

export default Contacts;
