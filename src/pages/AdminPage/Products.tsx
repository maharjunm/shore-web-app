import React, { useState } from 'react';
import { getProducts } from '../../services/Products';
import { EditableProduct } from '../../components';
import ProductData from '../../components/DataModels/ProductData';
import './Products.scss';

const Products = () => {

  const [ products, setProducts] = useState([]);
  const fetchProducts = async () => {
    const res = await getProducts();
    if(res.status===200){
      setProducts(res.data);
    }
  }; 
  React.useEffect(()=>{
    fetchProducts();
  },[]);
  
  return (
    <div className="products">
      <div className="content">
        { products &&
            products.map(( product:ProductData ) => (
              <EditableProduct key={product.type} product={ product }  />
            ))
        }
      </div>
    </div>
  );
};

export default Products;