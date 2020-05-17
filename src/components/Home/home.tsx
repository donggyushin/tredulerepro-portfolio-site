import React from 'react'
import './styles.scss'
//@ts-ignore
import Fade from 'react-reveal/Fade';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Skill from '../Skill/skill';


function Home() {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };
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
                    <div className="image__container">
                        <img src={require('../../assets/image3.jpg')} alt="" />
                        <div className="text__in__container">
                            <span>LOVE</span>
                            <span>OF</span>
                            <span>MIDTERM</span>
                        </div>
                    </div>
                    <div className="text__container">
                        <div className="inner__container">
                            <p className="title">LOVE OF MIDTERM</p>
                            <p className="text">
                                Take an exam from whoever you want to chat. Pass the exam, Start chatting from the topics which are from the person.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div style={{ height: "280px" }} />
            <div className="my__name">
                <div className="short_line"></div>
                <span className="name">
                    My skills
                </span>
            </div>
            <div style={{ height: "40px" }} />
            <p className="middle__big__text">
                If I'm not good at,
            </p>
            <p className="middle__big__text">
                That is not my skill
            </p>
            <div style={{ height: "100px" }} />
            <div className={"slider__container"}>
                <Slider {...settings}>
                    <div>
                        <Skill title={"Swift"} contents={"Swift is a general-purpose, multi-paradigm, compiled programming language developed by Apple Inc. for iOS, iPadOS, macOS, watchOS, tvOS, Linux, and z/OS. Swift is designed to work with Apple's Cocoa and Cocoa Touch frameworks and the large body of existing Objective-C code written for Apple products. It is built with the open source LLVM compiler framework and has been included in Xcode since version 6, released in 2014. On Apple platforms,[11] it uses the Objective-C runtime library which allows C, Objective-C, C++ and Swift code to run within one program."} />
                    </div>
                    <div>
                        <Skill title={"Javascript"} contents={"JavaScript (/ˈdʒɑːvəˌskrɪpt/),[6] often abbreviated as JS, is a programming language that conforms to the ECMAScript specification.[7] JavaScript is high-level, often just-in-time compiled, and multi-paradigm. It has curly-bracket syntax, dynamic typing, prototype-based object-orientation, and first-class functions."} />
                    </div>
                </Slider>
            </div>

            <div style={{ height: "400px" }} />
        </div>
    )
}

export default Home