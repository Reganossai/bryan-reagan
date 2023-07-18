import React from "react";
import Navbar from "../components/Navbar";
import { connect } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMinus,faPlus } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import {  FlutterWaveButton, closePaymentModal } from 'flutterwave-react-v3';

const Buy = ({ quantity, price, incrementQuantity, decrementQuantity }) => {


  const config = {
    public_key: 'FLWPUBK-62dbbc23f0bc909463b116528ca791c2-X',
    tx_ref: Date.now(),
    amount: 1000,
    currency: 'NGN',
    payment_options: 'card,mobilemoney,ussd',
    customer: {
      email: 'ossaireagano@gmail.com',
      phone_number: '08108315163',
      name: 'Reagan Ossai',
    },
    customizations: {
      title: 'Buy Reagan A Coffee',
      description: 'Coffee for Reagan',
      logo: 'https://st2.depositphotos.com/4403291/7418/v/450/depositphotos_74189661-stock-illustration-online-shop-log.jpg',
    },
  };


const fwConfig = {
...config,
text: 'Buy Coffee',
callback: (response) => {
console.log(response);
closePaymentModal() // this will close the modal programmatically
},
onClose: () => {},
};

  return (
    <div className="buy-div" >
      <Navbar />
      <div className="bg"></div>
      <div className="bgg">
        <p>
          Hello there, I made a lot of effort to create a kind of road map for
          aspiring web developers to have a straight foward idea on the steps
          involved in creating their dream websites. I felt this was important
          as a lot of people usually get stuck in an effort to sort out their
          resources when learning web development. This kind of solves all that
          problem.Hopefully , you can get to create that dream website and land
          that dream job some day.
        </p>

        <p className="olla">
          <b>
            If this was helpful to you, you can buy me a coffee. Thanks for
            visiting this page.
          </b>
        </p>
        
        <div className="inc-dec">
        <p>Cup(s) of coffee: {quantity}</p>
        <button onClick={incrementQuantity} id="inc" className="btn btn-outline-dark"><FontAwesomeIcon icon={faPlus} /></button>
        <button onClick={decrementQuantity}id="dec" className="btn btn-outline-dark"><FontAwesomeIcon icon={faMinus} className="dec"/></button>
      </div>
        <p>price: {price} NGN</p>
        <div id="remy">
        <FlutterWaveButton {...fwConfig} />
      </div>
      </div>
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
    incrementQuantity: () => dispatch({ type: "INCREMENT_QUANTITY" }),
    decrementQuantity: () => dispatch({ type: "DECREMENT_QUANTITY" }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Buy);
