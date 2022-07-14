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
  movies: [],
  selectedMovie: null,
};

function getMovieData() {
  fetch('http://localhost:3010/movies')
  .then(resp => resp.json())
  .then(dataFromServer => {
    state.movies=dataFromServer
  render()
  })
}
function postNewMovie(){
  fetch('http://localhost:3010/movies')
}
getMovieData()

function selectMovie(movie: Movie) {
  movie.clicked = true;
  state.selectedMovie = movie;
}

function deSelectMovie() {
  state.selectedMovie = null;
}

function renderMovieList() {
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
  document.body.append(moviesEl);
}

function renderInfo() {

  if (state.selectedMovie === null ) return

  let moviesDscr = document.createElement("ul");

  
    let dscrTitle = document.createElement("h2");
    dscrTitle.textContent = state.selectedMovie.title;

    let dscrInfo = document.createElement("p");
    dscrInfo.textContent = state.selectedMovie.description;

    let dcrImg = document.createElement("img");
    dcrImg.src = state.selectedMovie.thumbnail;

    let dscrComments = document.createElement('p')
    dscrComments.textContent = state.selectedMovie.comments

    let addCommentForm = document.createElement('form')

    let commentInput = document.createElement('input')
    commentInput.placeholder = 'Add your comment'

    let submitBtn = document.createElement('button')
    submitBtn.textContent = 'Submit'

    let backBtn = document.createElement("button");
    backBtn.textContent = "Back";
    backBtn.addEventListener("click", function () {
      deSelectMovie();
      render();
    });

    moviesDscr.append(dscrInfo, dscrTitle, dcrImg, backBtn, dscrComments, commentInput, submitBtn, addCommentForm);
  document.body.append(moviesDscr);
}

function render() {
  document.body.textContent = "";

  let mainEl = document.createElement("main");

  let headerH1 = document.createElement("h1");
  headerH1.textContent = "Netflox";

  document.body.append(mainEl, headerH1);

  if (state.selectedMovie === null) {
    renderMovieList();
  } else {
    renderInfo();
  }
}

render();
