import axios from "axios";
function RenderMeal(meal = {}) {
  const { strMeal, strMealThumb, strInstructions, ings, strCategory, strArea } =
    meal;
  return (
    <div className="max-w-3xl bg-white border border-gray-200 rounded-lg shadow my-4 mx-auto">
      <a href="#">
        <img className="rounded-t-lg w-full" src={strMealThumb} alt={strMeal} />
      </a>
      <div className="p-5">
        <a href="#">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">
            ${strMeal}
          </h5>
        </a>
        <p className="mb-2">
          <span className="bg-blue-100 text-blue-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded">
            ${strCategory}
          </span>
          <span className="bg-blue-100 text-blue-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded">
            ${strArea}
          </span>
        </p>
        <p className="mb-3 font-normal text-gray-700">{strInstructions}</p>
      </div>
      <div className="p-5">
        <h6 className="mb-5">ingredients</h6>
        <ul>
          {ings
            .map((ing) => `<li class="ml-4 mb-2">${ing[0]} - {ing[1]}</li>`)
            .join("")}
        </ul>
      </div>
    </div>
  );
}
const renderPage = (meal, selector) => {
  const taget = document.querySelector(selector);
  if (!taget) {
    console.log("taget not found!");
    return;
  }
  taget.innerHTML = RenderMeal(meal);
};
const fetchMeal = () => {
  const searchParams = new URLSearchParams(location.search);
  const id = searchParams.get("id");
  if (!id) {
    console.log("id not found");
    return;
  }
  axios
    .get(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
    .then((res) => {
      const meal = res.data.meals[0];
      const ings = [];
      for (let i = 1; i <= 20; i++) {
        if (meal[`strIngredient${i}`]) {
          let ing = [meal[`strIngredient${i}`], meal[`strMeasure${i}`]];
          ings.push(ing);
        }
      }
      meal.ings = ings;
      renderPage(meal, "#meal-detail-page");
    });
};

fetchMeal();

export default fetchMeal;
