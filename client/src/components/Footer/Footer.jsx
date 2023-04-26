import React from "react";
import style from "./Footer.module.css"
import { FaLinkedinIn } from "react-icons/fa";
import { FiGithub } from "react-icons/fi";




const Social = () => {
  return (
    // <div.motion className={style.divIcons} initial={{opacity: 0.8, scale:0.9}}  transition={{duration:1}} whileInView={{ scale:1  , opacity: 1}} >
    <div className={style.divFooter} >
      <a href="https://github.com/juanfacundotam" className={style.BorderIcons}>
        <FiGithub className={style.icons} />
      </a>
      <a href="https://www.linkedin.com/in/juan-facundo-tam-12b943223/" className={style.BorderIcons}>
        <FaLinkedinIn className={style.icons} />
      </a>
      {/* <a href="https://www.linkedin.com/in/juan-facundo-tam-12b943223/" className={style.linkProvisorios}>
        Linkedin
      </a>
      <a href="https://github.com/juanfacundotam" className={style.linkProvisorios}>
        GitHub
      </a> */}
    </div>
    // </div.motion>
  );
};

export default Social;
