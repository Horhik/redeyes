import React from 'react'
import Logo from "../elements/logo";
import PageLinks from "../elements/page-links";
import Recent from "../elements/homepage/recent-list";

const HomePage = () => {
    return (
        <div>
           <Logo child={"O. George's site"}></Logo>
            <PageLinks/>
            <Recent/>
        </div>
    )
}
export default HomePage