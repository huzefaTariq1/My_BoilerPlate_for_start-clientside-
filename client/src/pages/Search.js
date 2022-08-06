import React from 'react'
import { useLocation } from 'react-router-dom'

const Search = () => {
    const queryString = useLocation().search
  const queryParam = new URLSearchParams(queryString)
  const q = queryParam.get('q')

   //@ Example for fetching data using query
//   let url = `http://localhost:3000/recipes?q=${q}`
//   const { data, ispending, error } = useFetch(url)
//   console.log(data)
  return (
    <div>My Search {q}</div>
  )
}

export default Search