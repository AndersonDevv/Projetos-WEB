import { useEffect, useState } from 'react';
import { fetchProducts } from '../api';
import './orders.css';
import ProductsList from './ProductsList';
import StepHeader from './StepHeader';
import { Product } from './types';

function Orders() {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
     fetchProducts().
     then(response => setProducts(response.data))
     .catch(error => console.log(error))
  }, []);

  return (
    <div className="orders-container">
        <StepHeader />
        <ProductsList products={products} />
    </div>
  )
}

export default Orders;

