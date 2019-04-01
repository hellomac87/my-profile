import React from "react";

import classNames from "classnames/bind";
import styles from "./Main.module.scss";
import StackContainer from "../containers/StackContainer";

const cx = classNames.bind(styles);

const Main = () => {
  return (
    <div className={cx("container")}>
      <nav className={cx("nav")}>
        <a href="#stack">stack</a>
      </nav>
      <section id="stack" className={cx("stack")}>
        <h1 className={cx("stack__heading")}>tech stack</h1>
        <article>
          <StackContainer />
        </article>
      </section>

      <section className={cx("portfolio")}>
        <article />
      </section>
    </div>
  );
};

export default Main;
