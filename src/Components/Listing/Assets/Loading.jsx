
import React from "react";

export default function SvgComponent() {
  return (

      <svg version="1.1" id="L5" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
           viewBox="0 0 120 100" enable-background="new 0 0 0 0" >
  <circle fill="#FFFFFF" stroke="none" cx="20" cy="50" r="10">
    <animateTransform
        attributeName="transform"
        dur="1s"
        type="translate"
        values="0 15 ; 0 -15; 0 15"
        repeatCount="indefinite"
        begin="0.1"/>
  </circle>
        <circle fill="#FFFFFF" stroke="none" cx="60" cy="50" r="10">
    <animateTransform
        attributeName="transform"
        dur="1s"
        type="translate"
        values="0 10 ; 0 -10; 0 10"
        repeatCount="indefinite"
        begin="0.2"/>
  </circle>
        <circle fill="#FFFFFF" stroke="none" cx="100" cy="50" r="10">
    <animateTransform
        attributeName="transform"
        dur="1s"
        type="translate"
        values="0 5 ; 0 -5; 0 5"
        repeatCount="indefinite"
        begin="0.3"/>
  </circle>
</svg>);
}
