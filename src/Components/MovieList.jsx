import React, { useEffect, useRef, useState } from 'react'
import GlobalApi from '../Services/GlobalApi'
import MovieCard from './MovieCard'
import { IoChevronBackOutline, IoChevronForwardOutline } from 'react-icons/io5'
import HrMovieCard from './HrMovieCard'

const screenWidth = window.innerWidth

function MovieList({genreID, index_}) {
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
        <IoChevronBackOutline onClick={()=>sliderLeft(elementRef.current)} className={`text-white text-[50px] p-2 z-10 absolute cursor-pointer hidden md:block ${index_%3==0?'mt-[80px]':'mt-[150px]'}`}/>
        <div ref={elementRef} className='flex overflow-x-auto gap-8 scrollbar-none scroll-smooth py-5 px-3'>
            {movieList.map((item,index)=>(
                <>
                    {index_%3==0 ? <HrMovieCard movie={item}/> : <MovieCard movie={item}/>}
                </>
            ))}
        </div>
        <IoChevronForwardOutline onClick={()=>sliderRight(elementRef.current)} className={`text-white text-[50px] p-2 z-10 absolute top-0 right-0 cursor-pointer hidden md:block ${index_%3==0?'mt-[80px]':'mt-[150px]'}`}/>
    </div>
  )
}

export default MovieList