import React, { useState, useContext, useCallback } from "react";
import "./HomePage.scss";
import { myContext } from "../context/Context";
const HomePage = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const { fetchHomePageMeals, meals } = useContext(myContext);

  const fetchMealsHandler = useCallback(() => {
    fetchHomePageMeals(searchTerm);
    setSearchTerm("")
  }, [searchTerm, fetchHomePageMeals]);

  return (
    <div className="home">
      <div className="home-search">
        <input
          type="text"
          placeholder="Type a meal name..."
          value={searchTerm}
          onChange={(e) => {
            setSearchTerm(e.target.value);
          }}
        />
        <button onClick={fetchMealsHandler}>Search Meal</button>
      </div>
      <div className="home-grid">
        
        {meals ? (
          meals.map((meal) => (
              <div className="home-meals" key={Math.random() * 1000}>
                <img src={meal.strMealThumb} alt="img" />
                <h2 className="home-Caption">{meal.strMeal}</h2>
              </div>
          ))
        ) : (
          <h2>No meals found! Try another word...</h2>
        )}
      </div>
    </div>
  );
};

export default HomePage;
