import React from 'react'
import Footer from './Footer';
import Top from './Top';
import Bottom from './Bottom';
import TableContainer from './TableContainer';

export default function SideContent() {
  return (<>
  <div id='layoutSidenav_content'>
            <main>
                    <div class="container-fluid px-4">
                            <h1 class="mt-4">Tables</h1>
                            <ol class="breadcrumb mb-4">
                                <li class="breadcrumb-item"><a href="index.html">Dashboard</a></li>
                                <li class="breadcrumb-item active">Tables</li>
                            </ol>
                        <div class="card mb-4">
                            <div class="card-body">
                                DataTables is a third party plugin that is used to generate the demo table below. For more information about DataTables, please visit the
                                <a  href="https://datatables.net/"> official DataTables documentation</a>
                                .
                            </div>
                        </div>
                        <div class="card mb-4">
                            <div class="card-header">
                                <i class="fas fa-table me-1"></i>
                                DataTable Example
                        </div>
                            <div class="card-body">
                              <div class="dataTable-wrapper dataTable-loading no-footer sortable searchable fixed-columns">  
                                <Top></Top>
                                <TableContainer></TableContainer>
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
