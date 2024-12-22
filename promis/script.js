const renderMeal = (meal = {}) => {
  const { strMeal, strMealThumb, strInstructions, strCategory, strArea } = meal;

  const getIngredientsValue = (meal) => {
    let ingredients = [];
    for (let i = 1; i <= 20; i++) {
      const ingredient = meal[`strIngredient${i}`];
      const measure = meal[`strMeasure${i}`];
      if (ingredient.trim() !== "") {
        ingredients.push(` ${ingredient} : ${measure}`.trim());
      }
    }
    return ingredients;
  };

  const ingredients = getIngredientsValue(meal);

  document.getElementById("app").innerHTML = `
      <div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow mb-4 m-auto">
        <a href="#">
          <img class="rounded-t-lg " src="${strMealThumb}" alt="${strMeal}" />
        </a>
        <div class="p-5">
          <a href="#">
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900">
              ${strMeal}
            </h5>
            <span class="bg-blue-100 text-blue-800 rounded-md px-2 py-1 mr-2">
              ${strCategory}
            </span>
            <span class="bg-blue-100 text-blue-800 rounded-md px-2 py-1 mr-2">
              ${strArea}
            </span>
          </a>
          <p class="mb-3 font-normal text-gray-700">${strInstructions}</p>
          <h6 class="mt-4 mb-2 text-xl font-semibold">Ingredients:</h6>
          <ol class="list-decimal">
            ${ingredients
              .map((ingredient) => `<li>${ingredient}</li>`)
              .join("")}
          </ol>
        </div>
      </div>
    `;
};

axios.get("https://www.themealdb.com/api/json/v1/1/random.php").then((res) => {
  renderMeal(res.data.meals[0]);
  console.log(res.data.meals[0]);
});
