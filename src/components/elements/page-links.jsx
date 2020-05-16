import React from 'react'
import asciiWord from "../../functions/ascii-word";

const PageLinks = props => {
    return(
        <ul className={'page-list'}>
            <li className={'page-link'}>
                <a href="#portfolio">
                    {asciiWord('Portfolio')}
                </a>
            </li>
            <li className={'page-link'}>
                <a href="#blog">
                    {asciiWord('Blog')}
                </a>
            </li>
        </ul>
    )
}

export default PageLinks