const API_KEY = "312101e39e8e4e33e106a818028fdcd9";
const BASE_URL = "https://api.themoviedb.org/3";

export function getMovies() {
  return fetch(`${BASE_URL}/movie/now_playing?api_key=${API_KEY}`).then(
    (response) => response.json()
  );
}
