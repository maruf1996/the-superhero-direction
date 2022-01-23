import React from 'react';
import './Cart.css';

const Cart = (props) => {
    const {cart}=props;
    let total=0;
    for (const singer of cart){
        total=total+singer.budget;
    }
    return (
        <div>
            <div className="cost_container_first_part">
                <h2>Managgement History</h2>
                <h4>Singer Added: {cart.length}</h4> 
                <h4>Total Budget: <span style={{fontWeight:'38px'}}>&#2547;</span>{total}</h4>
            </div>
            <div className="cost_container_second_part">
                <h2>Hired History:</h2>
                {
                    cart.map(singer=> <h5 key={singer.name}>{singer.name}</h5> )
                }
            </div>
        </div>
    );
};

export default Cart;