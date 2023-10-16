import axios from 'axios';
import React, { useState, useEffect } from 'react'


// functifon NasaApi(){

//   const [Data, setData] = useState([])
//     useEffect(() => {
//         const fetchAPOD = async () => {
//             try {
//                 const response = await axios.get('https://api.nasa.gov/planetary/apod?api_key=ngxNaXPoYbDTQlmIfBoM9sHSIMI7xxfTVWQpNMPC')

//                 const data = response.data;
//                 setData(data);
//             } catch (error) {
//                 console.log(error.message)
//             }
//         }
//         fetchAPOD();
//     }, []);
//     return (
//         <div className='data'>
//             <h1>{Data.title}</h1><br></br>
//             <h2>Date: {Data.date}</h2><br></br>
//             <img title={Data.title} src={Data.url}></img><br></br>
//             <h2>Explanation</h2>
//             <p>{Data.explanation}</p><br></br>
//         </div>
//     )
// }


// export default function App(){
// const [data, setData]=useState([]);
// useEffect(()=>{
//    const API=async()=>{
//     try{
//       const response= await axios.get('https://api.nasa.gov/planetary/apod?api_key=UbzfxOVEtWGPRf0LnCyczkSM2dGwu7N0pqtKP6io')
//       const data= response.data;
//       setData(data);
//     }catch(error){
//       console.log(error)
//     }
//   }
//   API();
// },[])

//   return(
//     <div>
//       <h1>{data.Title}</h1>
//       <h2>Date: {data.date}</h2><br></br>
//       <img title={data.title} src={data.url}></img><br></br>
//       <h2>Explanation</h2>
//       <p>{data.explanation}</p><br></br>
//     </div>
//   )
// }

export default function(){
  const [data, setData] =useState([]);
  useEffect(()=>{
    axios.get("https://api.nasa.gov/planetary/apod?api_key=UbzfxOVEtWGPRf0LnCyczkSM2dGwu7N0pqtKP6io").then((res)=>
    // console.log(res.data)
    setData(res.data)
    )
  },[])
  return(
    <>
      <h1>NASA API</h1>
            <h1>{data.Title}</h1>
            <p>{data.date}</p>
            <img title={data.title} src={data.url}></img>
            <p>{data.explanation}</p>
    </>
  )
}

// https://api.nasa.gov/planetary/apod?api_key=UbzfxOVEtWGPRf0LnCyczkSM2dGwu7N0pqtKP6io

// export default NasaApi;



// export default function(){
//   const [data, setData]=useState([])
//   useEffect(()=>{
//     const API= async()=>{
//       try{const response= await axios.get("https://api.themoviedb.org/3/discover/movie?sort_by=&api_key=04c35731a5ee918f014970082a0088b1&page=1")
//       const data= response(data);
//       setData(data);}catch(error){
//          console.log(error);
//       }
//     }
//     API();
//   },[])
//   return(
//     <div>
//       {/* <h1>{data. }</h1> */}
//     </div>
//   )
// }