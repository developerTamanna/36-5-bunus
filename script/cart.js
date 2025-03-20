// // const handleAddToCart=()=>{
// //     const productName = document.getElementById("product-name")
// //     const productQuantity = document.getElementById("product-quantity")
// //     const name = productName.value;
// //     const quantity = productQuantity.value;
// //     saveProductToLocalStorage(name, quantity)
// //     displayProduct(name, quantity)
// //     productName.value ='';
// //     productQuantity.value ='';
// // }

// // const displayProduct=(productName,quantity )=>{
// // const productContainer = document.getElementById("product-container")
// // const li = document.createElement("li")
// // li.innerText =` ${productName}:${quantity}`;
// // productContainer.appendChild(li)
// // }


// // // const handleSetToLocalStorage=(productName, quantity)=>{
// // //     // console.log(productName, quantity)
// // //     // const newProduct = {name: quantity};
// // //     // localStorage.setItem("cart", JSON.stringify(newProduct) )


    
// // // }


// // const getProductFromLocalstorage=()=>{
// //     let cart ='';
// //     const getProduct = localStorage.getItem("cart")
// //     if(getProduct){
// //         cart = JSON.parse(getProduct)
// //     }
// //     return cart;
// // }

// // const saveProductToLocalStorage = (productName, quantity)=>{
// //     const cart  = getProductFromLocalstorage();
// //     console.log(cart)
// // }





// const handleAddToCart = () => {
//     const productName = document.getElementById("product-name");
//     const productQuantity = document.getElementById("product-quantity");

//     const name = productName.value.trim();
//     const quantity = productQuantity.value.trim();

//     if (name === "" || quantity === "") {
//         alert("Please enter both product name and quantity.");
//         return;
//     }

//     saveProductToLocalStorage(name, quantity);
//     displayProduct(name, quantity);

//     productName.value = '';
//     productQuantity.value = '';
// };

// const displayProduct = (productName, quantity) => {
//     const productContainer = document.getElementById("product-container");
    
//     // আগের লিস্ট মুছে নতুন লিস্ট দেখানোর জন্য
//     productContainer.innerHTML = '';

//     const cart = getProductFromLocalstorage();
//     for (const [name, qty] of Object.entries(cart)) {
//         const li = document.createElement("li");
//         li.innerText = `${name}: ${qty}`;
//         productContainer.appendChild(li);
//     }
// };

// // লোকাল স্টোরেজ থেকে ডাটা রিট্রিভ করার ফাংশন
// const getProductFromLocalstorage = () => {
//     let cart = localStorage.getItem("cart");
//     return cart ? JSON.parse(cart) : {};
// };

// // লোকাল স্টোরেজে ডাটা সংরক্ষণের ফাংশন
// const saveProductToLocalStorage = (productName, quantity) => {
//     const cart = getProductFromLocalstorage();
    
//     // আগের ডাটা ঠিক রেখে নতুন প্রোডাক্ট আপডেট করা হবে
//     cart[productName] = quantity;
    
//     // আপডেট করা cart লোকাল স্টোরেজে সেট করা হবে
//     localStorage.setItem("cart", JSON.stringify(cart));
// };

// // লোকাল স্টোরেজ থেকে ডাটা লোড করে UI-তে দেখানোর জন্য
// const loadFromLocalStorage = () => {
//     displayProduct();
// };

// // যখন পেজ লোড হবে, তখন লোকাল স্টোরেজ থেকে ডাটা লোড করবে
// window.onload = loadFromLocalStorage;


const handleAddToCart = () => {
    const productName = document.getElementById("product-name");
    const productQuantity = document.getElementById("product-quantity");

    const name = productName.value.trim();
    const quantity = productQuantity.value.trim();

    if (name === "" || quantity === "") {
        alert("Please enter both product name and quantity.");
        return;
    }

    saveProductToLocalStorage(name, quantity);
    displayProducts(); // লোকাল স্টোরেজ থেকে ডাটা নিয়ে UI আপডেট করবো

    productName.value = '';
    productQuantity.value = '';
};

// ✅ UI-তে লোকাল স্টোরেজের সব প্রোডাক্ট দেখানোর জন্য
const displayProducts = () => {
    const productContainer = document.getElementById("product-container");
    
    // আগের লিস্ট মুছে নতুন লিস্ট দেখানোর জন্য
    productContainer.innerHTML = '';

    const cart = getProductFromLocalStorage();
    for (const [name, qty] of Object.entries(cart)) {
        const li = document.createElement("li");
        li.innerText = `${name}: ${qty}`;
        productContainer.appendChild(li);
    }
};

// ✅ লোকাল স্টোরেজ থেকে ডাটা রিট্রিভ করা
const getProductFromLocalStorage = () => {
    let cart = localStorage.getItem("cart");
    return cart ? JSON.parse(cart) : {}; // যদি কিছু না থাকে, খালি অবজেক্ট রিটার্ন করবে
};

// ✅ লোকাল স্টোরেজে ডাটা সংরক্ষণ এবং আপডেট
const saveProductToLocalStorage = (productName, quantity) => {
    const cart = getProductFromLocalStorage();
    
    // আগের ডাটা ঠিক রেখে নতুন প্রোডাক্ট আপডেট করা হবে
    cart[productName] = quantity;
    
    // আপডেট করা cart লোকাল স্টোরেজে সেট করা হবে
    localStorage.setItem("cart", JSON.stringify(cart));
};

// ✅ পেজ লোড হলে লোকাল স্টোরেজ থেকে প্রোডাক্ট লোড করবে
window.onload = displayProducts;
