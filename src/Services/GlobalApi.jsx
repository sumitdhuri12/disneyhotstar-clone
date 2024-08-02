import axios from "axios";


const movieBaseUrl = "https://api.themoviedb.org/3"
const api_key = '0aac29b2ab10f2650da723443f8e2c0c'

const movieByGenreBaseUrl = 'https://api.themoviedb.org/3/discover/movie?api_key=0aac29b2ab10f2650da723443f8e2c0c';


const getTrendingVideos = axios.get(movieBaseUrl+
    "/trending/all/day?api_key="+api_key)
const getMovieByGenreId=(id)=>
    axios.get(movieByGenreBaseUrl+"&with_genres="+id)



export default{
    getTrendingVideos,
    getMovieByGenreId
}