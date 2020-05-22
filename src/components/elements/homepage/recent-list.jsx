import React from 'react'
import {connect} from 'react-redux'
import RecentBlock from "./recent-block";

const Recent = props => {
    return (
        <section className={'recent'}>
            <h1 className={'h1 recent-header'}>
                Recent
            </h1>
            <ul className="recent-list">
                <li>
                    <RecentBlock/>
                </li>
            </ul>
        </section>
    )
}

export default connect()(Recent)