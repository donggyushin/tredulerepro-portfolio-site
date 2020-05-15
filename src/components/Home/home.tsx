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
            {/* <Fade bottom cascade> */}
            <div className="big__image">
                <img src={require('../../assets/image1.jpg')} alt="" />
            </div>
            {/* </Fade> */}
            <div style={{
                height: "180px"
            }} />
            <div className="my__name">
                {/* <Fade left cascade> */}
                <div className="short_line"></div>
                <span className="name">
                    Who I am?
                </span>
                {/* </Fade> */}
            </div>
            <div style={{
                height: "40px"
            }} />
            {/* <Fade left cascade> */}
            <p className="middle__big__text">
                I am ...
                </p>
            {/* </Fade> */}
            <div style={{
                height: "80px"
            }} />
            {/* <Fade bottom cascade> */}
            <p className="plane__text">
                A developer who loves music and developing :) I enjoy making applications that can make people fun and convenient. I’m a fool stack developer, I have more concentrated on front-end development. Mostly, I have worked on area where web and mobile development. I really like to challenge to new areas which I’ve never experienced before, so I’m always ready to enter any area.
            </p>
            <div style={{
                height: "40px"
            }} />
            <p className="plane__text">
                I’m not a career position yet, but I had managed (적당히 많은 이라는 뉘앙스는 어떻게 표현하는게 좋을지 알아보기) pretty lot of services during my University and I’m currently managing two services on the both side of web and App Store.
            </p>

            {/* </Fade> */}
            <p>줄바꿈 단어 단위로 안되는거 고치기!</p>
            <div style={{
                height: "400px"
            }} />
        </div>
    )
}

export default Home