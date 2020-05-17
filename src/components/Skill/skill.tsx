import React from 'react'
import './styles.scss'


interface IProps {
    title: string
    contents: string
}

const Skill: React.FC<IProps> = ({
    title,
    contents
}) => {
    return <div className={"Skill"}>
        <div className="left">
            <p className="title">
                {title}
            </p>
        </div>
        <div className="right">
            <p>
                {contents}
            </p>
        </div>
    </div>
}

export default Skill