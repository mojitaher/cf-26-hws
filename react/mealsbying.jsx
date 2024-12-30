import axios from "axios";
let meals = [];
const RenderMealCard = (meal) => {
  const { idMeal, strMeal, strMealThumb } = meal;
  return (
    <div className="w-full max-w-sm rounded-lg shadow bg-gray-800 border-gray-700">
      <a href="/meal.html?id=">
        <img className="rounded-t-lg" src={strMealThumb} alt={strMeal} />
      </a>
      <div className="p-5">
        <a href="#">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-white">
            {strMeal}
          </h5>
        </a>
      </div>
    </div>
  );
};
const RenderMealCardList = (mls) =>
  mls.map((ml) => RenderMealCard(ml)).join("");

const RenderPage = (selector) => {
  const target = document.querySelector(selector);
  if (!target) {
    console.log("taget not found!");
    return;
  }
  target.innerHTML = (
    <section>
      <div className="max-w-screen-xl columns-3 mx-auto py-4">
        {RenderMealCardList(meals)}
      </div>
    </section>
  );
};

const fetchMeals = () => {
  const searchParams = new URLSearchParams(location.search);
  const id = searchParams.get("id");
  if (!id) {
    console.log("id not found");
    return;
  }
  axios
    .get(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${id}`)
    .then((response) => {
      meals = response.data.meals;
      RenderPage("#meals-by-ings-page");
    });
};

fetchMeals();
export default fetchMeals;
