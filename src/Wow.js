import axios from "axios";
import { useState } from "react";

export default function Button() {

  const [movieName, setMovieName] = useState("");
  const [releaseDate, setReleaseDate] = useState("");
  const [director, setDirector] = useState("");

  let audio = "";

  // let movieName = "";
  // let releaseDate = "";
  // let quote = "";
  // let director = "";

  const generateWow = function () {
    axios.get("https://owen-wilson-wow-api.herokuapp.com/wows/random")
      .then(res => {
        console.log(res.data[0]);
        setMovieName(res.data[0].movie);
        setReleaseDate(res.data[0].release_date);
        setDirector(res.data[0].director);

        audio = new Audio(res.data[0].audio);

        audio.play();


      })
      .catch(err => {
        console.log(err);
      })
  }


  return (
    <div>
      <button onClick={generateWow}>Click Me!</button>
      {(movieName && <h5> You just heard Owen Wilson say 'Wow!' from: {movieName} </h5>)}
      {(movieName && <h5> Directed by: {director} </h5>)}
      {(movieName && <h5> Released in: {releaseDate} </h5>)}

    </div>
  )
}