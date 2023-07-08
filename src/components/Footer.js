import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub,  faLinkedin, } from "@fortawesome/free-brands-svg-icons";
import "../style/Footer.css";

// Array of social media objects with name, url, icon and color
const socials = [
  {
    name: "GitHub",
    url:"https://github.com/Sunny9810",
    icon:faGithub,
    color: "#5DE512",
  },
  {
    name: "LinkedIn",
    url:"https://www.linkedin.com/in/arevik-sunny-abrahamyan-58631b271",
    icon: faLinkedin,
    color: "#2EACE8",
  },
];