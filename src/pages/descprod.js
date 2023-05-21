import React from 'react';
import './descprod.css'
import dataProducts from '../data/dataProducts'

function descprod({id}) {
    const product = dataProducts.find(product => product.id === id);

    return (
    <div>
        <div class="container">
            <p>{product.description}</p>
        </div>
    </div>
  );
}

export default descprod;