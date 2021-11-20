import React from 'react';

class Total extends React.Component{
    render(){
        return(
            <div style = {styles.cont}>
                Total Price : Rs {this.props.price}
            </div>
        )
    }
}

export default Total;

const styles = {
    cont : {
        padding : "1%",
        backgroundColor : "#010A43",
        color : "#fff",
        fontWeight : "bold",
        letterSpacing : "3px",
        textAlign : "center",
        position : "fixed",
        bottom : "0",
        width : "100%"
    }
}