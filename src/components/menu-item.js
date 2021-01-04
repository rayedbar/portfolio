import React from "react"
import { Link } from "gatsby"

const MenuItem = props => {
  if (props.name === "Resume") {
    return (
      <a
        href={props.to}
        className={"page-link" + props.className}
        target="_blank"
        rel="noreferrer"
      >
        {props.name}
      </a>
    )
  }
  return (
    <Link to={props.to} className={"page-link" + props.className}>
      {props.name}
    </Link>
  )
}

export default MenuItem
