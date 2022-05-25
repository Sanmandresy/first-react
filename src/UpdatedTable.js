import React, {useMemo}from 'react'
import {useTable} from 'react-table'
import mock_data from "./data.json"
import {COLUMNS} from "./columns"
import { useSortBy } from 'react-table/dist/react-table.development';
import { useGlobalFilter } from 'react-table/dist/react-table.development';
import { FilterSearch } from './FilterSearch';

export function FilteredTable() {
    const columns = useMemo(() => COLUMNS,[]);
    const data = useMemo(() => mock_data,[]);

    const tableUser = useTable({
        columns,
        data
    },
    useGlobalFilter,useSortBy);

    const {getTableProps,
        getTableBodyProps,
        headerGroups,
        rows,
        state,
        setGlobalFilter,
        prepareRow }
        = tableUser;

        const { globalFilter } = state;

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
                {rows.map(row => {
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
    </div>
    
    </>);
}