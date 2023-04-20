import { StripeToken } from '../../components/DataModels/StripeToken';
import  ProductData  from '../../components/DataModels/ProductData';
import { REACT_BACKEND_URL } from '../../config';
import axios from 'axios';
import FormData from '../../components/DataModels/FormData';
const instance = axios.create({
  withCredentials: true,
});
interface CheckoutProps{
  token: StripeToken,
  product: ProductData
}
export const checkoutPayment = async ( props: CheckoutProps ) => {
  const { token, product } = props;
  try {
    const response = await instance.post(`${REACT_BACKEND_URL}/v1/checkout`,{token,product});
    return response;
  } catch ( error ){
    return error;
  }
};

export const getPaymentStatus = async ( ) => {
  try {
    updatePaymentStatus();
    const response = await instance.get(`${REACT_BACKEND_URL}/v1/checkout/get`);
    return response;
  } catch ( error ){
    return error;
  }
};
export const updatePaymentStatus = async ( ) => {
  try {
    const response = await instance.get(`${REACT_BACKEND_URL}/v1/checkout/update`);
    return response;
  } catch ( error ){
    return error;
  }
};
interface PaymentProps{
  form: FormData,
  product: ProductData,
}
export const payment = async (props:PaymentProps) => {
  const { form, product } = props;
  try{
    const res = await instance.post(`${REACT_BACKEND_URL}/v1/checkout/page`,{form,product});
    return res;
  }catch(error){
    return error.response;
  }
};