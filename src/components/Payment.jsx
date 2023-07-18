import React from 'react';
import {  FlutterWaveButton, closePaymentModal } from 'flutterwave-react-v3';

const Payment = () => {

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
    text: 'Pay with Flutterwave!',
    callback: (response) => {
       console.log(response);
      closePaymentModal() // this will close the modal programmatically
    },
    onClose: () => {},
  };

  return (
    <div>
       <FlutterWaveButton {...fwConfig} />
    </div>
  );
};

export default Payment;