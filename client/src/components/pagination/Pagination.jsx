import React, {useState} from "react";
import style from "./Pagination.module.css";


const Pagination = ({ recipesXPage, recipes, pages }) => {
    const [currentPage, setCurrentPage] = useState(1);
  const pageNumbers = [];


  for (let i = 1; i <= Math.ceil(recipes.length / recipesXPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <div className={style.divPagination}>
      <ul className={style.lista}>
        {pageNumbers &&
          pageNumbers.map((num) => (
            <li className={`${style.items} ${
                currentPage === num ? style.currentPage : ""
              }`} key={num}>
                <a href="#idHome" onClick={() => {
                    pages(num)
                    setCurrentPage(num)
                }}>{num}</a>
            </li>
          ))}
      </ul>
    </div>
  );
};

export default Pagination;
