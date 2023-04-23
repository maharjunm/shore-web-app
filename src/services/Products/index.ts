import { REACT_BACKEND_URL } from '../../config';
import  ProductData  from '../../components/DataModels/ProductData';
import axios from 'axios';

export const getProducts = async () => {
  try{
    const res = await axios.get<ProductData[]>(`${REACT_BACKEND_URL}/v1/products/get`);
    return res;
  }catch( error ) {
    error;
  }
};