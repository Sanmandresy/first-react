import React from 'react'
import Pagination from "./Pagination"
export default function Bottom() {
    return(<>
    <div className='dataTable-bottom'>
        <div className="dataTable-info">Showing 1 to 57 of 57 entries</div>
        <Pagination></Pagination>
    </div>
</>);
}
