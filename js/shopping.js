console.log(sessionStorage.getItem("username"));
let cartCount;
let totalPrice=0;

const cartNum = (cC) => {
    let cartNumEle = document.getElementById("shoppingCartNum");
    cartNumEle.dataset.count = cC;
}
const clearModel=()=>{
    $(".modal").on("hidden.bs.modal", function(){
        $(".modal-body").html("");
    });
} 

// checking session for username
const loginLogout = () => {
    if (sessionStorage.getItem("username") == 'jay') {
        document.getElementById("mainLoginBtn").innerHTML = "Logout";
        document.getElementById("exampleModalLabel").innerHTML = "Logout";
        document.getElementById("loginbtn").innerHTML = "Logout";
        document.getElementById("welcomeTxt").innerHTML = " Welcome Jay ";
        document.getElementById("logoutlable").style = "display:block";
        document.getElementById("loginForm").style = "display:none";
        document.getElementById("shoppingCart").style = "display:block";
    }
    let cCount = sessionStorage.getItem("cartItems");

    if (cCount == null) {
        cCount = 0;
        //sessionStorage.setItem("cartcount", cartCount);

    }else{
        cCount=cCount.split(',').length; 
    } 
    cartNum(cCount);
}
loginLogout();
//Login
const loginUser = () => {
    let isLoggedIn = false;
    // Check browser support

    if (typeof (Storage) !== "undefined" && !isLoggedIn && !(sessionStorage.getItem("username") == 'jay')) {
        // Store 
        sessionStorage.setItem("username", "jay");
        console.log(sessionStorage.getItem("username"));
        isLoggedIn = true;

        // Retrieve
        // document.getElementById("result").innerHTML = sessionStorage.getItem("username");
    }


    if (isLoggedIn) {
        loginLogout();

    } else {
        document.getElementById("mainLoginBtn").innerHTML = "Login";
        document.getElementById("exampleModalLabel").innerHTML = "Login";
        document.getElementById("loginbtn").innerHTML = "Login";
        document.getElementById("welcomeTxt").innerHTML = " Welcome ";
        document.getElementById("logoutlable").style = "display:none";
        document.getElementById("loginForm").style = "display:block";
        document.getElementById("shoppingCart").style = "display:none";
        sessionStorage.removeItem("username");
        sessionStorage.removeItem("cartcount");
        sessionStorage.removeItem("cartItems");
        cartNum(0);

    }
    $('#loginbtn').attr("data-dismiss", "modal");
}

const products = [{
        name: "Iphone11Pro",
        price: 1565,
        cat: "Electronics",
    },
    {
        name: "Sweat-waist",
        price: 25.56,
        cat: "Sale"
    },
    {
        name: "Music-system",
        price: 12.34,
        cat: "Electronics"
    },
    {
        name: "Watch",
        price: 800.59,
        cat: "Sale"
    },
    {
        name: "Airpods-case",
        price: 7.99,
        cat: "Electronics"
    },
    {
        name: "Sofa",
        price: 21.24,
        cat: "Sale"
    }, {
        name: "Mobile-case",
        price: 14.06,
        cat: "Electronics"
    },
    {
        name: "Chicken-Legs",
        price: 5.45,
        cat: "Food"
    },
    {
        name: "Rice-cooker",
        price: 34.45,
        cat: "Electronics"
    },
    {
        name: "Joystick",
        price: 11.39,
        cat: "Electronics"
    },
    {
        name: "T-shirt",
        price: 16.95,
        cat: "Cloths"
    },
    {
        name: "Girlst-shirt",
        price: 64.99,
        cat: "Cloths"
    },
    {
        name: "Popcorn",
        price: 20.99,
        cat: "Food"
    },
    {
        name: "Protien-puffs",
        price: 20.99,
        cat: "Food"
    },
    {
        name: "Quevos",
        price: 20.99,
        cat: "Food"
    },
]

//console.log(JSON.stringify(products));

let productsContainer = document.getElementById('productsContainer');
let items = 1;

const addProducts= ()=>{
    products.forEach(product => {
        setTimeout(() => {
      resolve('hello');
    }, 2000);
        productsContainer.innerHTML += `<div class="product" > 
                            <div id="product${items}" onClick="product_click(this.id)">
                                <h3 class="productName">${product.name}</h3>
                                <img src=Asserts/${product.name}.jpg  class="productImg cartImg" alt="product items">
                                <div class="price desc">$${product.price}</div>
                                <div class="cat desc">${product.cat}</div>
                            </div>
                            <button class="btn btn-success cartbtn" id="${items}" onClick=addToCart(this.id) >Add to Cart</button></div>`
        items++;
    });
}
addProducts();

