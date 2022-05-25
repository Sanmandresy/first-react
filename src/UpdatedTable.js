import React, {useMemo}from 'react'
import {useTable} from 'react-table'
import mock_data from "./data.json"
import {COLUMNS} from "./columns"
import { useSortBy } from 'react-table/dist/react-table.development';
import { useGlobalFilter } from 'react-table/dist/react-table.development';
import { FilterSearch } from './FilterSearch';
import { usePagination } from 'react-table/dist/react-table.development';


export function Table() {
    const columns = useMemo(() => COLUMNS,[]);
    const data = useMemo(() => mock_data,[]);

    const tableUser = useTable({
        columns,
        data
    },
    useGlobalFilter,useSortBy,usePagination);
    
    const {getTableProps,
        getTableBodyProps,
        headerGroups,
        page,
        nextPage,
        previousPage,
        setPageSize,
        state,
        rows,
        setGlobalFilter,
        prepareRow }
        = tableUser;
        
        const { globalFilter,pageIndex,pageSize } = state;
        var actual = pageIndex+1;

    return(<>
    <div className= "dataTable-top">
                        <div className="dataTable-dropdown">
                            <label>
                                 <select className="dataTable-selector" value={pageSize} onChange={
                                     event => setPageSize(Number(event.target.value))
                                 }>
                                    {
                                        [5,10,15,20,25].map(pageSize => {
                                            return <option key={pageSize} value={pageSize} selected>
                                                {pageSize}
                                            </option>
                                        })
                                    }
                                 </select> entries per page
                            </label>
                        </div>
                        <FilterSearch filter={globalFilter} setFilter={setGlobalFilter}></FilterSearch>
    </div>

    <div className="dataTable-container">
        <table id="datatablesSimple" className= "dataTable-table" {...getTableProps()}>
            <thead>
                {headerGroups.map( (headerGroup) => {
                        return <tr {...headerGroup.getHeaderGroupProps()}>
                        {headerGroup.headers.map( (column) => {
                            return <th {...column.getHeaderProps(column.getSortByToggleProps())}>
                                {column.render("Header")}
                                <span>
                                    {column.isSorted ? (column.isSortedDesc ? "🔽" : "🔼" ) : ""}
                                </span>
                                </th>
                        })}
                    </tr>
                })}
            </thead>
            <tbody {...getTableBodyProps()}>
                {page.map(row => {
                    prepareRow(row)
                    return (<>
                    <tr {...row.getRowProps()}>
                        {row.cells.map(cell => {
                            return <td {...cell.getCellProps}>{cell.render("Cell")}</td>
                        })}
                    </tr>
                    </>)
                })}
            </tbody>
        </table>     

            <div className='dataTable-bottom'>
                <div className="dataTable-info">{ (pageSize) * (pageIndex) + 1} to {pageSize*(actual)<=rows.length ? pageSize * (actual) : rows.length} of {rows.length} entries</div>
                <nav className='dataTable-pagination'>
                    <ul className='dataTable-pagination-list'>
                        <li onClick={() => previousPage()}><a href='#!'>&#60;</a></li>
                        <li className=''><a href='#!'>{actual}</a></li>
                        <li onClick={() => {
                            nextPage();
                        }} className=''><a href='#!'>&gt;</a></li>
                    </ul>
                </nav>
            </div>

           

    </div>
    
    </>);
}