import React, { useEffect, useState } from 'react'
import { TfiSearch } from 'react-icons/tfi'
import RestaurantContainer from './RestaurantContainer'

const Body = () => {
  const [searchQuery, setSearchQuery] = useState('')
  const [suggetionList, setSuggestionList] = useState([])
  const [filterData, setFilterData] = useState();
  const [isFocus, setIsFocus] = useState(false)
 
useEffect(()=>{
  getFoodSuggestion()
}, [searchQuery])

const getFoodSuggestion = async() =>{
  const res = await fetch(`https://www.edamam.com/auto-complete?q=${searchQuery}&limit=10`)
  const data = await res.json()
  // console.log( "searchQuery", data)
  setSuggestionList(data)
}
// console.log("suggestionlist", suggetionList)

  const submitHandler = () => {
    setFilterData(searchQuery)
  }
// console.log(filterData)
const handleFocus = () =>{
  setIsFocus(true)
}
const handleBlur =()=> {
  setIsFocus(false)
}

  return (
    <div className='body-container'>
        <div className="search-bar">
          <form action="" onSubmit={(e)=>{
            e.preventDefault()
            submitHandler();
            setSearchQuery("")
          }}>
            <input type="text" placeholder='SEARCH YOUR MEAL' value={searchQuery} onChange={(e)=>setSearchQuery(e.target.value)} onFocus={handleFocus} onBlur={handleBlur} />
            <button><TfiSearch className='svg-icon'/></button>
          </form>
          {isFocus && <div className="suggest-list">
            {suggetionList.map((item)=>(
              <p key={item}>{item}</p>
            ))}
          </div> }
          
        </div>
        <RestaurantContainer filterquery={filterData}/>
    </div>
  )
}

export default Body
