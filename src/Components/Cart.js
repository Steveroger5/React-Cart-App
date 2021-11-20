import React from 'react'
import { log } from 'util';
import CartItem from './CartItem'

class Cart extends React.Component{
    render(){
        return (
         <div style={styles.container}>
            {this.props.products.map((item)=>{
                return(
                    <CartItem product={item} incrquantity={this.props.incrquantity} decrquantity={this.props.decrquantity} remove={this.props.remove} key={item.id}/>
                )
            })}
         </div>   
        )
    }
}

export default Cart;

const styles = {
    container :{
        display : "flex",
        flexDirection : "column",
        width : "50%",
        border : "3px dashed black"
    }
}