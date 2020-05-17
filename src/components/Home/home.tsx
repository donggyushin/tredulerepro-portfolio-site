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
            <div className="plane__text__container">
                <p className="plane__text">
                    A developer who loves music and developing :) I enjoy making applications that can make people fun and convenient. I’m a fool stack developer, I have more concentrated on front-end development.
                </p>
                <div style={{
                    height: "40px"
                }} />
                <p className="plane__text">
                    Mostly, I have worked on area where web and mobile development. I really like to challenge to new areas which I’ve never experienced before, so I’m always ready to enter into any areas.
                </p>
                <div style={{
                    height: "40px"
                }} />
                <p className="plane__text">
                    I’m not a career position yet, but I had managed pretty lot of services during my University and I’m currently managing two services on the both side of web and App Store.
            </p>
            </div>


            {/* </Fade> */}
            <div style={{
                height: "340px"
            }} />
            <div className="recent_projects__container">
                <div className="left">
                    <div className="top">
                        <div className="my__name">
                            <div className="short_line"></div>
                            <span className="name">
                                Recent projects
                            </span>
                        </div>
                        <div style={{ height: "40px" }} />
                        <p className="middle__big__text">
                            Thoughtfully designed,
                        </p>
                        <p className="middle__big__text">
                            confidently crafted.
                        </p>
                    </div>
                    <div style={{
                        height: "40px"
                    }} />
                    <div className="image__card__container">
                        <div className="image__container">
                            <img id={"image1"} src={require('../../assets/image2.jpg')} />
                            <div className="text__container2">
                                <span>BIBLE</span>
                                <span>BOT</span>
                            </div>
                        </div>
                        <div className="text__container">
                            <div className="inner__container">
                                <p className="title">BIBLE BOT</p>
                                <p className="text">
                                    See attendance progress, mileages, schedules, menus, maps, notices. You can use your QRcode to verify yourself at everywhere in Korean Bible University
                                    </p>
                            </div>
                        </div>
                    </div>

                </div>
                <div style={{ width: "80px" }} />
                <div className="right">
                    right
                </div>
            </div>

        </div>
    )
}

export default Home