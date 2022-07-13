import "./style.css";

type Movie = {
  id: number;
  title: string;
  thumbnail: string;
  description: string;
  comments: string[];
  clicked: boolean;
};

type State = {
  movies: Movie[];
  selectedMovie: Movie | null;
};

let state: State = {
  movies: [
    {
      id: 1,
      title: "Good Will Hunting",
      thumbnail:
        "https://upload.wikimedia.org/wikipedia/en/5/52/Good_Will_Hunting.png",
      description:
        "A touching tale of a wayward young man who struggles to find his identity, living in a world where he can solve any problem, except the one brewing deep within himself, until one day he meets his soul mate who opens his mind and his heart.",
      comments: ["Leave comment"],
      clicked: true,
    },
    {
      id: 2,
      title: "Shawshank Redemption",
      thumbnail:
        "https://m.media-amazon.com/images/M/MV5BMTQ1ODM2MjY3OV5BMl5BanBnXkFtZTgwMTU2MjEyMDE@._V1_.jpg",
      description:
        "Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency. Chronicles the experiences of a formerly successful banker as a prisoner in the gloomy jailhouse of Shawshank after being found guilty of a crime he did not commit.",
      comments: ["Leave comment"],
      clicked: true,
    },
    {
      id: 3,
      title: "The Prestige",
      thumbnail:
        "https://m.media-amazon.com/images/M/MV5BZTdmNjY5ODYtYTJlMi00ZWY0LTg0YWQtZjY5NWM2ZGYzOTA2XkEyXkFqcGdeQXVyMTA2ODkwNzM5._V1_.jpg",
      description:
        "The Prestige is an intricate tale of obsession, jealousy and deception. A mysterious story of two magicians, whose intense rivalry leads them on a life-long battle for supremacy, full of obsession, deceit, and jealousy, with dangerous and deadly consequences.",
      comments: ["Leave comment"],
      clicked: true,
    },
    {
      id: 4,
      title: "Forrest Gump",
      thumbnail:
        "https://i.pinimg.com/736x/56/28/de/5628de60c9f5bd8f1eb26f350c4ce6d0.jpg",
      description:
        "An innocent and kind-hearted Alabama boy, has been dealing with other people's unkindness nearly all his life. Having grown up with beautiful Jenny, his only friend, Forrest yearns to learn all about the ways of the world and embarks on a mission to find his true purpose in life.",
      comments: ["Leave comment"],
      clicked: false,
    },
  ],
  selectedMovie: null,
};

function selectMovie(movie: Movie) {
  movie.clicked = true;
  state.selectedMovie = movie;
}

function renderMovieList () {

  let moviesEl = document.createElement("ul");

    for (let movie of state.movies) {
      let listLi = document.createElement("li");
      listLi.className = "movie";

      let titleH2 = document.createElement("h2");
      titleH2.textContent = movie.title;

      let img = document.createElement("img");
      img.src = movie.thumbnail;
      img.className = "image";

      let descriptionBtn = document.createElement("button");
      descriptionBtn.innerHTML = "More Info";
      descriptionBtn.addEventListener("click", function () {
        selectMovie(movie);
        render();
      });

      moviesEl.append(listLi, titleH2, img, descriptionBtn);
    }
    document.body.append(moviesEl)
}

function render() {
  document.body.textContent = "";

  let mainEl = document.createElement("main");

  let headerH1 = document.createElement("h1");
  headerH1.textContent = "Netflox";

  document.body.append(mainEl, headerH1);

  if (state.selectedMovie === null) {
    renderMovieList()
  }

  else {
    
  }


}

render();
