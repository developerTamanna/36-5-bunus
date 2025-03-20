const handleAddToCart=()=>{
    const productName = document.getElementById("product-name")
    const productQuantity = document.getElementById("product-quantity")
    const name = productName.value;
    const quantity = productQuantity.value;
    handleSetToLocalStorage(name, quantity)
    displayProduct(name, quantity)
    productName.value ='';
    productQuantity.value ='';
}

const displayProduct=(productName,quantity )=>{
const productContainer = document.getElementById("product-container")
const li = document.createElement("li")
li.innerText =` ${productName}:${quantity}`;
productContainer.appendChild(li)
}


const handleSetToLocalStorage=(productName, quantity)=>{
    // console.log(productName, quantity)
    const newProduct = {name: quantity};
    localStorage.setItem("cart", JSON.stringify(newProduct) )
    
}