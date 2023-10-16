import React, { useState } from 'react'
import Navbar from './Navbar';
import './home.css'
import axios from 'axios'
import Card from './Card';


function Home() {

  const [search,setSearch] = useState("");
  const [bookData,setData] = useState([]);
  const searchBook=(e)=>{
    if(e.key==="Enter")
    {
        axios.get('https://www.googleapis.com/books/v1/volumes?q='+search+'&key=AIzaSyCNErgSU-kDIgjOj4Jfnm6hQ0_dk-Fdrdg')
        .then(res=>
        // {
        //   console.log(res)

        // })
          // console.log(res)


          setData(res.data.items))
        .catch(err=>console.log(err))
    }
  }


  return (
   
    <div>
    <Navbar/>
      <div className='heading'>
      <h1><u>Books Recommendation your choice</u></h1>
      <input type='text' placeholder='search your fav Book' className='box' value={search} onChange={e=>setSearch(e.target.value)} onKeyDown={searchBook}/>
      </div>
      <div className='container'>
      {
        <Card book={bookData}/>
      }

      </div>
    </div>
  )
}

export default Home
