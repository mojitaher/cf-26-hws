function reset(first, last, date) {
  first.value = "";
  last.value = "";
  date.value = "";
}
function handlerSubmit() {
  let userFirstName = document.querySelector("#userFirstName");
  let userLastName = document.querySelector("#userLastName");
  let date = document.querySelector("#date");
  let tr = document.createElement("tr");
  tr.classList.add("border-b");
  tr.classList.add("border-gray-600");
  tr.classList.add("odd:bg-gray-800");
  tr.classList.add("even:bg-gray-600");

  let td1 = document.createElement("tr");
  let tdFirstName = document.createElement("td");
  tdFirstName.textContent = userFirstName.value;
  tdFirstName.classList.add("px-6", "py-4");

  let tdLastName = document.createElement("td");
  tdLastName.textContent = userLastName.value;
  tdLastName.classList.add("px-6", "py-4");

  let tdDate = document.createElement("td");

  let year = date.value.slice(0, 4);
  let month = date.value.slice(4, 6);
  let day = date.value.slice(6, 8);
  let date2 = year + "-" + month + "-" + day;

  let td2 = document.createElement("td");
  tr.appendChild(td1);
  tr.appendChild(tdFirstName);
  tr.appendChild(tdLastName);
  tr.appendChild(tdDate);
  tr.appendChild(td2);
  document.querySelector("#users").appendChild(tr);
  if (date.value.length != 8 && tdDate != Number) {
    alert(`${date.value} is not Date`);
  } else {
    tdDate.textContent = date2;
  }

  reset(userFirstName, userLastName, date);
}
let btn = document.querySelector("#submit-btn");
btn.addEventListener("click", handlerSubmit);
