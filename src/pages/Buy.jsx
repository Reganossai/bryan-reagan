import React from 'react';
import Navbar from '../components/Navbar';
import { connect } from 'react-redux';

const Buy = ({ quantity, price, incrementQuantity, decrementQuantity, }) => {
  return (
    <div>
        <Navbar/>
      <h1>Product Quantity: {quantity}</h1>
      <h2>Product Price: {price}</h2>
      <button onClick={incrementQuantity}>Increment</button>
      <button onClick={decrementQuantity}>Decrement</button>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    quantity: state.quantity,
    price: state.price * state.quantity,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    incrementQuantity: () => dispatch({ type: 'INCREMENT_QUANTITY' }),
    decrementQuantity: () => dispatch({ type: 'DECREMENT_QUANTITY' }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Buy);
    