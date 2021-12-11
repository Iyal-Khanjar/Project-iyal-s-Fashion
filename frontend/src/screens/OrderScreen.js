import React from 'react';
import { useSelector } from 'react-redux';
import LoadingBox from '../components/LoadingBox';
import MessageBox from '../components/MessageBox';

export default function OrderScreen(props) {

  const orderDetails = useSelector((state) => state.orderDetails);
  const { order, loading, error } = orderDetails;





  return loading ? (
    <LoadingBox></LoadingBox>
  ) : error ? (
    <MessageBox variant="danger">{error}</MessageBox>
  ) : (
    <div>
      <h1>Order {order._id}</h1>
      <div className='confirmedpursh'>Thank you for purchasing, It will be delivered as soon as possible</div>
    </div>
  );
}