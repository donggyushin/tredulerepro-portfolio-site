import React from 'react'
import './styles.scss'


interface TitleProps {
    text: String
}

const Title: React.FunctionComponent<TitleProps> = props => {
    return (
        <div className="Title__container">
            <div className="line"></div>
            <span>{props.text}</span>
        </div>
    )
}


export default Title