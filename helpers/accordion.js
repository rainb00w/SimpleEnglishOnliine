import React, { useState } from "react";
import s from "../styles/faq.module.scss";

const Accordion = ({ title, content }) => {
  const [isActive, setIsActive] = useState(false);

  return (
    <div className={s.accordion_item}>
      <div className={s.accordion_title} onClick={() => setIsActive(!isActive)}>
        <div className={s.accordion_sign} >{isActive ? "-" : "+"}</div>
        <div>{title}</div>
      </div>
      {isActive && <div className={s.accordion_content}>{content}</div>}
    </div>
  );
};

export default Accordion;
