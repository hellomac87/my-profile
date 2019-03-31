import React from "react";

import classNames from "classnames/bind";
import styles from "./Demo.module.scss";
import Stack from "./Stack";

const cx = classNames.bind(styles);

const Demo = () => {
  return (
    <div className={cx("container")}>
      <section className={cx("banner")}>nabber</section>
      <section className={cx("stack")}>
        <h1 className={cx("stack__heading")}>tech stack</h1>
        <article>
          <Stack
            imgSrc={
              "https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/240px-Unofficial_JavaScript_logo_2.svg.png"
            }
            title={"Javascript"}
            rating={4}
            description={"description example"}
          />
          <Stack
            imgSrc={
              "https://raw.githubusercontent.com/remojansen/logo.ts/master/ts.png"
            }
            title={"Typescript"}
            rating={3.5}
            description={"description example"}
          />
          <Stack
            imgSrc={
              "https://arcweb.co/wp-content/uploads/2016/10/react-logo-1000-transparent.png"
            }
            title={"React"}
            rating={4}
            description={"description example"}
          />
          <Stack
            imgSrc={
              "https://avatars0.githubusercontent.com/u/13142323?s=400&v=4"
            }
            title={"Redux"}
            rating={4}
            description={"description example"}
          />
          <Stack
            imgSrc={
              "https://upload.wikimedia.org/wikipedia/commons/thumb/3/38/HTML5_Badge.svg/600px-HTML5_Badge.svg.png"
            }
            title={"Html5"}
            rating={4.5}
            description={"description example"}
          />
          <Stack
            imgSrc={"https://redpixel.com/_uploads/CSS3_Badge_512.png"}
            title={"Css3"}
            rating={4.5}
            description={"description example"}
          />
          <Stack
            imgSrc={
              "https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/Sass_Logo_Color.svg/1024px-Sass_Logo_Color.svg.png"
            }
            title={"Sass"}
            rating={4}
            description={"description example"}
          />
        </article>
      </section>
    </div>
  );
};

export default Demo;
