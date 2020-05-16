import React, {useEffect, useState} from 'react'
import asciiWord from "../../functions/ascii-word";


/*
░█░█░█▀█░█▀▄░█░█░▀█▀░█░█░░░░█▀▄░█▀▀░█░█
░█▀█░█░█░█▀▄░█▀█░░█░░█▀▄░░░░█░█░█▀▀░▀▄▀
░▀░▀░▀▀▀░▀░▀░▀░▀░▀▀▀░▀░▀░▀░░▀▀░░▀▀▀░░▀░
*/

const Logo = (props) => {
    const text = useState(asciiWord("horhik.dev"))
    useEffect(() => {

    }, [])
    return (
        <div className={'logo--wrapper'}>

        <div className={'logo'}>
            <pre className={'toilet-logo'}>
                {text}
            </pre>
        </div>
            <span className={'logo-quote'}>{props.child}</span>
        </div>
    )
}

export default Logo