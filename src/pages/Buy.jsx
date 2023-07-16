import React from "react";
import Navbar from "../components/Navbar";
import { connect } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMinus,faPlus } from "@fortawesome/free-solid-svg-icons";

const Buy = ({ quantity, price, incrementQuantity, decrementQuantity }) => {
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
        <button className="btn btn-danger">Buy Coffee</button>
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
