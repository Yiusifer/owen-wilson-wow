import axios from "axios";
import { useState } from "react";

export default function Button() {

  const [movieName, setMovieName] = useState(false)

  // let movieName = "";
  // let releaseDate = "";
  // let quote = "";
  // let director = "";

  const generateWow = function () {
    axios.get("https://owen-wilson-wow-api.herokuapp.com/wows/random")
      .then(res => {
        console.log(res.data[0]);
        setMovieName(res.data[0].movie);

      })
      .catch(err => {
        console.log(err);
      })
  }


  return (
    <div>
      <button onClick={generateWow}>Click Me!</button>
      <p>{movieName}</p>

    </div>
  )
}