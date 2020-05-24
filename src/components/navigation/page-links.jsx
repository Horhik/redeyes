import React from 'react'
import asciiWord from "../../functions/ascii-word";
import {Link} from "react-router-dom";

const PageLinks = props => {
    return(
        <ul className={'page-list'}>
            <li className={'page-link'}>
                <Link to={'/portfolio'}>
                    {asciiWord('Portfolio')}
                </Link>
            </li>
            <li className={'page-link'}>
                    <Link to={'/blog'}>
                    {asciiWord('Blog')}
                    </Link>
            </li>
        </ul>
    )
}

export default PageLinks