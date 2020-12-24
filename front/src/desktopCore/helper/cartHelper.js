//storing all the products added in cart which is from localstorage
//to put everything into the cart and in localstorage as well
//so in order to do that we pass the product as item here and also we want to redirect the page to cart page once product is added 
//so we use next for using callback to redirect to the cart page again 
export const addItemToCart = (item, next) => {
  let cart = [];
  if (typeof window !== undefined) {
    if (localStorage.getItem("cart")) {
      cart = JSON.parse(localStorage.getItem("cart")); //if localstorage contains something thanstore it in temporary cart
    }
    cart.push({ //push is for load all the items and push this new values 
      ...item,
      count: 1
    });
    localStorage.setItem("cart", JSON.stringify(cart));
    next();
  }
};

//to like preload the cart
export const loadCart = () => {
  if (typeof window !== undefined) {
    if (localStorage.getItem("cart")) {
      return JSON.parse(localStorage.getItem("cart"));
    }
  }
};

//if product id matches with any cart product then we splice it(remove it) 
export const removeItemFromCart = productId => {
  let cart = [];
  if (typeof window !== undefined) {
    if (localStorage.getItem("cart")) {
      cart = JSON.parse(localStorage.getItem("cart"));
    }
    cart.map((product, i) => {
      if (product._id === productId) {
        cart.splice(i, 1);
      }
    });
    localStorage.setItem("cart", JSON.stringify(cart)); //after removing product update the cart
  }
  return cart;//not required but we throw this card as well
};

export const cartEmpty = next => {
  if (typeof window !== undefined) {
    localStorage.removeItem("cart");
 //   let cart = [];
 //remove this comment if shows some error   localStorage.setItem("cart", JSON.stringify(cart));
    next();
  }
};
  