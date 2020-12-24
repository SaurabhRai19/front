import { API } from "../../backend";

export const getProducts = () => {
  return fetch(`${API}/products`, { method: "GET" })
    .then(response => {
      return response.json();
    })
    .catch(err => console.log(err));
};

export const getProduct = (product) => {
  return fetch(`${API}/product/${product._id}`, {method: "GET"})
  .then(response=>{
    console.log(response);
    return response.json();
  })
  .catch(err=> console.log(err));
}

export const getAllUsers = () => {
  return fetch(`${API}/users`, {method: "GET"})
  .then(response => {
    return response.json();
  })
  .catch(err=> console.log(err));
}
export const getroomId = ()=>{
const getroomId= fetch(`${API}/share`, {method: "GET"});
getroomId.then(response => {
    return response.json();
  }).then(room => {
    console.log(room);
    
  return room; 
}) 
};

const fetchPromise = fetch("https://ghibliapi.herokuapp.com/people");
fetchPromise.then(response => {
  return response.json();
}).then(people => {
  console.log(people);
});