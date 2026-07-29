import React from "react"

export function KineticText({ text, as: Tag = "h1", className = "", ...rest }) {
  const words = text.split(" ")
  return (
    <Tag {...rest} className={className}>
      {words.map((word, wi) => (
        <span key={wi} style={{ display: "inline-flex", flexWrap: "nowrap" }}>
          {word.split("").map((letter, li) => (
            <span key={li} aria-hidden="true" className="kinetic-letter">
              {letter}
            </span>
          ))}
          {wi < words.length - 1 && "\u00A0"}
        </span>
      ))}
      <span className="sr-only">{text}</span>
    </Tag>
  )
}
