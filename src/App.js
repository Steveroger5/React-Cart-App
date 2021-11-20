import { render } from '@testing-library/react';
import React from 'react';
import Cart from './Components/Cart'
import Navbar  from './Components/Navbar';
import Total from './Components/Total';

class App extends React.Component{
    constructor(){
    super();
    this.state = {
        products :[
            {   
                id : 1,
                title : "Mobile Phone",
                price : 50000,
                Qty : 1,
                img : "https://m.media-amazon.com/images/I/71geVdy6-OS._SX569_.jpg",
            },
            {
                id : 2,
                title : "Apple watch",
                Qty : 1,
                price : 30000,
                img : "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/40-nc-alum-gold-sport-starlight-se?wid=2000&hei=2000&fmt=jpeg&qlt=95&.v=1630473770000",
            },
            {
                id : 3,
                title : "Laptop Air",
                Qty : 1,
                price : 100000,
                img : "https://cdn1.smartprix.com/rx-i8KGGvrKH-w1200-h1200/apple-macbook-air-20.jpg",
            },
            {
                id : 4,
                title : "Girlfriend",
                Qty : 1,
                price : 200000,
                img : "https://i.pinimg.com/originals/d6/9f/ca/d69fca37bddde1efc1927bf77a864ace.jpg",
            },
            
        ]
    }
  }
  
  handleIncrease = (product)=>{
    let index = -1;
    for(let i=0;i<this.state.products.length;i++){
        if(product.id==this.state.products[i].id){
            index = i;
        }
    }
    
    let products = this.state.products;
    if(index != -1){
        products[index].Qty += 1;
    }
    this.setState({
        products : products
    })
  }
  
  handleDecrease = (product)=>{
    let index = -1;
    for(let i=0;i<this.state.products.length;i++){
        if(product.id==this.state.products[i].id){
            index = i;
        }
    }
  
    let products = this.state.products;
    if(index !=-1){
        if(products[index].Qty>0){
            products[index].Qty -= 1;
        }
    }
  
    this.setState({
        products : products
    })
  }
  
  handleRemove = (product)=>{
    let products = this.state.products
    let newproducts = []
    for(let i=0;i<products.length;i++){
        if(products[i].id != product.id){
            newproducts.push(products[i]);
        }
    }
    this.setState({
        products : newproducts
    })

  }
 
  calculate = ()=>{
    let products = this.state.products
    let price = 0;
    for(let i=0;i<products.length;i++){
      price += products[i].Qty * products[i].price;
    }
    return price
  }
  
  render(){
  return (
    <div className="App">
      <Navbar products = {this.state.products}/>
      <Cart products = {this.state.products} incrquantity={this.handleIncrease} decrquantity={this.handleDecrease} remove={this.handleRemove}/>
      <Total price={this.calculate()}/>
    </div>
  );
  }
}
export default App;
