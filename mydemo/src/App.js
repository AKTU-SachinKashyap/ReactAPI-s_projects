// import Cart from './Addcart/Cart';
// import './App.css';
// import Main from './Component2/Main';

// import Main from './FoodRecipes/Food';

// import Home from './Books/Home';

// import TicTac from './TicTacToe/TicTac';

// import ReactPract from './React10js/ReactPract';
// import Slider from './React10js/Slider/Slider';
// import NasaApi from './NASA/NasaApi';
// import axios from 'axios';
// import Home from './Home.js';
// import React,{useState} from 'react';
// import PropsHooks from './UseHooks/PropsHooks'
// import MovieList from './Component/MovieList';
// import Usehooks from './UseHooks/Usehook'



import Todos from './Todo/Todos';



// const APIURL="https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=1";

function App(){


//  movies Recommedetion
  // const [movies, setMovies] =useState([]);

  // const fetchMovies =async()=>{
  //   try{
  //     const response = await axios.get(
  //       "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=1"
  //       );
  //     setMovies(response.data.results);
  //     console.log(response);
  //   }catch(error){
  //     console.log(error);
  //   };
  // }

  return (
    <div className=''>
     {/* <Home></Home> */}
     {/* <Home name="john"></Home> */}
    {/* <Home name ="Kurkure" price="100" quantity="250gm"></Home> */}
   
    {/* <Home ></Home> */}

   


    {/* movies Recommedetion */}
      {/* <div>
        <h1>Popular Movies</h1>
        <input type='text' placeholder='Search' onChange={fetchMovies}></input>
        <button onClick={fetchMovies}>load movie</button>
        <MovieList movies={movies}></MovieList>
      </div> */}
      {/* <Search></Search> */}
      {/* <PropsHooks></PropsHooks> */}




{/* // import CharacterCounter from './CharacterCounter'; */}

    <div>
      {/* <h1>Character Counter</h1> */}
      {/* <Usehooks></Usehooks> */}
    </div>


    {/* <Cart></Cart> */}

      {/* <NasaApi></NasaApi> */}

  
      {/* <Slider></Slider> */}
      {/* <ReactPract></ReactPract> */}

      {/* <TicTac></TicTac> */}
      {/* <Home></Home> */}

      {/* <Main></Main> */}
  


      {/* <Main></Main> */}
      <Todos></Todos>



    </div>
  );
}

export default App;
