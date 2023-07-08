
import MovieList from "../app/components/MovieList";
import axios from "axios";


export default async function Home() {
  

  
      try {
        const apiKey = "312af6ca07e7e14a45841dcaa68aa16e";
        const res = await axios.get(
          `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=en-US&page=1`
        );
        var popularMovies = res.data.results;
      } catch (error) {
        console.log(error);
      }
    

 
  return (
    <div className=" bg-black">
      <MovieList movie={popularMovies} />
    </div>
  );
}
