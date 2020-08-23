import "./styles.scss";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { BsFillEnvelopeFill } from "react-icons/bs";
//@ts-ignore
import Fade from "react-reveal/Fade";
import React from "react";
import Skill from "../Skill/skill";
import Slider from "react-slick";
import Title from "../Title";

function Home() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
  };
  return (
    <div className="Home">
      <div className="top">
        <div className="black__box">
          <text className="span">DG</text>
        </div>
      </div>
      <div
        style={{
          height: "167px",
        }}
      />
      <div className="my__name">
        <Fade left cascade>
          <div className="short_line"></div>
          {/* <span className="name">Shin Donggyu</span> */}
          <span className="name">신동규</span>
        </Fade>
      </div>
      <div
        style={{
          height: "80px",
        }}
      />
      <div className="introduce__me">
        <Fade left cascade>
          {/* <p className="one">Making application that makes your life</p>
          <p className="three">fun and convenient</p> */}
          <p className="one">당신의 삶을 더욱 재미있고 편리하게 만들어주는 어플리케이션을 개발하는 개발자 신동규입니다.</p>

        </Fade>
      </div>
      <div className="under__introduce__me" />
      {/* <Fade bottom cascade> */}
      <div className="big__image">
        <img src={require("../../assets/image1.jpg")} alt="" />
      </div>
      {/* </Fade> */}
      <div
        style={{
          height: "180px",
        }}
      />
      <div className="my__name">
        {/* <Fade left cascade> */}
        <div className="short_line"></div>
        <span className="name">저는 누구일까요?</span>
        {/* </Fade> */}
      </div>
      <div
        style={{
          height: "40px",
        }}
      />
      {/* <Fade left cascade> */}
      <p className="middle__big__text">저는 ..</p>
      {/* </Fade> */}
      <div
        style={{
          height: "80px",
        }}
      />
      {/* <Fade bottom cascade> */}
      <div className="plane__text__container">
        {/* <p className="plane__text">
          A developer who loves music and developing :) I enjoy making
          applications that can make people fun and convenient. I’m a fool stack
          developer, I have more concentrated on front-end development.
        </p> */}
        <p className="plane__text">
          저는 음악과 개발을 사랑하는 개발자입니다 :) 저는 사람들의 삶을 재미있고 윤택하게 만들어주는
          어플리케이션을 개발하는 것을 즐기는 풀스택 개발자입니다. 하지만 현재에는 프론트엔드쪽에
          더욱 집중을 하고있어요.
        </p>
        <div
          style={{
            height: "40px",
          }}
        />
        {/* <p className="plane__text">
          Mostly, I have worked on area where web and mobile development. I
          really like to challenge to new areas which I’ve never experienced
          before, so I’m always ready to enter into any areas.
        </p> */}
        <p className="plane__text">
          저는 주로 웹과 모바일 개발을 해왔습니다. 이전에 경험해보지 못했었던 새로운
          분야에 도전하는것을 정말로 좋아합니다. 어떤 분야에든지 도전할 생각이 있습니다.
        </p>
        <div
          style={{
            height: "40px",
          }}
        />
        {/* <p className="plane__text">
          I’m not a career position yet, but I had managed pretty lot of
          services during my University and I’m currently managing two services
          on the both side of web and App Store.
        </p> */}
        <p className="plane__text">
          저는 현재 경력자는 아닙니다. 하지만, 학창시절 동안 수많은 프로젝트를 진행해 왔었고
          현재에도 2개의 실서비스와 새롭게 준비하고 있는 실서비스 프로젝트또한 있습니다.
          현재 웹과 앱스토어에 런칭중인 서비스들이 있습니다.
        </p>
      </div>

      <div style={{ height: "280px" }} />

      <div className="my__name">
        <div className="short_line"></div>
        <span className="name">기술들</span>
      </div>
      <div style={{ height: "40px" }} />
      <p className="middle__big__text">능숙하지 않다면,</p>
      <p className="middle__big__text">기술이라 하지 않습니다.</p>
      <div className={"under__skills"} />
      <div className={"slider__container"}>
        <Slider {...settings}>
          <div>
            <Skill
              title={"Swift"}
              contents={
                "Swift is a general-purpose, multi-paradigm, compiled programming language developed by Apple Inc. for iOS, iPadOS, macOS, watchOS, tvOS, Linux, and z/OS. Swift is designed to work with Apple's Cocoa and Cocoa Touch frameworks and the large body of existing Objective-C code written for Apple products. It is built with the open source LLVM compiler framework and has been included in Xcode since version 6, released in 2014. On Apple platforms,[11] it uses the Objective-C runtime library which allows C, Objective-C, C++ and Swift code to run within one program."
              }
            />
          </div>
          <div>
            <Skill
              title={"Javascript"}
              contents={
                "JavaScript is a scripting or programming language that allows you to implement complex features on web pages — every time a web page does more than just sit there and display static information for you to look at — displaying timely content updates, interactive maps, animated 2D/3D graphics, scrolling video jukeboxes, etc. — you can bet that JavaScript is probably involved. It is the third layer of the layer cake of standard web technologies, two of which (HTML and CSS) we have covered in much more detail in other parts of the Learning Area."
              }
            />
          </div>
          <div>
            <Skill
              title={"React"}
              contents={`React is a declarative, efficient, and flexible JavaScript library for building user interfaces. It lets you compose complex UIs from small and isolated pieces of code called “components”.`}
            />
          </div>
          <div>
            <Skill
              title={"Node.js"}
              contents={`Node.js is an open-source, cross-platform, JavaScript runtime environment that executes JavaScript code outside of a web browser. Node.js lets developers use JavaScript to write command line tools and for server-side scripting—running scripts server-side to produce dynamic web page content before the page is sent to the user's web browser. Consequently, Node.js represents a "JavaScript everywhere" paradigm, unifying web-application development around a single programming language, rather than different languages for server- and client-side scripts.`}
            />
          </div>
          <div>
            <Skill
              title={"Typescript"}
              contents={
                "TypeScript is an open-source programming language developed and maintained by Microsoft. It is a strict syntactical superset of JavaScript and adds optional static typing to the language. TypeScript is designed for development of large applications and transcompiles to JavaScript. As TypeScript is a superset of JavaScript, existing JavaScript programs are also valid TypeScript programs."
              }
            />
          </div>
          <div>
            <Skill
              title={"Express"}
              contents={`This is over simplifying it, but Express.js is to Node.js what Ruby on Rails or Sinatra is to Ruby.

Express 3.x is a light-weight web application framework to help organize your web application into an MVC architecture on the server side. You can use a variety of choices for your templating language (like EJS, Jade, and Dust.js).

You can then use a database like MongoDB with Mongoose (for modeling) to provide a backend for your Node.js application. Express.js basically helps you manage everything, from routes, to handling requests and views.`}
            />
          </div>
          <div>
            <Skill
              title={"Graphql"}
              contents={`GraphQL is a query language for your API, and a server-side runtime for executing queries by using a type system you define for your data. GraphQL isn't tied to any specific database or storage engine and is instead backed by your existing code and data.`}
            />
          </div>
          <div>
            <Skill
              title={"MySql"}
              contents={
                "MySQL, the most popular Open Source SQL database management system, is developed, distributed, and supported by Oracle Corporation."
              }
            />
          </div>
          <div>
            <Skill
              title={"Mongodb"}
              contents={
                "MongoDB is a general purpose, document-based, distributed database built for modern application developers and for the cloud era. No database makes you more productive."
              }
            />
          </div>
          <div>
            <Skill
              title={"Firebase"}
              contents={
                "Firebase is a Backend-as-a-Service — BaaS — that started as a YC11 startup and grew up into a next-generation app-development platform on Google Cloud Platform."
              }
            />
          </div>
          <div>
            <Skill
              title={"Java"}
              contents={`Java is a general-purpose programming language that is class-based, object-oriented, and designed to have as few implementation dependencies as possible. It is intended to let application developers write once, run anywhere (WORA), meaning that compiled Java code can run on all platforms that support Java without the need for recompilation. Java applications are typically compiled to bytecode that can run on any Java virtual machine (JVM) regardless of the underlying computer architecture. The syntax of Java is similar to C and C++, but it has fewer low-level facilities than either of them. As of 2019, Java was one of the most popular programming languages in use according to GitHub, particularly for client-server web applications, with a reported 9 million developers.`}
            />
          </div>
          <div>
            <Skill
              title={"Python"}
              contents={`Python is an interpreted, object-oriented, high-level programming language with dynamic semantics. Its high-level built in data structures, combined with dynamic typing and dynamic binding, make it very attractive for Rapid Application Development, as well as for use as a scripting or glue language to connect existing components together.`}
            />
          </div>
          <div>
            <Skill
              title={"Linux"}
              contents={`From smartphones to cars, supercomputers and home appliances, home desktops to enterprise servers, the Linux operating system is everywhere.

Linux has been around since the mid-1990s and has since reached a user-base that spans the globe. Linux is actually everywhere: It?s in your phones, your thermostats, in your cars, refrigerators, Roku devices, and televisions. It also runs most of the Internet, all of the world’s top 500 supercomputers, and the world’s stock exchanges.

But besides being the platform of choice to run desktops, servers, and embedded systems across the globe, Linux is one of the most reliable, secure and worry-free operating systems available.`}
            />
          </div>
          <div>
            <Skill
              title={"Nginx"}
              contents={`NGINX is open source software for web serving, reverse proxying, caching, load balancing, media streaming, and more. It started out as a web server designed for maximum performance and stability. In addition to its HTTP server capabilities, NGINX can also function as a proxy server for email (IMAP, POP3, and SMTP) and a reverse proxy and load balancer for HTTP, TCP, and UDP servers.`}
            />
          </div>
          <div>
            <Skill
              title={"Docker"}
              contents={`Docker is a set of platform as a service (PaaS) products that uses OS-level virtualization to deliver software in packages called containers.[6] Containers are isolated from one another and bundle their own software, libraries and configuration files; they can communicate with each other through well-defined channels.[7] All containers are run by a single operating system kernel and therefore use fewer resources than virtual machines.`}
            />
          </div>
          <div>
            <Skill
              title={"Jenkins"}
              contents={`Jenkins is an open source automation tool written in Java with plugins built for Continuous Integration purpose. Jenkins is used to build and test your software projects continuously making it easier for developers to integrate changes to the project, and making it easier for users to obtain a fresh build. It also allows you to continuously deliver your software by integrating with a large number of testing and deployment technologies.`}
            />
          </div>
        </Slider>
      </div>

      {/* </Fade> */}
      <div
        style={{
          height: "340px",
        }}
      />
      <div className="recent_projects__container">
        <div className="left">
          <div className="top">
            <div className="my__name">
              <div className="short_line"></div>
              <span className="name">최근 프로젝트</span>
            </div>
            <div style={{ height: "40px" }} />
            <p className="middle__big__text">신중하게 생각하고,</p>
            <p className="middle__big__text">자신감있게 만들자</p>
          </div>
          <div
            style={{
              height: "40px",
            }}
          />
          <div className="image__card__container" onClick={goToBibleBot}>
            <div className="image__container">
              <img id={"image1"} src={require("../../assets/image2.jpg")} />
              <div className="text__container2">
                <span>성서봇</span>
                {/* <span>BOT</span> */}
              </div>
            </div>
            <div className="text__container">
              <div className="inner__container">
                <p className="title">성서봇</p>
                {/* <p className="text">
                  See attendance progress, mileages, schedules, menus, maps,
                  notices. You can use your QRcode to verify yourself at
                  everywhere in Korean Bible University. I used Typescript,
                  express, React, Redux, Redux-thunk (test account: ilar9410 /
                  bible7890)
                </p> */}
                <p className="text">

                  python crawling 서버로 채플일수, 학식메뉴, 시간표, 출석정보, 학사일정, 학교 게시판 등을 모두 조회할 수 있는 웹 어플리케이션입니다. 총 4명의 개발자가 참여했으며 결과물로는 웹 어플리케이션, ios / android 어플리케이션이 있습니다. 저는 웹 어플리케이션 제작을 맡았으며 Typescript, 함수형 컴포넌트 기반의 React, Redux-Thunk, Nginx, Docker, Jenkins, Nodejs, Express 를 사용하였습니다. 크롤링 서버는 작업하지 않았으나, 학교 영양사님이 당일의 학식을 올려서 학식에 대한 데이터를 저장하는 백엔드는 제가 작업하였습니다.  테스트 계정으로는 id: ilar9410, pw: bible7890 계정을 이용해주시면 됩니다.
                </p>
              </div>
            </div>
          </div>
          <div className="second__card" onClick={goToTredulerTodo}>
            <div className="image__container">
              <img src={require("../../assets/image5.jpg")} alt="" />
              <div className="text__container__in__image__container">
                <span>TREDULER</span>
                <span>TODO</span>
              </div>
            </div>
            <div className="text__container">
              <div className="inner__container">
                <p className="title">TREDULER TODO</p>
                <p className="text">
                  앱스토어에서 가장 심플한 투두리스트 :)
                </p>
              </div>
            </div>
          </div>
        </div>
        <div style={{ width: "80px" }} />
        <div className="right">
          <div className="image__container" onClick={goToAppStore}>
            <img src={require("../../assets/image3.jpg")} alt="" />
            <div className="text__in__container">
              {/* <span>LOVE</span>
              <span>OF</span>
              <span>MIDTERM</span> */}
              <span>중간의</span>
              <span>연애</span>
            </div>
          </div>
          <div className="text__container" onClick={goToAppStore}>
            <div className="inner__container">
              <p className="title">중간의 연애</p>
              <p className="text">
                성서봇 웹 어플리케이션을 만들고 난 이후 모바일 어플리케이션에도 관심이 생겨서 swift라는 언어를 공부해보고 학교 졸업작품을 위해 제작한 데이팅 어플리케이션입니다. 백엔드는 Firebase를 사용하였으며 현재도 앱스토어에 런칭중입니다. 자신이 등록한 주소지를 기반으로 상대방과의 거리, 이미지 업로드, 실시간 채팅 등의 기능을 구현하였습니다.
              </p>
            </div>
          </div>
          <div onClick={goToKBUStudy} className="second__card">
            <div className="image__container">
              <img src={require("../../assets/image4.jpg")} alt="" />
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
                  성서봇 연계 프로젝트로 성서봇 디지털 모바일 학생증에서 발급되어지는 qrcode로 학생증 없이도 손쉽게 스터디실 예약 및 이용을 가능하게 한 프로젝트입니다. React와 Express를 이용하여 개발하였고 현재 ubuntu 18.04 서버에서 작동중에 있습니다.

                  (테스트 계정: ilar9410 / bible7890)
                </p>
              </div>
            </div>
          </div>
          <div className="second__card" onClick={goToMatzip}>
            <div className="image__container">
              <img src={require("../../assets/image6.jpg")} alt="" />
              <div className="text__container__in__image__container">
                {/* <span>TREDULER</span>
                <span>TODO</span> */}
                <span>맛집찾아줘</span>
              </div>
            </div>
            <div className="text__container">
              <div className="inner__container">
                <p className="title">맛집찾아줘</p>
                <p className="text">
                  현재 제작중인 어플리케이션입니다. React-Native와 Express를 이용해서 제작중에 있습니다. 유저의 디바이스의 경도와 위도 정보를 기반으로 현재 유저의 주소를 네이버 API를 이용해 얻어내고, 해당 주소를 기반으로 한 네이버 페이지에서 근처 맛집에 대한 정보를 카테고리 별로 분류해서 데이터를 가져와 유저에게 렌더링해줍니다. m.place.naver.com 페이지에서 데이터를 렌더링해오며, 자바스크립트로 동적으로 렌더링이 되어지는 페이지이기 때문에 일반적인 ajax get 메서드로는 스크롤링이 불가능하여서 puppeteer라는 nodejs 모듈을 이용하여 동적으로 브라우저를 컨트롤링하여 데이터를 크롤링해오고 있습니다. 현재 서버는 개발이 완료되어져서 ubuntu 환경에서 돌아가고 있으며 react-native로 모바일 어플리케이션 제작중에 있습니다. Typescript 기반의 react-native와 Redux, Redux-thunk 등을 이용해 개발진행중이고, 백엔드는 Typescript 기반의 Express 서버를 돌리고 있으며 ubuntu 18.04 서버에 배포중입니다. 제작하는 과정은 유튜브에 실시간 라이브코딩이라는 제목으로 업로드하고 있는 중입니다. 궁금하시다면
                  https://www.youtube.com/watch?v=AsF_FAEk4Oo&t=185s 이곳에서 확인해보실 수 있으십니다.
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
          <span className="name">대학교</span>
        </div>
        <div style={{ height: "40px" }} />
        <p className="middle__big__text">작지만,</p>
        <p className="middle__big__text">강하다</p>
        <div style={{ height: "100px" }} />
        <div className="container">
          <div className="left">
            <div className="text__container">
              {/* <p>
                Korea Bible University is a university located in Nowon-Gu Seoul
                si. Computer software major’s history is not long however
                produced a lot of great developers so I’m very proud of my
                university
              </p> */}
              <p>
                한국성서대학교는 서울시 노원구에 위치한 대학교입니다. 컴퓨터 소프트웨어 학과의
                역사는 그리 길지않지만, 훌륭한 개발자 선배님들을 많이 배출한 학교입니다.
                저는 저의 학교가 자랑스럽습니다 :)
              </p>
            </div>
          </div>
          <div style={{ width: "40px" }} />
          <div className="right">
            <img src={require("../../assets/kbu.jpg")} alt="" />
            <div onClick={goToKBUSite} className="text__container">
              {/* <p>KOREA</p>
              <p>BIBLE</p>
              <p>University</p> */}
              <p>한국성서대학교</p>
            </div>
          </div>
        </div>
      </div>

      <div style={{ height: "350px" }} />
      <div className="my__name">
        <div className="short_line"></div>
        <span className="name">다른 활동들</span>
      </div>
      <div style={{ height: "40px" }} />
      {/* <p className="middle__big__text">You got more</p>
      <p className="middle__big__text">interesting to me?</p> */}
      <p className="middle__big__text">저에 대해서</p>
      <p className="middle__big__text">더 알고싶으신가요?</p>
      <div className="introduce__medium">
        <div className="title">Blog Medium</div>
        <div onClick={goToMedium2} className="medium__popular__post__container">
          <div className="me__container">
            <div className="profile__image__container">
              <img
                src="https://miro.medium.com/fit/c/80/80/2*iMvVnOFcILbuQCC-f_dOOA.jpeg"
                alt="medium donggyu profile image"
              />
            </div>
            <div className="my__info__container">
              <div className="name__container">
                <p>신동규</p>
              </div>
              <div className="date__container">
                <p className="date">Feb 10</p>
                <span>·</span>
                <p className="read">6min read</p>
              </div>
            </div>
          </div>
          <div className="post__image__container">
            <img
              src="https://miro.medium.com/fit/c/1400/420/0*yUrJTk3A-uol66xV.png"
              alt="donggyu medium post image"
            />
          </div>
          <div className="title">
            <p>Showing different files on the same port in Nginx</p>
          </div>
          <div className="contents">
            <p>
              Let's see how we can show a lot of different static files on the
              same port in Nginx so that we can deploy a lot of web pages on the
              one server like a pro.
            </p>
          </div>
        </div>
      </div>
      <div className="introduce__youtube">
        <div className="title">Youtube</div>
        <div
          onClick={goToYoutube2}
          className="youtube__popular__post__container"
        >
          <div className="me__container">
            <div className="profile__image__container">
              <img
                src="https://miro.medium.com/fit/c/80/80/2*iMvVnOFcILbuQCC-f_dOOA.jpeg"
                alt="medium donggyu profile image"
              />
            </div>
            <div className="my__info__container">
              <div className="name__container">
                <p>treduler</p>
              </div>
              <div className="date__container">
                <p className="date">Jun 6, 2019</p>
                <span>·</span>
                <p className="read">1:48 mins</p>
              </div>
            </div>
          </div>
          <div className="post__image__container">
            <img
              src={require("../../assets/youtubeImage1.png")}
              alt="donggyu youtube post image"
            />
          </div>
          <div className="title">
            <p>Web application made with python openCV module</p>
          </div>
          <div className="contents">
            <p>
              We made a web application that fits screwed image and makes a
              black&white image to a colorful image by using python openCV
              module and React framework.!
            </p>
          </div>
        </div>
      </div>
      <div className="introduce__youtube">
        <div className="title">Github</div>
        <div onClick={goToGitHub} className="youtube__popular__post__container">
          <div className="me__container">
            <div className="profile__image__container">
              <img
                src="https://avatars1.githubusercontent.com/u/34573243?s=460&u=f4ac4eb7988c7d89fcfa84738baebcbe7e1fcb61&v=4"
                alt="medium donggyu profile image"
              />
            </div>
            <div className="my__info__container">
              <div className="name__container">
                <p>donggyu</p>
              </div>
              <div className="date__container">
                <p className="date">donggyu shin</p>
                <span>·</span>
                <p className="read">2020.05.28</p>
              </div>
            </div>
          </div>
          <div className="post__image__container">
            <img
              src={require("../../assets/githubimage.png")}
              alt="donggyu youtube post image"
            />
          </div>
          <div className="title">
            <p>My Github</p>
          </div>
          <div className="contents">
            <p>You can check my github here!!!</p>
          </div>
        </div>
      </div>
      <div className="margin__above__youtube__lectures"></div>
      <div className="my__name">
        <div className="short_line"></div>
        <span className="name">강의</span>
      </div>
      <div style={{ height: "40px" }} />
      {/* <p className="middle__big__text">I teaches</p>
      <p className="middle__big__text">programming on online</p> */}
      <p className="middle__big__text">저는 온라인에서</p>
      <p className="middle__big__text">수업도 하고있습니다</p>
      <div className="lectures__container">
        <div onClick={goToSwiftBasicTutorial} className="card">
          <img src={require("../../assets/lectureImage1.jpg")} alt="" />
          <div className="black__view">
            {/* <p className="white__text">IOS</p>
            <p className="white__text">development</p>
            <p className="white__text">basic</p>
            <p className="white__text">course</p> */}
            <p className="white__text">IOS</p>
            <p className="white__text">기초 강좌</p>

          </div>
          <div className="text__container">
            {/* <p className="description">
              Let's learn how to make an ios application without storyboard!
            </p>
            <p className="description">
              I'm sure it will really helpful for you.
            </p> */}
            <p className="description">
              스토리 보드 없이 ios 앱을 개발하는 방법!
            </p>

          </div>
        </div>
        <div onClick={goToPokemonTutorial} className="card">
          <img src={require("../../assets/lectureImage2.png")} alt="" />
          <div className="black__view">
            <p className="white__text">Pokemon</p>
            <p className="white__text">Book</p>
          </div>
          <div className="text__container">
            {/* <p className="description">Let's build pokemon book application.</p>
            <p className="description">
              You can learn how to build an app beatuiful and how to implement
              awesome animation effect!
            </p> */}
            <p className="description">포켓몬 도감 앱을 개발해보자.</p>
            <p className="description">
              애니메이션 효과를 줘서 아름다운 도감앱을 만들어봐요
            </p>
          </div>
        </div>
      </div>
      <div className="lectures__container">
        <div onClick={goToPythonAlgorithm} className="card">
          <img src={require("../../assets/algorithmimage.jpeg")} alt="" />
          <div className="black__view">
            <p className="white__text">Python</p>
            <p className="white__text">Algorithm</p>
            <p className="white__text">basic</p>
            <p className="white__text">course</p>
          </div>
          <div className="text__container">
            <p className="description">Let's learn algorithms in Python</p>
            <p className="description">the most easy programming language</p>
          </div>
        </div>
        <div onClick={goToReactNativeCrushCourse} className="card">
          <img src={require("../../assets/react-native.png")} alt="" />
          <div className="black__view">
            <p className="white__text">React</p>
            <p className="white__text">Native</p>
            <p className="white__text">Crush</p>
            <p className="white__text">Course</p>
          </div>
          <div className="text__container">
            <p className="description">
              Let's learn React Native in one course
            </p>
          </div>
        </div>
      </div>
      <div
        style={{
          marginTop: "100px",
        }}
        className="my__name"
      >
        <div className="short_line"></div>
        <span className="name">경력</span>
      </div>
      <div style={{ height: "40px" }} />
      {/* <p className="middle__big__text">My career is growing</p>
      <p className="middle__big__text">like a tree</p> */}
      <p className="middle__big__text">나무처럼 쑥쑥자라날</p>
      <p className="middle__big__text">저의 경력란입니다. </p>
      {/* <div className="career__container">
                <div className="item">
                    <img onClick={goToJinhakApply} src={require('../../assets/jinhak.png')} />
                    <div className="right">
                        <div className="name">Jinhak apply</div>
                        <div className="desc">
                            Application service in Korea
                        </div>
                        <div className="my_position">
                            Work as fullstack developer in 서비스사업본부
                        </div>
                        <div className="from">
                            From: 2020. 7. 1
                        </div>
                        <div className="to">
                            To: ~
                        </div>
                        <div style={{
                            height: "40px"
                        }}></div>
                        <Title text={"What I did?"} />
                        <div style={{
                            height: "30px"
                        }}></div>
                        <div className="row">
                            <div className="dot"></div>
                            <div className="text">Make University application by oz lifting tools</div>
                        </div>
                        <div className="row">
                            <div className="dot"></div>
                            <div className="text">MSsql</div>
                        </div>
                        <div className="row">
                            <div className="dot"></div>
                            <div className="text">Make web page with dot net framework</div>
                        </div>
                        {mobileCheck() ? <div>
                            <div className="row">
                                <div className="dot"></div>
                                <div className="text">Migration worker tools from window form</div>
                            </div>
                            <div className="row">
                                <div className="mobile__text">
                                    to web form
                                </div>
                            </div>
                        </div> : <div className="row">
                                <div className="dot"></div>
                                <div className="text">Migration worker tools from window form to web form</div>
                            </div>}

                    </div>
                </div>
            </div> */}
      <div className={"above__instagram"} />
      <div className="instagram">
        <img
          src={require("../../assets/instagram1.jpg")}
          alt="insta image 1"
          className="image1"
        />
        <img
          src={require("../../assets/instagram2.jpg")}
          alt="insta image 2"
          className="image2"
        />
        <video
          id={"video"}
          autoPlay={true}
          loop={true}
          className={"video"}
          src={require("../../assets/instagram3.mp4")}
        ></video>
        <div className="text__container">
          <p>Even more</p>
          <div className="row">
            <p>on</p>
            <p>Instagram</p>
            <div className="line"></div>
            <div
              onMouseOver={visibleVideo}
              onMouseLeave={invisibleVideo}
              onClick={goToInstagram}
              className="area"
            ></div>
          </div>
        </div>
      </div>
      <div className="copyright">
        <div className="text__container">
          <p>Copyright © 2020 · Shin donggyu Limited</p>
        </div>
        <div className="sns__container">
          <img
            onClick={goToInstagram}
            src={require("../../assets/instagram.png")}
            alt=""
          />
          <img
            onClick={goToYoutube}
            src={require("../../assets/youtube.png")}
            alt=""
          />
          <img
            onClick={goToMedium}
            src={require("../../assets/blog.png")}
            alt=""
          />
          <img
            onClick={goToGitHub}
            src={require("../../assets/github.png")}
            alt=""
          />
        </div>
      </div>
      <div
        onClick={composingEmail}
        className="button__to__send__email__to__me__container"
      >
        <BsFillEnvelopeFill className={"email__icon"} />
        <span>S</span>
        <span>E</span>
        <span>N</span>
        <span>D</span>
      </div>
    </div>
  );

  function goToMatzip() {
    window.open("https://www.youtube.com/watch?v=AsF_FAEk4Oo&t=185s");
  }

  function mobileCheck(): boolean {
    if (window.innerWidth < 700) {
      return true;
    } else {
      return false;
    }
  }

  function goToReactNativeCrushCourse() {
    window.open("https://www.youtube.com/watch?v=uDyqzObpR8A&t=490s");
  }

  function goToPythonAlgorithm() {
    window.open(
      "https://www.youtube.com/watch?v=9_b7Ru-WG6I&list=PLG9rdv7aU2N73DKlQ6MZceOtwf1iJxcHJ"
    );
  }

  function goToJinhakApply() {
    window.open("http://apply.jinhakapply.com/");
  }

  function goToPokemonTutorial() {
    window.open(
      "https://www.youtube.com/watch?v=QyA7nqBJ-K8&list=PLG9rdv7aU2N7OxDYrDwkd0KNjLjA3eNjr"
    );
  }

  function goToSwiftBasicTutorial() {
    window.open(
      "https://www.youtube.com/watch?v=25Mb_iUJzIA&list=PLG9rdv7aU2N4-nuDqAUtfDlKs4iRJaiu7"
    );
  }

  function visibleVideo() {
    const video = window.document.getElementById("video") as HTMLVideoElement;
    video.style.display = "inline";
    video.play();
  }

  function invisibleVideo() {
    const video = window.document.getElementById("video") as HTMLVideoElement;
    video.style.display = "none";
  }

  function goToGitHub() {
    window.open("https://github.com/donggyushin");
  }

  function goToTredulerTodo() {
    window.open("https://apps.apple.com/us/app/treduler-todo/id1514995169");
  }

  function goToKBUStudy() {
    window.open("https://study.kbucard.com/");
  }

  function goToKBUSite() {
    window.open("https://www.bible.ac.kr/");
  }

  function composingEmail() {
    window.open(
      "https://mail.google.com/mail/u/0/?view=cm&fs=1&to=donggyu9410@gmail.com&su=SUBJECT&body=BODY&tf=1"
    );
  }

  function goToYoutube() {
    window.open(
      "https://www.youtube.com/channel/UCEu31Np3_ocJ0JEtuoSbXIA?view_as=subscriber"
    );
  }

  function goToYoutube2() {
    window.open("https://www.youtube.com/watch?v=q41tq7psUe8");
  }

  function goToMedium() {
    window.open("https://medium.com/@donggyu9410");
  }

  function goToMedium2() {
    window.open(
      "https://medium.com/@donggyu9410/nginx-%EA%B0%99%EC%9D%80-%ED%8F%AC%ED%8A%B8%EC%97%90%EC%84%9C-%EA%B0%81%EA%B8%B0-%EB%8B%A4%EB%A5%B8-%ED%8C%8C%EC%9D%BC-%EB%B3%B4%EC%97%AC%EC%A3%BC%EA%B8%B0-d8793b96bbe3"
    );
  }

  function goToInstagram() {
    window.open("https://www.instagram.com/donggyu_00/?hl=ko");
  }

  function goToAppStore() {
    window.open(
      "https://apps.apple.com/us/app/%EC%A4%91%EA%B0%84%EC%9D%98-%EC%97%B0%EC%95%A0/id1509864243"
    );
  }

  function goToBibleBot() {
    window.open("https://kbucard.com/");
  }
}

export default Home;
