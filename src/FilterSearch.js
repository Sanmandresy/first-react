import React from 'react'

export const FilterSearch = ({filter,setFilter}) => {
  return (<>
        <div className="dataTable-search">
        <input className="dataTable-input" placeholder='Search...' type="text" value={filter || ''} onChange={event => setFilter(event.target.value)} ></input>
        </div> 
    </>);
}
