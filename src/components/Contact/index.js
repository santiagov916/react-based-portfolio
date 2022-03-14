import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "react-bootstrap";
import photoCat from "./photoCat.png";
import photoPhone from './phonePhoto.png';
import linkedIn from './linkedIn.png';
import emailMe from './emailMe.png';

function Footer() {
  return (
    <Container id="contact">
      <h2 className="text-center">Contact Me!</h2>
      <ul>
        <li>
          <a href="https://github.com/santiagov916/">
            <img alt='' src={photoCat} style={{ maxWidth: "4rem" }}></img>
          </a>
        </li>
        <li>
          <a href='tel:9162749681'>
            <img alt='' src={photoPhone} style={{maxWidth: "4rem"}}></img>
          </a>
        </li>
        <li>
          <a href="https://www.linkedin.com/in/santiago-venegas-88ab4b1bb/">
            <img alt='' src={linkedIn} style={{ maxWidth: "4rem" }}
            ></img>
          </a>
        </li>
        <li>
          <a href="mailto:gme.santi24@yahoo.com">
            <img alt='' src={emailMe} style={{ maxWidth: "4rem" }}
            ></img>
          </a>
        </li>
      </ul>
    </Container>
  );
}

export default Footer;
