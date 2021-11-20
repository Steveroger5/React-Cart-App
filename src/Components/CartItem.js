import React from 'react';

const CartItem = (props)=>{
        const {title,price,Qty,img} = props.product;
        return(
            <div className="cart-item">
                <div className="left">
                    <img src={img} style={styles.image}></img>
                </div>
                <div className="right">
                    <div style={styles.heading}>{title}</div>
                    <div style={styles.text}>Rs {price}</div>
                    <div style={styles.text}>Qty : {Qty}</div>
                    <div className="actions">
                        {/*buttons*/}
                        <img  
                        className="icons" 
                        src="https://cdn-icons.flaticon.com/png/512/2569/premium/2569198.png?token=exp=1637233742~hmac=c636da469d6363d0f11527511aa56fe2"
                        onClick = {()=>{
                            props.decrquantity(props.product)
                        }}
                        >
                        </img>
                        <img  
                        style={styles.icon} 
                        src="https://cdn-icons.flaticon.com/png/512/3032/premium/3032276.png?token=exp=1637233538~hmac=b51576221a7e35dc90b8063e0fa406d8"
                        onClick = {()=>{
                            props.incrquantity(props.product)
                        }}
                        ></img>
                        <img 
                        style={styles.icon} 
                        src="https://cdn-icons-png.flaticon.com/512/1828/1828843.png"
                        onClick = {()=>{
                            props.remove(props.product)
                        }}
                        ></img>
                    </div>
                </div>
            </div>
        );
    }

export default CartItem;

const styles = {
    image : {
        height : "120px",
        width : "120px",
        backgroundColor : "grey",
        borderRadius : "30%",
        margin : "4%",
        padding : "2%"
    },
    heading : {
        fontSize : "1rem",
        letterSpacing : "3px",
        fontWeight : "800",
        textDecoration : "Underline"
    },
    text : {
        fontSize : "1rem",
        letterSpacing : "2px"
    },
    icon : {
        height : "25px",
        marginTop : "5%",
        marginRight : "4%",
        marginLeft : "6%"
    }
}