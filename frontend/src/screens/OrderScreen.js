import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import CheckoutSteps from '../components/CheckoutSteps';
import { createOrder } from '../actions/orderActions';

export default function OrderScreen(props) {
  const cart = useSelector((state) => state.cart);

  const userSignin = useSelector((state) => state.userSignin);
  const { userInfo } = userSignin;

  if (!userInfo) {
    props.history.push('/signin');
  }
  const dispatch = useDispatch();
  const submitHandler = (e) => {
    e.preventDefault();
    window.alert('Thanks we will deliver as soon as possible');
    dispatch(createOrder({ ...cart, orderItems: cart.cartItems }))
    props.history.push('/shop');
  };

  return (
    <div>
      <CheckoutSteps step1 step2 step3 step4></CheckoutSteps>
      <form className="form" onSubmit={submitHandler}>
        <div>
          <h3>Billing Address</h3>
        </div>

        <div>
          <label htmlFor="fname"><i className="fa fa-user"></i> Full Name</label>
          <input type="text" id="fname" name="firstname" placeholder="Enter full name" required />
        </div>
        <div>
          <label htmlFor="email"><i className="fa fa-envelope"></i> Email</label>
          <input type="text" id="email" name="email" placeholder="Enter Email" required />
        </div>
        <div>
          <label htmlFor="address"><i className="fa fa-address-card-o"></i> Address</label>
          <input type="text" id="adr" name="address" placeholder="Enter Address" required />
        </div>
        <div>
          <label htmlFor="city"><i className="fa fa-institution"></i> City</label>
          <input type="text" id="city" name="city" placeholder="Enter City" required />
        </div>
        <div>
          <label htmlFor="state">State</label>
          <input type="text" id="state" name="state" placeholder="Enter State" required />
        </div>
        <div>
          <label htmlFor="zip">Zip</label>
          <input type="text" id="zip" name="zip" placeholder="Enter Zip" required />
        </div>

        <div>
          <h3>Payment</h3>
        </div>
        <div>
          <label htmlFor="fname">Accepted Cards</label>
          <div className="icon-container">
            <i className="fa fa-cc-visa" style={{ color: "navy" }}></i>
            <i className="fa fa-cc-amex" style={{ color: "blue" }}></i>
            <i className="fa fa-cc-mastercard" style={{ color: "red" }}></i>
            <i className="fa fa-cc-discover" style={{ color: "orange" }}></i>
          </div>
        </div>
        <div>
          <label htmlFor="cname">Name on Card</label>
          <input type="text" id="cname" name="cardname" placeholder="Enter Name On Card" required />
        </div>
        <div>
          <label htmlFor="ccnum">Credit card number</label>
          <input type="text" id="ccnum" name="cardnumber" placeholder="1111-2222-3333-4444" required />
        </div>
        <div>
          <label htmlFor="expmonth">Exp Month</label>
          <input type="text" id="expmonth" name="expmonth" placeholder="Enter Month" required />
        </div>
        <div>
          <label htmlFor="expyear">Exp Year</label>
          <input type="text" id="expyear" name="expyear" placeholder="Enter Exp" required />
        </div>
        <div>
          <label htmlFor="cvv">CVV</label>
          <input type="text" id="cvv" name="cvv" placeholder="Enter Cvv" required />
        </div>
        <div>
          <label />
          <button className="primary" type="submit">Continue To Checkout</button>
        </div>
      </form >
    </div >
  );
}