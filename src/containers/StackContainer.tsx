import React, { Component } from "react";
import Stack from "../components/Stack";

const stackList = [
  {
    title: "Javascript",
    imgSrc:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/240px-Unofficial_JavaScript_logo_2.svg.png"
  },
  {
    title: "Typescript",
    imgSrc: "https://raw.githubusercontent.com/remojansen/logo.ts/master/ts.png"
  },
  {
    title: "React",
    imgSrc:
      "https://arcweb.co/wp-content/uploads/2016/10/react-logo-1000-transparent.png"
  },
  {
    title: "Redux",
    imgSrc: "https://avatars0.githubusercontent.com/u/13142323?s=400&v=4"
  },
  {
    title: "NodeJS",
    imgSrc:
      "https://seeklogo.com/images/N/nodejs-logo-FBE122E377-seeklogo.com.png"
  },
  {
    title: "Html5",
    imgSrc:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/3/38/HTML5_Badge.svg/600px-HTML5_Badge.svg.png"
  },
  {
    title: "Css3",
    imgSrc: "https://redpixel.com/_uploads/CSS3_Badge_512.png"
  },
  {
    title: "Sass",
    imgSrc:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/Sass_Logo_Color.svg/1024px-Sass_Logo_Color.svg.png"
  },
  {
    title: "Git",
    imgSrc: "https://git-scm.com/images/logos/downloads/Git-Icon-1788C.png"
  },
  {
    title: "ThanosJs",
    imgSrc: "https://thanosjs.org/assets/glove.png"
  }
];

class StackContainer extends Component {
  render() {
    return (
      <React.Fragment>
        {stackList.map((s, i) => (
          <Stack key={s.title} imgSrc={s.imgSrc} title={s.title} />
        ))}
      </React.Fragment>
    );
  }
}

export default StackContainer;
