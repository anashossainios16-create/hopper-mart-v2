const product = {

    name: "KES Premium Cooker",

    price: "৳ 1300",

    image: "images/cooker.jpg",

    description:
    "Premium quality cooker. ৬ মাস warranty সহ। সারা বাংলাদেশে ক্যাশ অন ডেলিভারি সুবিধা।"

};


// Product show

document.getElementById("product-name").innerText = product.name;

document.getElementById("product-price").innerText = product.price;

document.getElementById("product-description").innerText = product.description;

document.getElementById("product-image").src = product.image;


// Save product for order page

localStorage.setItem(
    "selectedProduct",
    JSON.stringify(product)
);