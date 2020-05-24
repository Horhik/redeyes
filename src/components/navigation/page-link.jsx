import React from 'react'
import {Link} from 'react-router-dom'
import connect from 'react-redux'
import asciiWord from "../../functions/ascii-word";

const PageLink = props => {
    return (
        <Link to={props.src}>{asciiWord(props.name)}</Link>
    )
}

export default PageLink