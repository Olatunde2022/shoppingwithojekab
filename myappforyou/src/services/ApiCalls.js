import axios from "axios";


const API_URL = 'https://fakestoreapi.com'
// const API_URL = 'localhost:5000'

//API Calls: GET, PUT, PATCH, POST, DELETE
export  const get = async (url)=>{
    let result;
    await axios.get(`${API_URL}/${url}`)
  .then( (response)=> {
    result = response;
  })
  .catch( (error)=> {
    result = error
  })
  .finally( ()=>{
    // always executed
  })
  return result;
}