const filter=(cat)=>{
    productsContainer.innerHTML = '';

    if(cat=="All"){
        addProducts();
    }else{
        products.forEach(product => {
            if(product.cat == cat){
                productsContainer.innerHTML += `<div class="product" > 
                                <div id="product${items}" onClick="product_click(this.id)">
                                    <h3 class="productName">${product.name}</h3>
                                    <img src=Asserts/${product.name}.jpg  class="productImg cartImg" alt="product items">
                                    <div class="price desc">$${product.price}</div>
                                    <div class="cat desc">${product.cat}</div>
                                </div>
                                <button class="btn btn-success cartbtn" id="${items}" onClick=addToCart(this.id) >Add to Cart</button></div>`
            items++;
            }      
        });
    }
}

const searchProduct = (input) => {
    //console.log(input.value);

    let userInput = input.value.toUpperCase();

    let products = document.querySelectorAll('.product');

    //console.log(products)

    products.forEach(product => {

        let name = product.querySelector('.productName').innerText.toUpperCase();
        let price = product.querySelector('.price').innerText;
        let cat = product.querySelector('.cat').innerText.toUpperCase();

        if ((name + " " + cat + " " + price).includes(userInput)) {
            product.style.display = 'block';
        } else {
            product.style.display = 'none';
        }
    })
}

//on click model
const product_click = (clickedId) => {
    $('#productOnClick').modal('show');
    let pC = document.getElementById(clickedId);
    productsModel.innerHTML = pC.innerHTML;
}



const addToCart = (btnId) => {
    let cartItemIds = [];
    if(sessionStorage.getItem("username")=='jay'){
   // let cp = document.getElementById("product"+btnId);
   if (sessionStorage.getItem("cartItems") !=null) {
    cartItemIds=sessionStorage.getItem("cartItems").split(',');
}

cartItemIds.push("product"+btnId);
sessionStorage.setItem("cartItems",cartItemIds.toString());
cartNum(cartItemIds.length);
    }else{
        alert("Please login to add products to cart")
    }
   
   totalPrice+=Math.ceil(parseFloat(document.getElementById('product'+btnId).querySelector('.price').innerText.replace("$", "")));
}
const openCart = () => {
    clearModel();
    $('#productOnClick').modal('show');
    if (sessionStorage.getItem("cartItems") !=null) {
    cartFrmSession=sessionStorage.getItem("cartItems").split(',');
    document.getElementById('modelFooter').innerHTML =`<div><h1>Total Cart Price $${totalPrice}</h1></div>`
    cartFrmSession.forEach(element => {
        productsModel.innerHTML += (`<div class="${element}">${document.getElementById(element).innerHTML} <button onClick="removeFrmCart(this.parentElement.className)">&times;</button></div>`);
    });
}
clearModel();

}

const removeFrmCart=(removeId)=>{
    clearModel();
    if(cartFrmSession.length==1){

            $(".modal-body").html("");
            cartNum(0);
            cartFrmSession = [];
            sessionStorage.removeItem("cartItems");
    }else{
    for( let i = 0; i < cartFrmSession.length; i++){ 
        if ( cartFrmSession[i] === removeId) {
            cartFrmSession.splice(i,1); 
            break;
        }
     }
     if (sessionStorage.getItem("cartItems").split(',').length !=null) {
        $(".modal-body").html("");
        cartFrmSession.forEach(element => {
            productsModel.innerHTML += (`<div class="${element}">${document.getElementById(element).innerHTML} <button onClick="removeFrmCart(this.parentElement.className)">&times;</button></div>`);
        });
        
    }
    
    cartNum(cartFrmSession.length);
    sessionStorage.setItem("cartItems",cartFrmSession.toString());
    }
    
    totalPrice-=Math.ceil(parseFloat(document.getElementById(removeId).querySelector('.price').innerText.replace("$", "")));
    if(  totalPrice<0    ){
        totalPrice=0;
    }
    document.getElementById('modelFooter').innerHTML =`<div><h1>Total Cart Price $${totalPrice}</h1></div>`
    clearModel();

}
