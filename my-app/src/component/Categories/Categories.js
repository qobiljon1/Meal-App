import React, { useEffect, useContext } from "react";
import "./Categories.scss";
import { myContext } from "../context/Context";

const Categories = () => {
  const { fetchCategories, categories } = useContext(myContext);
  useEffect(() => {
    fetchCategories();
  }, [fetchCategories]);
  return (
    <div className="categories">
      {categories.map((category) => (
        <div key={category.idCategory}>
          <img src={category.strCategoryThumb} alt="#" />
          <h2>{category.strCategory}</h2>
        </div>
      ))}
    </div>
  );
};

export default Categories;
