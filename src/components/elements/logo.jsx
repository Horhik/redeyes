import React, {useEffect, useState} from 'react'
import figlet from '../../when-module-doesnt-merge-your-pullrequest/figlet.js'
import Pagga from '../../when-module-doesnt-merge-your-pullrequest/figlet.js/importable-fonts/Pagga'
import asciiWord from "../../functions/ascii-word";

const font = 'Pagga';


const Logo = (props) => {
    const text = useState(asciiWord("horhik.dev"))
    useEffect(() => {

    }, [])
    return (
        <div className={'logo--wrapper'}>

        <div className={'logo'}>
            {/*<span className={'toilet-logo'}>░█░█░█▀█░█▀▄░█░█░▀█▀░█░█░░░░█▀▄░█▀▀░█░█</span>*/}
            {/*<span className={'toilet-logo'}>░█▀█░█░█░█▀▄░█▀█░░█░░█▀▄░░░░█░█░█▀▀░▀▄▀</span>*/}
            {/*<span className={'toilet-logo'}>░▀░▀░▀▀▀░▀░▀░▀░▀░▀▀▀░▀░▀░▀░░▀▀░░▀▀▀░░▀░</span>*/}
            <pre className={'toilet-logo'}>
                {text}
            </pre>
        </div>
            <span className={'logo-quote'}>{props.child}</span>
        </div>
    )
}

export default Logo