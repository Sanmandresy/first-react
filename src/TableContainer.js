import React, {useMemo}from 'react'
import {useTable} from 'react-table'
import mock_data from "./data.json"
import {COLUMNS} from "./columns"


export default function TableContainer() {
    const columns = useMemo(() => COLUMNS,[]);
    const data = useMemo(() => mock_data,[]);

    const tableUser = useTable({
        columns,
        data
    })

    const {getTableProps,
        getTableBodyProps,
        headerGroups,
        rows,
        prepareRow }
        = tableUser

    return(<>
    <div className="dataTable-container">
        <table id="datatablesSimple" className= "dataTable-table" {...getTableProps()}>
            <thead>
                {headerGroups.map( (headerGroup) => {
                        return <tr {...headerGroup.getHeaderGroupProps()}>
                        {headerGroup.headers.map( (column) => {
                            return <th {...column.getHeaderProps()}>{column.render("Header")}</th>
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
