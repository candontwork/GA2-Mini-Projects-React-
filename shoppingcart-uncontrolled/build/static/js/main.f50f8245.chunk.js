(this["webpackJsonpreact-shopping-cart-starter"]=this["webpackJsonpreact-shopping-cart-starter"]||[]).push([[0],{12:function(e,t,i){},14:function(e,t,i){"use strict";i.r(t);var n=i(1),r=i.n(n),c=i(7),a=i.n(c),o=i(5),s=i(6),p=(i(12),i(0));var l=function(e){var t=e.products;function i(e){var i=e.target.id,n=t[i];return props.onAddToCartHandler(n),n}var n=t.map((function(e,t){return Object(p.jsxs)("div",{id:t,onClick:i,children:[e.name," - $",e.price]},t)}));return Object(p.jsxs)("div",{className:"AllTheThings",children:[Object(p.jsx)("h2",{children:"Put these in your cart!"}),n]})},d=[{name:"allen wrench",price:2.99,description:"handy tool"},{name:"cornucopia",price:5.99,description:"festive holiday decoration"},{name:"banana",price:.99,description:"full of potassium"},{name:"guillotine (cigar)",price:10.59,description:"behead your stub"},{name:"jack-o-lantern",price:3.99,description:"spooky seasonal fun"},{name:"doggie treat (box)",price:5.99,description:"fido loves 'em"},{name:"egg separator",price:3.99,description:"it separates yolks from whites"},{name:"LED lightbulb",price:6.55,description:"It's super-efficient!"},{name:"owl pellets",price:3.99,description:"Don't ask what they used to be."},{name:"flag",price:5.99,description:"catches the breeze"},{name:"hair brush",price:6.99,description:"fine boar bristles"},{name:"iridium (one gram)",price:19.36,description:"corrosion-resistant metal"},{name:"quark",price:.01,description:"Very small"},{name:"turtleneck",price:19.99,description:"available in black and slightly-darker black"},{name:"kaleidoscope",price:8.25,description:"tube with moving plastic pieces inside"},{name:"mitt (leather)",price:15,description:"regulation sized"},{name:"nothing",price:10,description:"Hey, if you pay us, we won't ask any questions."},{name:"violin",price:2e3,description:"Talk about a JS fiddle..."},{name:"yoyo",price:1,description:"We had to pull some strings to get this one in."},{name:"pincushion",price:1.99,description:"You'll get 'stuck' on it"}];var u=function(e){function t(t){var i=t.target.id;e.onRemoveFromCartHandler(i)}var i=e.cart.map((function(e,i){return Object(p.jsxs)("div",{id:i,onClick:t,children:[e.name," - $",e.price]},i)}));return Object(p.jsxs)("div",{className:"MyShoppingCart",children:[Object(p.jsx)("h2",{children:"Your Cart!"}),i]})};var m=function(e){var t=Object(n.useRef)(),i=Object(n.useRef)(),r=Object(n.useRef)();return Object(p.jsxs)("div",{className:"Form",children:[Object(p.jsx)("input",{name:"name",placeholder:"item name",type:"text",ref:t}),Object(p.jsx)("input",{name:"price",placeholder:"price",type:"number",ref:i}),Object(p.jsx)("input",{name:"description",placeholder:"description",type:"text",ref:r}),Object(p.jsx)("button",{type:"submit",onClick:function(n){e.onSubmitCustomItem(t.current.value,i.current.value,r.current.value)},children:"Submit"})]})};function b(){var e=Object(n.useState)(d),t=Object(s.a)(e,2),i=t[0],r=t[1],c=Object(n.useState)([]),a=Object(s.a)(c,2),b=a[0],j=a[1];return console.log(i),Object(p.jsxs)("div",{className:"App",children:[Object(p.jsx)("h1",{children:"Big Time Shopping"}),Object(p.jsx)(m,{onSubmitCustomItem:function(e,t,n){r([{name:e,price:t,description:n}].concat(Object(o.a)(i)))}}),Object(p.jsxs)("div",{className:"products",children:[Object(p.jsx)(l,{products:i,onAddToCartHandler:function(e){j([].concat(Object(o.a)(b),[e]))}}),Object(p.jsx)(u,{cart:b,onRemoveFromCartHandler:function(e){var t=parseInt(e,10),i=b.filter((function(e,i){return i!==t}));console.log(i),j(i)}})]})]})}var j=document.getElementById("root");a.a.render(Object(p.jsx)(r.a.StrictMode,{children:Object(p.jsx)(b,{})}),j)}},[[14,1,2]]]);
//# sourceMappingURL=main.f50f8245.chunk.js.map