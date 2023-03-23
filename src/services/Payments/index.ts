import { StripeToken } from '../../components/DataModels/StripeToken';
import  ProductData  from '../../components/DataModels/ProductData';
import { REACT_BACKEND_URL } from '../../config';
import axios from 'axios';

interface CheckoutProps{
  token: StripeToken,
  product: ProductData
}
export const checkoutPayment = async ( props: CheckoutProps ) => {
  const { token, product } = props;
  try {
    const response = await axios.post(`${REACT_BACKEND_URL}/v1/checkout`,{token,product});
    return response;
  } catch ( error ){
    return error;
  }
};

interface StatusProps{
  userMailId:string,
}
export const getPaymentStatus = async ( props: StatusProps ) => {
  const { userMailId } = props;
  try {
    updatePaymentStatus({userMailId});
    const response = await axios.get(`${REACT_BACKEND_URL}/v1/checkout/get`,{params: {email: userMailId}});
    return response;
  } catch ( error ){
    return error;
  }
};
export const updatePaymentStatus = async ( props: StatusProps ) => {
  const { userMailId } = props;
  try {
    const response = await axios.get(`${REACT_BACKEND_URL}/v1/checkout/update`,{params: {email: userMailId}});
    return response;
  } catch ( error ){
    return error;
  }
};
