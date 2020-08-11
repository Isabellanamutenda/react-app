import React from 'react';
import logo from './logo.svg';
import './App.css';




class App extends React.Component{
  constructor(props){
    super(props)
    this.state={
      type:["Vegetables","fruits"],
      name:["Cabbage","Kales","Spinach","Lettuce","Apples","Avocado","Grapes","Pineapples","Oranges","Mangoes",],
      quantity:[10,15,12,20,34,14,5,23,90,8,]
    };
  
  }
  render(){
    return(
      <div>
        <h1>Green Kiosks</h1>
      <h2>Our Products</h2>
      <img src="images/cabbage.jpeg" height="300" weight="400"/>
      <p><li>Product Name {this.state.name[0]}</li>
      <li>type,{this.state.type[0]}</li>
      <li>Quantity {this.state.quantity[0]}</li>
      </p>

      <img src="images/kale.jpg"height="300" weight="400"/>
      <p><li>Product Name {this.state.name[1]}</li>
      <li>type, {this.state.type[0]}</li>
      <li>Quantity {this.state.quantity[1]}</li>
      </p>

      <img src="images/spinach.jpg" height="300" weight="400"/>
      <p><li>Product Name {this.state.name[2]}</li>
      <li>type, {this.state.type[0]}</li>
      <li>Quantity {this.state.quantity[2]}</li>
      
      </p><img src="images/lettuce.jpeg" height="300" weight="400"/>
      <p><li>Product Name {this.state.name[3]}</li>
      <li>type, {this.state.type[0]}</li>
      <li>Quantity {this.state.quantity[3]}</li>
      </p>

      <img src="images/apple.webp" height="300" weight="400"/>
      <p><li>Product Name {this.state.name[4]}</li>
      <li>type, {this.state.type[1]}</li>
      <li>Quantity {this.state.quantity[4]}</li>
      
      </p><img src="images/avocado.jpg"height="300" weight="400" />
      <p><li>Product Name {this.state.name[5]}</li>
      <li>type, {this.state.type[1]}</li>
      <li>Quantity {this.state.quantity[5]}</li>
      </p>

      <img src="images/grapes.jpg" height="300" weight="400"/>
      <p><li>Product Name {this.state.name[6]}</li>
      <li>type, {this.state.type[1]}</li>
      <li>Quantity {this.state.quantity[6]}</li>
      </p>




      <img src="images/pineapples.jpg"height="300" weight="400" />
      <p><li>Product Name {this.state.name[7]}</li>
      <li>type, {this.state.type[1]}</li>
      <li>Quantity {this.state.quantity[7]}</li>
      </p>



      <img src="images/orange.jpg "height="300" weight="400" />
      <p><li>Product Name {this.state.name[8]}</li>
      <li>type, {this.state.type[1]}</li>
      <li>Quantity {this.state.quantity[8]}</li>
      </p>

      <img src="images/mangoes.jpg"height="300" weight="400" />
      <p><li>Product Name {this.state.name[9]}</li>
      <li>type, {this.state.type[1]}</li>
      <li>Quantity {this.state.quantity[9]}</li>
      </p>



      </div>
    )
  }
}

export default App;
