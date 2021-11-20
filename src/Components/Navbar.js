import React from 'react'

const Navbar = (props)=>{
    let products = props.products;
    let count = 0;
    for(let i=0;i<products.length;i++){
        count += products[i].Qty
    }
    return (
        <div style={styles.header}>
        <div style={styles.cont}>
        <span style={styles.text}>{count}</span>
            <img style={styles.icon} src="https://cdn-icons-png.flaticon.com/512/4290/4290854.png"/>
            
        </div>
        </div>
    )
}

const styles = {
    icon : {
        height : "35px",
        marginLeft : "80%",
    },
    cont : {
       
    },
    header : {
        backgroundColor : "#010A43",
        padding : "3px"
    },
    text : {
        backgroundColor : "#F0A500",
        color : "black",
        padding : "10px",
        marginLeft : "82%",
        marginTop : "-50px",
        borderRadius : "50%",
        fontWeight : "bold"
    }
}
export default Navbar;
