let product = JSON.parse(localStorage.getItem("selectedProduct"));

let quantity = 1;


// Load product

document.getElementById("order-image").src = product.image;

document.getElementById("order-name").innerText = product.name;

document.getElementById("order-price").innerText = product.price;



// Convert price

let productPrice = Number(
    product.price.replace(/[^0-9]/g, "")
);



// Increase quantity

function increase(){

    quantity++;

    document.getElementById("quantity").innerText = quantity;

    updateTotal();

}



// Decrease quantity

function decrease(){

    if(quantity > 1){

        quantity--;

    }

    document.getElementById("quantity").innerText = quantity;

    updateTotal();

}




// Calculate total

function updateTotal(){

let delivery = Number(
document.querySelector(
'input[name="delivery"]:checked'
).value
);


let total = 
(productPrice * quantity) + delivery;


document.getElementById("total").innerText = total;


}




// Confirm Order

function confirmOrder(){


let name =
document.getElementById("customer-name").value;


let phone =
document.getElementById("customer-phone").value;


let address =
document.getElementById("customer-address").value;



if(name=="" || phone=="" || address==""){

alert("সব তথ্য পূরণ করুন");

return;

}



let order = {

product: product.name,

quantity: quantity,

customerName: name,

phone: phone,

address: address,

total:
document.getElementById("total").innerText

};



console.log(order);



alert(
"আপনার অর্ডার সফলভাবে গ্রহণ করা হয়েছে!"
);


}