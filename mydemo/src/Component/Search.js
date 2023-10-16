import React, { useState } from 'react'

import axios from "axios"

function Search() {

  const [text, setText] = useState("")

  const [movie, setMovie] = useState([])

  const changeText = (event) => {

    setText(event.target.value);

  }

  const getMovie = (e) => {

    e.preventDefault();


    // https://api.themoviedb.org/3/discover/movie?sort_by=${text}&api_key=04c35731a5ee918f014970082a0088b1&page=1

    

    axios.get(`https://api.themoviedb.org/3/discover/movie?sort_by=${text}&api_key=04c35731a5ee918f014970082a0088b1&page=1`)

      .then((response) => {

        console.log(response)

        setMovie(response.data.Search)

    })




  }

  return (

    <>

      <nav className="navbar bg-body-tertiary">

        <div className="container-fluid">

          <a className="navbar-brand">Movie App</a>

          <form className="d-flex" onSubmit={getMovie}>

            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" value={text} onChange={changeText} />

            <button className="btn btn-outline-success" type="submit">Search</button>

          </form>

        </div>

      </nav>




      <div className="container my-3">

        <div className="row">

          {

            movie.map((value) => {
              return (
                <div className="col-3">
                  <div className="card" style={{ width: '18rem;' }}>
                    <img src={value.Poster} className="card-img-top" alt="" />
                    <div className="card-body">
                      <h3 className="card-title">{value.Year}</h3>
                      <h4 className="card-text">{value.Title}</h4>
                    </div>
                  </div>
                </div>
              )
            })
          }
        </div>

      </div>

    </>

  )

}




export default Search;