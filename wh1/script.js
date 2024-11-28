const fantasyNovels = [
  {
    title: "The Hobbit",
    author: "J.R.R. Tolkien",
    publishYear: 1937,
    description:
      "Bilbo Baggins, a hobbit leading a quiet life, is thrust into an epic quest to reclaim the lost Kingdom of Erebor from the fearsome dragon Smaug.",
    coverUrl: "https://css-test.s3.ir-thr-at1.arvanstorage.ir/5907.jpg",
  },
  {
    title: "A Game of Thrones",
    author: "George R.R. Martin",
    publishYear: 1996,
    description:
      "In the Seven Kingdoms of Westeros, noble families vie for control of the Iron Throne, amidst political intrigue and looming supernatural threats.",
    coverUrl: "https://css-test.s3.ir-thr-at1.arvanstorage.ir/goth.jpg",
  },
  {
    title: "The Name of the Wind",
    author: "Patrick Rothfuss",
    publishYear: 2007,
    description:
      "Kvothe, a legendary figure, recounts his journey from a gifted young musician to a notorious wizard, revealing the truths behind his mythic reputation.",
    coverUrl: "https://css-test.s3.ir-thr-at1.arvanstorage.ir/nameofwind.jpg",
  },
  {
    title: "Mistborn: The Final Empire",
    author: "Brandon Sanderson",
    publishYear: 2006,
    description:
      "In a world where ash falls from the sky and mist dominates the night, a skaa street urchin discovers her latent powers and joins a rebellion against the tyrannical Lord Ruler.",
    coverUrl:
      "https://css-test.s3.ir-thr-at1.arvanstorage.ir/mistborn.jpg?versionId=",
  },
  {
    title: "The Lies of Locke Lamora",
    author: "Scott Lynch",
    publishYear: 2006,
    description:
      "Locke Lamora, a master thief and con artist, navigates the treacherous underworld of Camorr, facing challenges that threaten his life and the lives of his trusted companions.",
    coverUrl: "https://css-test.s3.ir-thr-at1.arvanstorage.ir/lockelamora.jpg",
  },
  {
    title: "The Way of Kings",
    author: "Brandon Sanderson",
    publishYear: 2010,
    description:
      "On the storm-ravaged world of Roshar, a former slave, a highprince, and a young woman with a troubled past are drawn into events that will reshape their world.",
    coverUrl:
      "https://css-test.s3.ir-thr-at1.arvanstorage.ir/wayofkings.jpg?versionId=",
  },
  {
    title: "The Blade Itself",
    author: "Joe Abercrombie",
    publishYear: 2006,
    description:
      "In a land on the brink of war, a barbarian, a nobleman, and a crippled torturer find their destinies intertwined in a tale of violence and dark humor.",
    coverUrl: "https://css-test.s3.ir-thr-at1.arvanstorage.ir/blade.jpg",
  },
  {
    title: "The Priory of the Orange Tree",
    author: "Samantha Shannon",
    publishYear: 2019,
    description:
      "A world divided by a centuries-old feud faces the return of an ancient dragon, prompting a queen, a dragon rider, and a mage to confront their intertwined destinies.",
    coverUrl: "https://css-test.s3.ir-thr-at1.arvanstorage.ir/orange.jpg",
  },
  {
    title: "The Black Prism",
    author: "Brent Weeks",
    publishYear: 2010,
    description:
      "In a world where magic is harnessed through the manipulation of light, the most powerful man alive discovers he has a son who could topple his empire.",
    coverUrl: "https://css-test.s3.ir-thr-at1.arvanstorage.ir/prism.jpg",
  },
  {
    title: "The Fifth Season",
    author: "N.K. Jemisin",
    publishYear: 2015,
    description:
      "In a land plagued by constant seismic activity, a woman with the power to control earthquakes embarks on a journey to find her missing daughter amidst societal collapse.",
    coverUrl:
      "https://css-test.s3.ir-thr-at1.arvanstorage.ir/fifth.jpg?versionId=",
  },
];
for (let i = 0; i < fantasyNovels.length; i++) {
  const booksElement = document.querySelector("#books");

  const bookElement = document.createElement("div");
  bookElement.classList.add(
    "flex",
    "items-center",
    "bg-white",
    "border",
    "border-gray-200",
    "rounded-lg",
    "shado",
    "hover:bg-gray-100",
    "cursor-pointer"
  );
  const coverElement = document.createElement("img");
  coverElement.classList.add("object-cover", "w-48", "rounded-s-lg");
  coverElement.src = fantasyNovels[i].coverUrl;
  coverElement.alt = fantasyNovels[i].title;
  bookElement.appendChild(coverElement);
  // new
  const informationElement = document.createElement("div");
  informationElement.classList.add("p-4");
  const titleElement = document.createElement("h5");
  titleElement.classList.add("mb-2", "text-2xl", "font-bold", "text-gray-900");
  titleElement.textContent = fantasyNovels[i].title;
  const descriptionElement = document.createElement("p");
  descriptionElement.classList.add("mb-3", "font-normal", "text-gray-700");
  descriptionElement.textContent = fantasyNovels[i].description;

  informationElement.appendChild(titleElement);
  informationElement.appendChild(descriptionElement);
  bookElement.appendChild(informationElement);
  // end of new
  booksElement.appendChild(bookElement);
}
