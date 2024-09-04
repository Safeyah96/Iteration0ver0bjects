const person = {
  name: "John",
  age: "30",
  city: "NewYork",
};

const student = { name: "John", age: 25 };
function haskey(obj, key) {
  if (obj[key]) {
    console.log(true);
  } else {
    console.log(false);
  }
}

haskey(student, "name");

const movies = [
  {
    title: "The Shawshank Redemption",
    director: "Frank Darabont",
    year: 1994,
    genre: "Drama",
  },
  {
    title: "The Godfather",
    director: "Francis Ford Coppola",
    year: 1972,
    genre: "Crime",
  },
  {
    title: "Pulp Fiction",
    director: "Quentin Tarantino",
    year: 1994,
    genre: "Crime",
  },
  {
    title: "The Dark Knight",
    director: "Christopher Nolan",
    year: 2008,
    genre: "Action",
  },
  {
    title: "Forrest Gump",
    director: "Robert Zemeckis",
    year: 1994,
    genre: "Drama",
  },
];
const movies = title.forEach(title);

console.log(movies.title);
