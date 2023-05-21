import React from 'react';
import './users.css'
import DataTable from 'react-data-table-component';
import dataUsers from '../data/dataUsers'

function products() {
    const columns = [
        {
            name: "Username",
            selector: row => row.username
        },
        {
            name: "Email",
            selector: row => row.email
        },
        {
            name: "ACTION",
        },
    ];

  return (
    <div>
        <div class="container">
            <div class="hdr">
                <h4>Users</h4>
            </div>
            <DataTable
                columns={columns}
                data={dataUsers}
            ></DataTable>
        </div>
    </div>
  );
}

export default products;