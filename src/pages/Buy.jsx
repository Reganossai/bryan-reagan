import React from "react";
import Navbar from "../components/Navbar";
import { connect } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMinus,faPlus } from "@fortawesome/free-solid-svg-icons";

const Buy = ({ quantity, price, incrementQuantity, decrementQuantity }) => {
  return (
    <div className="bgg">
      <Navbar />
      <div className="bg">
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
        <p>Cup(s) of coffee: {quantity}</p>
        <p>price: {price}</p>
        <button onClick={incrementQuantity}><FontAwesomeIcon icon={faPlus}/></button>
        <button onClick={decrementQuantity}><FontAwesomeIcon icon={faMinus}/></button>
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
