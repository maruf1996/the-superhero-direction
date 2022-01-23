import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Singer from '../Singer/Singer';
import './Singers.css';

const Singers = () => {
    const [singers,setSingers]=useState([]);
    const [cart,setCart]=useState([]);
    useEffect(()=>{
        fetch('./Singers.JSON')
        .then(res=>res.json())
        .then(data=>setSingers(data))
    },[]);
    const handleSingerBtn=(singer)=>{
        const newCart=[...cart,singer];
        setCart(newCart);
    }
    return (
        <div className="singers_part">
            <div className="singer_container">
                {/* <h3>Total Singer: {singers.length}</h3> */}
                {
                    singers.map(singer=><Singer
                    handleSingerBtn={handleSingerBtn}
                    singer={singer}
                    key={singer.name}
                    ></Singer>)
                }
            </div>
            <div className="cart_container">
              <Cart
              cart={cart}
              ></Cart>
            </div>
        </div>
    );
};

export default Singers;