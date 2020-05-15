import React from 'react'
import './styles.scss'
//@ts-ignore
import Fade from 'react-reveal/Fade';


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
                <Fade left cascade>
                    <div className="short_line"></div>
                    <span className="name">
                        Shin Donggyu
                </span>
                </Fade>

            </div>
            <div style={{
                height: "80px"
            }} />
            <div className="introduce__me">
                <Fade left cascade>
                    <p className="one">
                        Making application that makes your life
                </p>
                    <p className="three">
                        fun and convenient
                </p>
                </Fade>
            </div>
            <div style={{
                height: "300px"
            }} />
            <Fade bottom cascade>
                <div className="big__image">
                    <img src={require('../../assets/image1.jpg')} alt="" />
                </div>
            </Fade>
            <div style={{
                height: "180px"
            }} />
            <div className="my__name">
                <Fade left cascade>
                    <div className="short_line"></div>
                    <span className="name">
                        Who I am?
                </span>
                </Fade>
            </div>
            <div style={{
                height: "40px"
            }} />
            <p className="middle__big__text">
                I am ...
            </p>
            <div style={{
                height: "80px"
            }} />
            <p className="plane__text">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
            </p>
            <div style={{
                height: "400px"
            }} />
        </div>
    )
}

export default Home