const initialState = {
    quantity: 0,
    price: 1000,
  };
  
  const rootReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'INCREMENT_QUANTITY':
        return {
          ...state,
          quantity: state.quantity + 1,
          price: state.price,
        };
      case 'DECREMENT_QUANTITY':
        if (state.quantity === 0) {
          return state; // Don't allow quantity to go below 0
        }
        return {
          ...state,
          quantity: state.quantity - 1,
          price: state.price, // Decrease price by 15 for each quantity decrement
        };
      default:
        return state;
    }
  };
  
  export default rootReducer;