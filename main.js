const ApiKey = "api_key=cd48ad83ac4295056b2051af96b68456"
const BaseUrl =`https://api.themoviedb.org/3/`
const ApiUrl = BaseUrl + `trending/all/day?` + ApiKey;
const imgUrl = `https://image.tmdb.org/t/p/w500`
const main = document.getElementById('main')
const form = document.getElementById('form')
const search = document.getElementById('search')

getMovies(ApiUrl);

function getMovies(url) {
  fetch(url).then(res => res.json()).then(data => {
    showMovies(data.results);
  })
}

function showMovies(data){
  main.innerHTML = ''

data.forEach(movie => {
    const {title, poster_path, vote_average, overview} = movie;
    const movieEl = document.createElement('div')
    movieEl.classList.add('movie')
    movieEl.innerHTML = `
    <img src="${imgUrl + poster_path}" alt= "${title}">
    <div class="movie-info">
      <h3>${title}</h3>
      <span class="green">${vote_average}</span>
    </div>

    <div class="overview">
    <h3>Overview</h3>
    ${overview}
  </div>
  
  `

  main.appendChild(movieEl);

    
  });

}
form.addEventListener('submit', (e) =>{
  e.preventDefault()
})
