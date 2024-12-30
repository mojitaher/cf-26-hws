import axios from "axios";
let ingredients = [];
let page = 1;
const perPage = 12;

const nextPage = () => {
  if (page + 1 <= Math.ceil(ingredients.length / perPage)) {
    page += 1;
    RenderIngPage("#ings-page");
  }
};

const prevPage = () => {
  if (page - 1 > 0) {
    page -= 1;
    RenderIngPage("#ings-page");
  }
};
const RenderPagination = (start, end, length) => {
  return (
    <div className="flex flex-col items-center">
      <span className="text-sm text-gray-700 dark:text-gray-400">
        Showing
        <span className="font-semibold text-white">{start + 1}</span>
        to
        <span className="font-semibold  text-white">{end}</span>
        of
        <span className="font-semibold text-white">{length}</span>
        Entries
      </span>
      <div className="inline-flex mt-2 xs:mt-0">
        <button
          className="flex items-center justify-center px-4 h-10 text-base font-medium text-white bg-gray-800 rounded-s hover:bg-gray-900 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
          onClick={prevPage()}
        >
          <svg
            className="w-3.5 h-3.5 me-2 rtl:rotate-180"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 14 10"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M13 5H1m0 0 4 4M1 5l4-4"
            />
          </svg>
          Prev
        </button>
        <button
          className="flex items-center justify-center px-4 h-10 text-base font-medium text-white bg-gray-800 border-0 border-s border-gray-700 rounded-e hover:bg-gray-900 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
          onClick={nextPage()}
        >
          Next
          <svg
            className="w-3.5 h-3.5 ms-2 rtl:rotate-180"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 14 10"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M1 5h12m0 0L9 1m4 4L9 9"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};
const RenderIngCart = (ing) => {
  const { strIngredient } = ing;
  return `<div class="mb-4">
            <a
              href="/mealbying.html?id=${strIngredient}"
              class="flex items-center border rounded-lg shadow w-full max-w-xl border-gray-700 bg-gray-800 hover:bg-gray-700"
            >
              <img
                class="object-cover h-auto w-48"
                src="https://www.themealdb.com/images/ingredients/${strIngredient}.png"
                alt="${strIngredient}"
              />
              <div class="flex flex-col justify-between p-4 leading-normal">
                <h5 class="mb-2 text-2xl font-bold tracking-tight text-white">
                  ${strIngredient}
                </h5>
              </div>
            </a>
          </div>`;
};
const RenderIngCartList = (ings) =>
  ings.map((ing) => RenderIngCart(ing)).join("");

const RenderIngPage = (selctor) => {
  const target = document.querySelector(selctor);

  const start = (page - 1) * perPage;
  const end = page * perPage;

  if (!target) {
    return;
  }

  target.innerHTML = (
    <>
      <div className="max-w-screen-xl columns-3 mx-auto py-4">
        {RenderIngCartList(ingredients.slice(start, end))}
      </div>
      <div className="max-w-screen-xl mx-auto my-4">
        {RenderPagination(start, end, ingredients.length)}
      </div>
    </>
  );
};

const fetchIngridients = () => {
  axios
    .get("https://www.themealdb.com/api/json/v1/1/list.php?i=list")
    .then((response) => {
      ingredients = response.data.meals;
      RenderIngPage("#ings-page");
    });
};

fetchIngridients();
export default fetchIngridients;
