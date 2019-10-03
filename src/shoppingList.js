import React from 'react';
import logo from './logo.svg';
import './App.css';



function getstyle(name){


  return  {
    color: getColor(name),

    marginTop: name.indexOf("a")!==-1?10:0,

    marginLeft: name.indexOf("g")!==-1?10:0,

    textTransform: name.indexOf("p")!==-1?"uppercase":0,
  };
}

function getColor(name){
if (name==="denner") {
  return "orange"
}
if (name==="agata") {
  return "red"
}
if (name==="leo") {
  return "green"
}
if (name==="natalia") {
  return "white"

}

  return "purple"

}

function ShoppingList(props) {
  return <div className="shppig-List">
    <center>
    <h1>shppig List</h1>
    </center>
    
    <ul>
    
   {props.items.map(item =>  
    <div>

    <li style={getstyle(item)   }> {item}</li>
    <button type="button" class="btn btn-dark" onClick={()=>props.onRemove(item)}>Remove</button>
    </div>
    )}


     </ul> 

    </div>
}

export default ShoppingList;
