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
                    <RecentBlock header={" My school report said I showed no interest"} pos="left"/>
                </li>

                <li>
                    <RecentBlock header={"\"A disruptive influence\" I felt sorry for them in a way"}/>
                </li>
                <li>
                    <RecentBlock header={"When they finally expelled me"} pos={'left'}/>
                </li>
                <li>
                    <RecentBlock header={"It didn't mean a thing"} pos={'left'}/>
                </li>
                <li>
                    <RecentBlock header={" Life is unfair, kill yourself or get over it"} pos={'right'}/>
                </li>
                <li>
                    <RecentBlock header={" Life is unfair, kill yourself or get over it"} pos={'left'}/>
                </li>
            </ul>
        </section>
    )
}

export default connect()(Recent)