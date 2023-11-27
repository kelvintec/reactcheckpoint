import json_product from '../product.json';
import Product from './Product';


function Products_Loop() {
    return (
        <div className='products' style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)' }}>
            {json_product.map(function (value, index) {
                return <Product key={index} product={value} />
            })}
        </div>
    )
}

export default Products_Loop;
