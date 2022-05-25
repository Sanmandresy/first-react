import React from 'react'
import Footer from './Footer';
import Bottom from './Bottom';
import { FilteredTable } from './UpdatedTable';

export default function SideContent() {
  return (<>
  <div id='layoutSidenav_content'>
            <main>
                    <div className="container-fluid px-4">
                            <h1 className="mt-4">Tables</h1>
                            <ol className="breadcrumb mb-4">
                                <li className="breadcrumb-item"><a href="index.html">Dashboard</a></li>
                                <li className="breadcrumb-item active">Tables</li>
                            </ol>
                        <div className="card mb-4">
                            <div className="card-body">
                                DataTables is a third party plugin that is used to generate the demo table below. For more information about DataTables, please visit the
                                <a  href="https://datatables.net/"> official DataTables documentation</a>
                                .
                            </div>
                        </div>
                        <div className="card mb-4">
                            <div className="card-header">
                                <i className="fas fa-table me-1"></i>
                                DataTable Example
                        </div>
                            <div className="card-body">
                              <div className="dataTable-wrapper dataTable-loading no-footer sortable searchable fixed-columns">  
                               <FilteredTable></FilteredTable>
                                <Bottom></Bottom>
                            </div>
                            </div>
                        </div>
                    </div>
                </main>
        <Footer></Footer>   
</div>
  </>
  );
}
