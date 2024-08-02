import React, { useEffect, useRef, useState } from 'react'
import GlobalApi from '../Services/GlobalApi'
import MovieCard from './MovieCard'
import { IoChevronBackOutline, IoChevronForwardOutline } from 'react-icons/io5'

const screenWidth = window.innerWidth

function MovieList({genreID}) {
    const [movieList, setMovieList] = useState([])
    const elementRef = useRef(null)
    useEffect(()=>{
        getMovieByGenreId()
    },[])

    const getMovieByGenreId=()=>{
        GlobalApi.getMovieByGenreId(genreID).then(resp=>{
            setMovieList(resp.data.results)
        })
    }

    const sliderRight = (element)=>{
        element.scrollLeft+=500
    }

    const sliderLeft = (element)=>{
        element.scrollLeft-=500
    }
  return (
    <div className='relative'>
        <IoChevronBackOutline onClick={()=>sliderLeft(elementRef.current)} className='text-white text-[50px] p-2 z-10 absolute mt-[150px] cursor-pointer hidden md:block'/>
        <div ref={elementRef} className='flex overflow-x-auto gap-8 scrollbar-none scroll-smooth py-5 px-3'>
            {movieList.map((item,index)=>(
                <MovieCard movie={item}/>
            ))}
        </div>
        <IoChevronForwardOutline onClick={()=>sliderRight(elementRef.current)} className='text-white text-[50px] p-2 z-10 absolute top-0 right-0 mt-[150px] cursor-pointer hidden md:block'/>
    </div>
  )
}

export default MovieList