import React from 'react'
import {connect} from 'react-redux'

/*
* props: {
*   header,
*   pos,
*   link
*
* }
* */

const RecentBlock = props => {
    return(
        <a href="#test" className={`recent-block recent-block--${props.pos || 'right'}`}>
            {props.header || 'no content loaded...'}
        </a>
    )
}

export default connect()(RecentBlock)