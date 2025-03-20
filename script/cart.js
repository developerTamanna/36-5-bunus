const handleAddToCart=()=>{
    const productName = document.getElementById("product-name")
    const productQuantity = document.getElementById("product-quantity")
    const name = productName.value;
    const quantity = productQuantity.value;
    displayProduct(name, quantity)
    productName.value ='';
    productQuantity.value ='';
}

const displayProduct=(name,quantity )=>{
const productContainer = document.getElementById("product-container")
const li = document.createElement("li")
li.innerText =` ${name}:${quantity}`;
productContainer.appendChild(li)
}