(this.webpackJsonphello_react=this.webpackJsonphello_react||[]).push([[0],{142:function(t,e,c){},451:function(t,e,c){"use strict";c.r(e);var i=c(8),n=c.n(i),r=c(20),a=c.n(r),s=(c(142),c(36)),o=c(37),d=c(39),p=c(38),l=(c(143),c(446),c(2)),u=function(t){var e=t.product,c=e.title,i=e.price,n=e.Qty,r=e.img;return Object(l.jsxs)("div",{className:"cart-item",children:[Object(l.jsx)("div",{className:"left",children:Object(l.jsx)("img",{src:r,style:h.image})}),Object(l.jsxs)("div",{className:"right",children:[Object(l.jsx)("div",{style:h.heading,children:c}),Object(l.jsxs)("div",{style:h.text,children:["Rs ",i]}),Object(l.jsxs)("div",{style:h.text,children:["Qty : ",n]}),Object(l.jsxs)("div",{className:"actions",children:[Object(l.jsx)("img",{className:"icons",src:"https://cdn-icons.flaticon.com/png/512/2569/premium/2569198.png?token=exp=1637233742~hmac=c636da469d6363d0f11527511aa56fe2",onClick:function(){t.decrquantity(t.product)}}),Object(l.jsx)("img",{style:h.icon,src:"https://cdn-icons.flaticon.com/png/512/3032/premium/3032276.png?token=exp=1637233538~hmac=b51576221a7e35dc90b8063e0fa406d8",onClick:function(){t.incrquantity(t.product)}}),Object(l.jsx)("img",{style:h.icon,src:"https://cdn-icons-png.flaticon.com/512/1828/1828843.png",onClick:function(){t.remove(t.product)}})]})]})]})},h={image:{height:"120px",width:"120px",backgroundColor:"grey",borderRadius:"30%",margin:"4%",padding:"2%"},heading:{fontSize:"1rem",letterSpacing:"3px",fontWeight:"800",textDecoration:"Underline"},text:{fontSize:"1rem",letterSpacing:"2px"},icon:{height:"25px",marginTop:"5%",marginRight:"4%",marginLeft:"6%"}},g=function(t){Object(d.a)(c,t);var e=Object(p.a)(c);function c(){return Object(s.a)(this,c),e.apply(this,arguments)}return Object(o.a)(c,[{key:"render",value:function(){var t=this;return Object(l.jsx)("div",{style:j.container,children:this.props.products.map((function(e){return Object(l.jsx)(u,{product:e,incrquantity:t.props.incrquantity,decrquantity:t.props.decrquantity,remove:t.props.remove},e.id)}))})}}]),c}(n.a.Component),m=g,j={container:{display:"flex",flexDirection:"column",width:"50%",border:"3px dashed black"}},b={icon:{height:"35px",marginLeft:"80%"},cont:{},header:{backgroundColor:"#010A43",padding:"3px"},text:{backgroundColor:"#F0A500",color:"black",padding:"10px",marginLeft:"82%",marginTop:"-50px",borderRadius:"50%",fontWeight:"bold"}},f=function(t){for(var e=t.products,c=0,i=0;i<e.length;i++)c+=e[i].Qty;return Object(l.jsx)("div",{style:b.header,children:Object(l.jsxs)("div",{style:b.cont,children:[Object(l.jsx)("span",{style:b.text,children:c}),Object(l.jsx)("img",{style:b.icon,src:"https://cdn-icons-png.flaticon.com/512/4290/4290854.png"})]})})},x=function(t){Object(d.a)(c,t);var e=Object(p.a)(c);function c(){return Object(s.a)(this,c),e.apply(this,arguments)}return Object(o.a)(c,[{key:"render",value:function(){return Object(l.jsxs)("div",{style:v.cont,children:["Total Price : Rs ",this.props.price]})}}]),c}(n.a.Component),y=x,v={cont:{padding:"1%",backgroundColor:"#010A43",color:"#fff",fontWeight:"bold",letterSpacing:"3px",textAlign:"center",position:"fixed",bottom:"0",width:"100%"}},O=function(t){Object(d.a)(c,t);var e=Object(p.a)(c);function c(){var t;return Object(s.a)(this,c),(t=e.call(this)).handleIncrease=function(e){for(var c=-1,i=0;i<t.state.products.length;i++)e.id==t.state.products[i].id&&(c=i);var n=t.state.products;-1!=c&&(n[c].Qty+=1),t.setState({products:n})},t.handleDecrease=function(e){for(var c=-1,i=0;i<t.state.products.length;i++)e.id==t.state.products[i].id&&(c=i);var n=t.state.products;-1!=c&&n[c].Qty>0&&(n[c].Qty-=1),t.setState({products:n})},t.handleRemove=function(e){for(var c=t.state.products,i=[],n=0;n<c.length;n++)c[n].id!=e.id&&i.push(c[n]);t.setState({products:i})},t.calculate=function(){for(var e=t.state.products,c=0,i=0;i<e.length;i++)c+=e[i].Qty*e[i].price;return c},t.state={products:[{id:1,title:"Mobile Phone",price:5e4,Qty:1,img:"https://m.media-amazon.com/images/I/71geVdy6-OS._SX569_.jpg"},{id:2,title:"Apple watch",Qty:1,price:3e4,img:"https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/40-nc-alum-gold-sport-starlight-se?wid=2000&hei=2000&fmt=jpeg&qlt=95&.v=1630473770000"},{id:3,title:"Laptop Air",Qty:1,price:1e5,img:"https://cdn1.smartprix.com/rx-i8KGGvrKH-w1200-h1200/apple-macbook-air-20.jpg"},{id:4,title:"Girlfriend",Qty:1,price:2e5,img:"https://i.pinimg.com/originals/d6/9f/ca/d69fca37bddde1efc1927bf77a864ace.jpg"}]},t}return Object(o.a)(c,[{key:"render",value:function(){return Object(l.jsxs)("div",{className:"App",children:[Object(l.jsx)(f,{products:this.state.products}),Object(l.jsx)(m,{products:this.state.products,incrquantity:this.handleIncrease,decrquantity:this.handleDecrease,remove:this.handleRemove}),Object(l.jsx)(y,{price:this.calculate()})]})}}]),c}(n.a.Component);a.a.render(Object(l.jsx)(n.a.StrictMode,{children:Object(l.jsx)(O,{})}),document.getElementById("root"))}},[[451,1,2]]]);
//# sourceMappingURL=main.570dfe63.chunk.js.map