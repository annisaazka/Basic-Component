import React from 'react';
import './products.css'
import DataTable from 'react-data-table-component';
import dataProducts from '../data/dataProducts'
import trash from '../img/product/trash.svg'
import Swal from 'sweetalert2'
import { Link } from 'react-router-dom';

function products() {
    const Alert = () => {
        Swal.fire(
            'Hapus Item?',
            '',
            'question'
        )
    }
    
    const columns = [
        {
            name: "Product Name",
            selector: row => row.name
        },
        {
            name: "Description",
            selector: row => row.description
        },
        {
            name: "Product Price",
            selector: row => row.price
        },
        {
            name: "Category",
            selector: row => row.category
        },
        {
            name: "Expiry Date",
            selector: row => row.expiryDate 
        },
        {
            name: "ACTION",
            cell: (row) => <button class="btrash" onClick={Alert}>
                <img src={trash}/>
            </button>
        },
        {
            name: "ACTION",
            cell: (row) => (
                <Link to={`/products/${row.id}`}>
                        <div class="more">
                            More About
                        </div>
                </Link>
            )
        }
    ];

  return (
    <div>
        <div class="container">
            <div class="hdr">
                <h4>Product</h4>
                <input type="checkbox"/>
                <label>Hide Expired Product</label>
                <label1>All Category</label1>
                <div class="button">
                    <a href="#">Add New Product</a>
                </div>
            </div>
            <DataTable
                columns={columns}
                data={dataProducts}
            ></DataTable>
        </div>
    </div>
  );
}

export default products;