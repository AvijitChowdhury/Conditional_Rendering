import React from 'react';
import { useState } from 'react';

const User = (props) => {
    const familier = props.familier;
    let greetings ;
    if(familier){
        greetings= <p>Welcome,my friend</p>
    }else{
        greetings= <p>Who the hell are you?</p>
    }
    //Using ternary operator
    const greetings2=familier?
        greetings= <p>Welcome,my friend</p>
    :
        greetings= <p>Who the hell are you?</p>;
    const number=8;
    const greetings3 =(number>5)?'hello':'gello';
    
    
    return (
        <div>
           <h2>Grettings</h2>
           {/* <p>Welcome my friend</p>
           <p>Who the hell are you?</p> */}
           {greetings}
           <h2>Food</h2>{
           familier? <p>I will buy food for you</p>
           : <p>Lets eat his his whoose whoose</p>
           }

           <h2>Connection</h2>
           {/* {familier? <p>Let's join facbook</p>
           : <p>I don't add stranger</p> */}
           
           {
               familier&& <p>Let's join facebook</p>
           }
        </div>
    );
};

export default User;