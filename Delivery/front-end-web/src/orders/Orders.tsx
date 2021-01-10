import { useEffect, useState } from 'react';
import { fetchProducts } from '../api';
import OrderLocation from './orderLocation';
import './orders.css';
import ProductsList from './ProductsList';
import StepHeader from './StepHeader';
import { OrderLocationdata, Product } from './types';

function Orders() {
  const [products, setProducts] = useState<Product[]>([]);
  const [orderLocation, setOrderLocation] = useState<OrderLocationdata>();
  useEffect(() => {
     fetchProducts()
     .then(response => setProducts(response.data))
     .catch(error => console.log(error))
  }, []);

  return (
    <div className="orders-container">
        <StepHeader />
        <ProductsList products={products} />
        <OrderLocation onChangeLocation={location => setOrderLocation(location)} />
    </div>
  )
}

export default Orders;

