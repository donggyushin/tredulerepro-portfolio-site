import React from 'react'
import './styles.scss'

function Home() {
    return (
        <div className="Home">
            <div className="top">
                <div className="black__box">
                    <text className="span">
                        DG
                    </text>
                </div>
            </div>
            <div style={{
                height: "167px"
            }} />
            <div className="my__name">
                <div className="short_line"></div>
                <span className="name">
                    Shin Donggyu
                </span>
            </div>
            <div style={{
                height: "80px"
            }} />
            <div className="introduce__me">
                <p className="one">
                    Making application that makes your life
                </p>
                <p className="three">
                    fun and convenient
                </p>
            </div>
        </div>
    )
}

export default Home