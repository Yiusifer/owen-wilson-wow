import axios from "axios";

export default function Button() {

  let movieName = "";
  let releaseDate = "";
  let quote = "";
  let director = "";

  const generateWow = function () {
    axios.get("https://owen-wilson-wow-api.herokuapp.com/wows/random")
      .then(res => {
        console.log(res.data[0]);
        movieName = res.data[0].movie;
      })
      .catch(err => {
        console.log(err);
      })
  }


  return (
    <div>
      <button onClick={generateWow}>Click Me!</button>
      <h> The {movieName} </h>

    </div>
  )
}