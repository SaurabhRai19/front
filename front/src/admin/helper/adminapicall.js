import { API } from "../../backend";

//category calls
//while firing this method as a request to backend we require userId,token that we pass with bearer and category name
export const createCategory = (userId, token, category) => {
  return fetch(`${API}/category/create/${userId}`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`
    },
    body: JSON.stringify(category)
  })
    .then(response => {
      return response.json();
    })
    .catch(err => console.log(err));
};

//get all categories
export const getCategories = () => {
  return fetch(`${API}/categories`, {
    method: "GET"
  })
    .then(response => {
      return response.json();
    })
    .catch(err => console.log(err));
};
//getting a category
export const getaCategory = categoryId => {
  return fetch(`${API}/category/${categoryId}`, {
    method: "GET"
  })
    .then(response => {
      return response.json();
    })
    .catch(err => console.log(err));
};

//update a category
export const updateCategory = (categoryId, userId, token, category) => {
  return fetch(`${API}/category/${categoryId}/${userId}`, {
    method: "PUT",
    headers: {
      Accept: "application/json",
      Authorization: `Bearer ${token}`
    },
    body: JSON.stringify(category)
  })
    .then(response => {
      return response.json();
    })
    .catch(err => console.log(err));
};

//delete a category
export const deleteCategory = (categoryId, userId, token) => {
  return fetch(`${API}/category/${categoryId}/${userId}`, {
    method: "DELETE",
    headers: {
      Accept: "application/json",
      Authorization: `Bearer ${token}`
    }
  })
    .then(response => {
      return response.json();
    })
    .catch(err => console.log(err));
};

//products calls

//create a product
export const createaProduct = (userId, token, product) => {
  return fetch(`${API}/product/create/${userId}`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      Authorization: `Bearer ${token}`
    },
    body: product
  })
    .then(response => {
      return response.json();
    })
    .catch(err => console.log(err));
};

//get all products
export const getProducts = () => {
  return fetch(`${API}/products`, {
    method: "GET"
  })
    .then(response => {
      return response.json();
    })
    .catch(err => console.log(err));
};

//delete a product

export const deleteProduct = (productId, userId, token) => {
  return fetch(`${API}/product/${productId}/${userId}`, {
    method: "DELETE",
    headers: {
      Accept: "application/json",
      Authorization: `Bearer ${token}`
    }
  })
    .then(response => {
      return response.json();
    })
    .catch(err => console.log(err));
};

//get a product

export const getProduct = productId => {
  return fetch(`${API}/product/${productId}`, {
    method: "GET"
  })
    .then(response => {
      return response.json();
    })
    .catch(err => console.log(err));
};

//update a product

export const updateProduct = (productId, userId, token, product) => {
  return fetch(`${API}/product/${productId}/${userId}`, {
    method: "PUT",
    headers: {
      Accept: "application/json",
      Authorization: `Bearer ${token}`
    },
    body: product
  })
    .then(response => {
      return response.json();
    })
    .catch(err => console.log(err));
};
//order calls
//order get
export const getOrders = (token,userId) => {
  return fetch(`${API}/order/all/${userId}`, {
    method: "GET"
  })
    .then(response => {
      return response.json();
    })
    .catch(err => console.log(err));
};
//order status update
export const getOrderStatus=(userId,orderId,token,updatedorders)=>{
  return fetch(`${API}/order/${orderId}/status/${userId}`,{
    method:  "PUT",
    headers: {
      Accept: "application/json",
      Authorization: `Bearer ${token}`
    },
    body: JSON.stringify({ order: updatedorders })
  })
  .then(reponse => {
    return reponse.json();
  })
  .catch(err => console.log(err));
}
