import React, { useEffect, useState }  from 'react';
import axios from 'axios';

const Meal = () => {
  const [meal, setMeal] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch data from the MealDB API
    axios.get('www.themealdb.com/api/json/v1/1/search.php?s=Arrabiata')
      .then(response => {
        // console.log(response)
        setMeal(response.data.meals[0]);
        setLoading(false);
      })
      .catch(error => {
        console.error("Error fetching the meal data:", error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      {meal ? (
        <div>
          <h1>{meal.strMeal}</h1>
          <img src={meal.strMealThumb} alt={meal.strMeal} />
          <p><strong>Category:</strong> {meal.strCategory}</p>
          <p><strong>Area:</strong> {meal.strArea}</p>
          <p><strong>Instructions:</strong> {meal.strInstructions}</p>
          <h3>Ingredients:</h3>
          <ul>
            {Array.from({ length: 20 }, (_, i) => i + 1).map(i => {
              const ingredient = meal[`strIngredient${i}`];
              const measure = meal[`strMeasure${i}`];
              return ingredient ? <li key={i}>{ingredient} - {measure}</li> : null;
            })}
          </ul>
        </div>
      ) : (
        <div>No meal found</div>
      )}
    </div>
  );
};

export default Meal;
