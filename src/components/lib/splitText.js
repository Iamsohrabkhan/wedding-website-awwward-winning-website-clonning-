import React from "react";
import { twMerge } from "tailwind-merge";

function splitText(text) {
  // Split the text into an array of characters
  const characters = text.split("");

  // Map each character to a <span> element
  const characterSpans = characters.map((char, index) => (
    <span key={index}>{char}</span>
  ));

  return characterSpans;
}

export default splitText;
