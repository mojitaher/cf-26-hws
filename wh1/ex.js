const input = document.querySelector("#input");
const btn = document.querySelector("#btn");
function renderList(n) {
  let result = [];
  for (let i = 1; i <= n; i++) {
    result.push(`<li class="list-disc text-2xl text-blue-600">${i}</li>`);
  }
  console.log(result);
  console.log(result.join("\n"));
  const targetEl = document.querySelector("#books ul");
  targetEl.innerHTML = result.join("\n");
}
btn.addEventListener("click", function () {
  renderList(input.value);
});
