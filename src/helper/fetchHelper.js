import axios from "axios";

export const fetchMovies = () => {
  //   fetch("http://www.omdbapi.com/?apikey=edec8d18&t=avatar")
  //     .then((res) => res.json())
  //     .then((data) => console.log(data))
  //     .catch((error) => console.log(error));

  const { data } = axios.get(
    "http://www.omdbapi.com/?apikey=edec8d18&t=avatar"
  );

  return data;

  // =====================================================
  // 1 way to do is by fetch
  // another way is using oxios
  // =====================================================
};
