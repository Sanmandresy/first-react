import React from 'react'

export default function Top() {
    return(<>
        <div className= "dataTable-top">
                        <div className="dataTable-dropdown">
                            <label>
                                 <select className="dataTable-selector">
                                    <option value="5">5</option>
                                    <option value="10">10</option>
                                    <option value="15">15</option>
                                    <option value="20">20</option>
                                    <option value="25">25</option>
                                    <option value="57">All</option>
                                 </select> entries per page
                            </label>
                        </div>
                        <div className="dataTable-search">
                            <input className="dataTable-input" placeholder='Search...' type="text"></input>
                        </div>
        </div>
</>);
}
