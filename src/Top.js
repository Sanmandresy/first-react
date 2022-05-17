import React from 'react'

export default function Top() {
    return(<>
        <div class = "dataTable-top">
                        <div class="dataTable-dropdown">
                            <label>
                                 <select class="dataTable-selector">
                                    <option value="5">5</option>
                                    <option value="10">10</option>
                                    <option value="15">15</option>
                                    <option value="20">20</option>
                                    <option value="25">25</option>
                                    <option value="57" selected>All</option>
                                 </select> entries per age
                            </label>
                        </div>
                        <div class="dataTable-search">
                            <input class="dataTable-input" placeholder='Search...' type="text"></input>
                        </div>
        </div>
</>);
}
