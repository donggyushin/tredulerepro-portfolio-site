import React from 'react'
import './styles.scss'
//@ts-ignore
import Fade from 'react-reveal/Fade';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Skill from '../Skill/skill';
import { BsFillEnvelopeFill } from 'react-icons/bs'


function Home() {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true
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
            <div className="under__introduce__me" />
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
            <div className={"under__skills"} />
            <div className={"slider__container"}>
                <Slider {...settings}>
                    <div>
                        <Skill title={"Swift"} contents={"Swift is a general-purpose, multi-paradigm, compiled programming language developed by Apple Inc. for iOS, iPadOS, macOS, watchOS, tvOS, Linux, and z/OS. Swift is designed to work with Apple's Cocoa and Cocoa Touch frameworks and the large body of existing Objective-C code written for Apple products. It is built with the open source LLVM compiler framework and has been included in Xcode since version 6, released in 2014. On Apple platforms,[11] it uses the Objective-C runtime library which allows C, Objective-C, C++ and Swift code to run within one program."} />
                    </div>
                    <div>
                        <Skill title={"Javascript"} contents={"JavaScript is a scripting or programming language that allows you to implement complex features on web pages — every time a web page does more than just sit there and display static information for you to look at — displaying timely content updates, interactive maps, animated 2D/3D graphics, scrolling video jukeboxes, etc. — you can bet that JavaScript is probably involved. It is the third layer of the layer cake of standard web technologies, two of which (HTML and CSS) we have covered in much more detail in other parts of the Learning Area."} />

                    </div>
                    <div>
                        <Skill title={"React"} contents={`React is a declarative, efficient, and flexible JavaScript library for building user interfaces. It lets you compose complex UIs from small and isolated pieces of code called “components”.`} />
                    </div>
                    <div>
                        <Skill title={"Node.js"} contents={`Node.js is an open-source, cross-platform, JavaScript runtime environment that executes JavaScript code outside of a web browser. Node.js lets developers use JavaScript to write command line tools and for server-side scripting—running scripts server-side to produce dynamic web page content before the page is sent to the user's web browser. Consequently, Node.js represents a "JavaScript everywhere" paradigm, unifying web-application development around a single programming language, rather than different languages for server- and client-side scripts.`} />
                    </div>
                    <div>
                        <Skill title={"Typescript"} contents={"TypeScript is an open-source programming language developed and maintained by Microsoft. It is a strict syntactical superset of JavaScript and adds optional static typing to the language. TypeScript is designed for development of large applications and transcompiles to JavaScript. As TypeScript is a superset of JavaScript, existing JavaScript programs are also valid TypeScript programs."} />
                    </div>
                    <div>
                        <Skill title={"Express"} contents={`This is over simplifying it, but Express.js is to Node.js what Ruby on Rails or Sinatra is to Ruby.

Express 3.x is a light-weight web application framework to help organize your web application into an MVC architecture on the server side. You can use a variety of choices for your templating language (like EJS, Jade, and Dust.js).

You can then use a database like MongoDB with Mongoose (for modeling) to provide a backend for your Node.js application. Express.js basically helps you manage everything, from routes, to handling requests and views.`} />
                    </div>
                    <div>
                        <Skill title={"Graphql"} contents={`GraphQL is a query language for your API, and a server-side runtime for executing queries by using a type system you define for your data. GraphQL isn't tied to any specific database or storage engine and is instead backed by your existing code and data.`} />
                    </div>
                    <div>
                        <Skill title={"MySql"} contents={"MySQL, the most popular Open Source SQL database management system, is developed, distributed, and supported by Oracle Corporation."} />
                    </div>
                    <div>
                        <Skill title={"Mongodb"} contents={"MongoDB is a general purpose, document-based, distributed database built for modern application developers and for the cloud era. No database makes you more productive."} />
                    </div>
                    <div>
                        <Skill title={"Firebase"} contents={"Firebase is a Backend-as-a-Service — BaaS — that started as a YC11 startup and grew up into a next-generation app-development platform on Google Cloud Platform."} />
                    </div>
                    <div>
                        <Skill title={"Java"} contents={`Java is a general-purpose programming language that is class-based, object-oriented, and designed to have as few implementation dependencies as possible. It is intended to let application developers write once, run anywhere (WORA), meaning that compiled Java code can run on all platforms that support Java without the need for recompilation. Java applications are typically compiled to bytecode that can run on any Java virtual machine (JVM) regardless of the underlying computer architecture. The syntax of Java is similar to C and C++, but it has fewer low-level facilities than either of them. As of 2019, Java was one of the most popular programming languages in use according to GitHub, particularly for client-server web applications, with a reported 9 million developers.`} />
                    </div>
                    <div>
                        <Skill title={"Python"} contents={`Python is an interpreted, object-oriented, high-level programming language with dynamic semantics. Its high-level built in data structures, combined with dynamic typing and dynamic binding, make it very attractive for Rapid Application Development, as well as for use as a scripting or glue language to connect existing components together.`} />
                    </div>
                    <div>
                        <Skill title={"Linux"} contents={`From smartphones to cars, supercomputers and home appliances, home desktops to enterprise servers, the Linux operating system is everywhere.

Linux has been around since the mid-1990s and has since reached a user-base that spans the globe. Linux is actually everywhere: It?s in your phones, your thermostats, in your cars, refrigerators, Roku devices, and televisions. It also runs most of the Internet, all of the world’s top 500 supercomputers, and the world’s stock exchanges.

But besides being the platform of choice to run desktops, servers, and embedded systems across the globe, Linux is one of the most reliable, secure and worry-free operating systems available.`} />
                    </div>
                    <div>
                        <Skill title={"Nginx"} contents={`NGINX is open source software for web serving, reverse proxying, caching, load balancing, media streaming, and more. It started out as a web server designed for maximum performance and stability. In addition to its HTTP server capabilities, NGINX can also function as a proxy server for email (IMAP, POP3, and SMTP) and a reverse proxy and load balancer for HTTP, TCP, and UDP servers.`} />
                    </div>
                    <div>
                        <Skill title={"Docker"} contents={`Docker is a set of platform as a service (PaaS) products that uses OS-level virtualization to deliver software in packages called containers.[6] Containers are isolated from one another and bundle their own software, libraries and configuration files; they can communicate with each other through well-defined channels.[7] All containers are run by a single operating system kernel and therefore use fewer resources than virtual machines.`} />
                    </div>
                    <div>
                        <Skill title={"Jenkins"} contents={`Jenkins is an open source automation tool written in Java with plugins built for Continuous Integration purpose. Jenkins is used to build and test your software projects continuously making it easier for developers to integrate changes to the project, and making it easier for users to obtain a fresh build. It also allows you to continuously deliver your software by integrating with a large number of testing and deployment technologies.`} />
                    </div>
                </Slider>
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
                    <div className="image__card__container" onClick={goToBibleBot}>
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
                                    See attendance progress, mileages, schedules, menus, maps, notices. You can use your QRcode to verify yourself at everywhere in Korean Bible University (test account: ilar9410 / bible7890)
                                    </p>
                            </div>
                        </div>
                    </div>
                    <div className="second__card" onClick={goToTredulerTodo}>
                        <div className="image__container">
                            <img src={require('../../assets/image5.jpg')} alt="" />
                            <div className="text__container__in__image__container">
                                <span>TREDULER</span>
                                <span>TODO</span>
                            </div>
                        </div>
                        <div className="text__container">
                            <div className="inner__container">
                                <p className="title">TREDULER TODO</p>
                                <p className="text">
                                    The most simple todo application in the world
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div style={{ width: "80px" }} />
                <div className="right">
                    <div className="image__container" onClick={goToAppStore}>
                        <img src={require('../../assets/image3.jpg')} alt="" />
                        <div className="text__in__container">
                            <span>LOVE</span>
                            <span>OF</span>
                            <span>MIDTERM</span>
                        </div>
                    </div>
                    <div className="text__container" onClick={goToAppStore}>
                        <div className="inner__container">
                            <p className="title">LOVE OF MIDTERM</p>
                            <p className="text">
                                Take an exam from whoever you want to chat. Pass the exam, Start chatting from the topics which are from the person.
                            </p>
                        </div>
                    </div>
                    <div onClick={goToKBUStudy} className="second__card">
                        <div className="image__container">
                            <img src={require('../../assets/image4.jpg')} alt="" />
                            <div className="text__container__in__image__container">
                                <span>KBU</span>
                                <span>STUDY</span>
                                <span>ROOM</span>
                            </div>
                        </div>
                        <div className="text__container">
                            <div className="inner__container">
                                <p className="title">KBU STUDY RESERVATION MANAGEMENT SYSTEM</p>
                                <p className="text">
                                    Korean Bible University study room reservation management program. Students can make a reservation, enter study room, exit study room by using qrcode from bible bot application.(test account: test/1234)
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div style={{ height: "280px" }} />

            <div className="school">
                <div className="my__name">
                    <div className="short_line"></div>
                    <span className="name">
                        University
                </span>
                </div>
                <div style={{ height: "40px" }} />
                <p className="middle__big__text">
                    Small,
                </p>
                <p className="middle__big__text">
                    but strong
                </p>
                <div style={{ height: "100px" }} />
                <div className="container">
                    <div className="left">
                        <div className="text__container">
                            <p>
                                Korea Bible University is a university located in Nowon-Gu Seoul si. Computer software major’s history is not long however produced a lot of great developers so I’m very proud of my university
                            </p>
                        </div>
                    </div>
                    <div style={{ width: "40px" }} />
                    <div className="right">
                        <img src={require('../../assets/kbu.jpg')} alt="" />
                        <div onClick={goToKBUSite} className="text__container">
                            <p>KOREA</p>
                            <p>BIBLE</p>
                            <p>University</p>
                        </div>
                    </div>
                </div>
            </div>

            <div style={{ height: "350px" }} />
            <div className="my__name">
                <div className="short_line"></div>
                <span className="name">
                    Other sites
                </span>
            </div>
            <div style={{ height: "40px" }} />
            <p className="middle__big__text">
                You got more
            </p>
            <p className="middle__big__text">
                interesting to me?
            </p>
            <div className="introduce__medium">
                <div className="title">Blog Medium</div>
                <div onClick={goToMedium2} className="medium__popular__post__container">
                    <div className="me__container">
                        <div className="profile__image__container">
                            <img src="https://miro.medium.com/fit/c/80/80/2*iMvVnOFcILbuQCC-f_dOOA.jpeg" alt="medium donggyu profile image" />
                        </div>
                        <div className="my__info__container">
                            <div className="name__container">
                                <p>신동규</p>
                            </div>
                            <div className="date__container">
                                <p className="date">
                                    Feb 10
                                </p>
                                <span>·</span>
                                <p className="read">
                                    6min read
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="post__image__container">
                        <img src="https://miro.medium.com/fit/c/1400/420/0*yUrJTk3A-uol66xV.png" alt="donggyu medium post image" />
                    </div>
                    <div className="title">
                        <p>
                            Showing different files on the same port in Nginx
                        </p>
                    </div>
                    <div className="contents">
                        <p>
                            Let's see how we can show a lot of different static files on the same port in Nginx so that we can deploy a lot of web pages on the one server like a pro.
                        </p>
                    </div>
                </div>
            </div>
            <div className="introduce__youtube">
                <div className="title">
                    Youtube
                </div>
                <div onClick={goToYoutube2} className="youtube__popular__post__container">
                    <div className="me__container">
                        <div className="profile__image__container">
                            <img src="https://miro.medium.com/fit/c/80/80/2*iMvVnOFcILbuQCC-f_dOOA.jpeg" alt="medium donggyu profile image" />
                        </div>
                        <div className="my__info__container">
                            <div className="name__container">
                                <p>treduler</p>
                            </div>
                            <div className="date__container">
                                <p className="date">
                                    Jun 6, 2019
                                </p>
                                <span>·</span>
                                <p className="read">
                                    1:48 mins
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="post__image__container">
                        <img src={require('../../assets/youtubeImage1.png')} alt="donggyu youtube post image" />
                    </div>
                    <div className="title">
                        <p>
                            Web application made with python openCV module
                        </p>
                    </div>
                    <div className="contents">
                        <p>
                            We made a web application that fits screwed image and makes a black&white image to a colorful image by using python openCV module and React framework.!
                        </p>
                    </div>
                </div>
            </div>
            <div className="introduce__youtube">
                <div className="title">
                    Github
                </div>
                <div onClick={goToGitHub} className="youtube__popular__post__container">
                    <div className="me__container">
                        <div className="profile__image__container">
                            <img src="https://avatars1.githubusercontent.com/u/34573243?s=460&u=f4ac4eb7988c7d89fcfa84738baebcbe7e1fcb61&v=4" alt="medium donggyu profile image" />
                        </div>
                        <div className="my__info__container">
                            <div className="name__container">
                                <p>donggyu</p>
                            </div>
                            <div className="date__container">
                                <p className="date">
                                    donggyu shin
                                </p>
                                <span>·</span>
                                <p className="read">
                                    2020.05.28
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="post__image__container">
                        <img src={require('../../assets/githubimage.png')} alt="donggyu youtube post image" />
                    </div>
                    <div className="title">
                        <p>
                            My Github
                        </p>
                    </div>
                    <div className="contents">
                        <p>
                            You can check my github here!!!
                        </p>
                    </div>
                </div>
            </div>
            <div className={"above__instagram"} />
            <div className="instagram">
                <img src={require('../../assets/instagram1.jpg')} alt="insta image 1" className="image1" />
                <img src={require('../../assets/instagram2.jpg')} alt="insta image 1" className="image2" />
                <video id={"video"} autoPlay={true} loop={true} className={"video"} src={require('../../assets/instagram3.mp4')}></video>
                <div className="text__container">

                    <p>Even more</p>
                    <div className="row">
                        <p>on</p>
                        <p>Instagram</p>
                        <div className="line"></div>
                        <div onMouseOver={visibleVideo} onMouseLeave={invisibleVideo} onClick={goToInstagram} className="area"></div>
                    </div>
                </div>

            </div>
            <div className="copyright">
                <div className="text__container">
                    <p>
                        Copyright © 2020 · Shin donggyu Limited
                    </p>
                </div>
                <div className="sns__container">
                    <img onClick={goToInstagram} src={require('../../assets/instagram.png')} alt="" />
                    <img onClick={goToYoutube} src={require('../../assets/youtube.png')} alt="" />
                    <img onClick={goToMedium} src={require('../../assets/blog.png')} alt="" />
                    <img onClick={goToGitHub} src={require('../../assets/github.png')} alt="" />
                </div>
            </div>
            <div onClick={composingEmail} className="button__to__send__email__to__me__container">
                <BsFillEnvelopeFill className={"email__icon"} />
                <span>S</span>
                <span>E</span>
                <span>N</span>
                <span>D</span>
            </div>
        </div>
    )



    function visibleVideo() {
        const video = window.document.getElementById("video") as HTMLVideoElement
        video.style.display = "inline"
        video.play()
    }

    function invisibleVideo() {
        const video = window.document.getElementById("video") as HTMLVideoElement
        video.style.display = "none"

    }

    function goToGitHub() {
        window.open('https://github.com/donggyushin')
    }

    function goToTredulerTodo() {
        window.open('https://apps.apple.com/us/app/treduler-todo/id1514995169')
    }

    function goToKBUStudy() {
        window.open('https://study.kbucard.com/')
    }

    function goToKBUSite() {
        window.open('https://www.bible.ac.kr/')
    }

    function composingEmail() {
        window.open('https://mail.google.com/mail/u/0/?view=cm&fs=1&to=donggyu9410@gmail.com&su=SUBJECT&body=BODY&tf=1')
    }

    function goToYoutube() {
        window.open('https://www.youtube.com/channel/UCEu31Np3_ocJ0JEtuoSbXIA?view_as=subscriber')
    }

    function goToYoutube2() {
        window.open('https://www.youtube.com/watch?v=q41tq7psUe8')
    }

    function goToMedium() {
        window.open('https://medium.com/@donggyu9410')
    }

    function goToMedium2() {
        window.open('https://medium.com/@donggyu9410/nginx-%EA%B0%99%EC%9D%80-%ED%8F%AC%ED%8A%B8%EC%97%90%EC%84%9C-%EA%B0%81%EA%B8%B0-%EB%8B%A4%EB%A5%B8-%ED%8C%8C%EC%9D%BC-%EB%B3%B4%EC%97%AC%EC%A3%BC%EA%B8%B0-d8793b96bbe3')
    }

    function goToInstagram() {

        window.open('https://www.instagram.com/donggyu_00/?hl=ko')
    }

    function goToAppStore() {
        window.open('https://apps.apple.com/us/app/%EC%A4%91%EA%B0%84%EC%9D%98-%EC%97%B0%EC%95%A0/id1509864243')
    }

    function goToBibleBot() {
        window.open('https://kbucard.com/')
    }

}

export default Home