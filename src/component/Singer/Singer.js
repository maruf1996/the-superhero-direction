import React from 'react';
import './Singer.css';

const Singer = (props) => {
    // console.log('clicked');
    const {name,profession,country,budget,hobby,img}=props.singer;
    return (
        <div className="singer_content">
                <img src={img} alt="" />
                <p>Name: {name}</p>
                <p>Profession: {profession}</p>
                <p>Country: {country}</p>
                <p>Budget:<span style={{fontWeight:'38px'}}>&#2547;</span>{budget}</p>
                <p>Hobby: {hobby}</p>
                <button
                onClick={()=>props.handleSingerBtn(props.singer)}
                > <i class="fas fa-cart-plus"></i>  Add to Cart</button>
        </div>
    );
};

export default Singer;