import { API } from "../../backend";


/* Here we are making a fetch request to url defined in our backend
user below comes as a json so before sending it to server in this case our backend we stringify it.
method,headers,body all these are carrying baggage same as postman that you carry while making req. 
The response.json that we get needs to be handled by frontend 
*/
export const signup = user => {
  return fetch(`${API}/signup`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json"
    },
    body: JSON.stringify(user)
  })
    .then(response => {
      return response.json();
    })
    .catch(err => console.log(err));
};

export const signin = user => {
  return fetch(`${API}/signin`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json"
    },
    body: JSON.stringify(user)
  })
    .then(response => {
      return response.json();
    })
    .catch(err => console.log(err));
};

//for keeping user continuously signed in browser dont understand json response after signin so we check it using window and set the
//jsonwebtoken jwt 
export const authenticate = (data, next) => {
  if (typeof window !== "undefined") {
    localStorage.setItem("jwt", JSON.stringify(data));
    next();
  }
};

//in signout we just need to access this jwt here and remove it
//if have an access of window object that means it is not undefined for us and we are using next means signout is a middleware here 
//why we use next because it allows us do include/inject a call back just after this middleware is done
//here once user is signed out we want to redirect user to home page or signin page using callback
export const signout = next => {
  if (typeof window !== "undefined") { 
    localStorage.removeItem("jwt");
    next();

    return fetch(`${API}/signout`, {
      method: "GET"
    })
      .then(response => console.log("signout success"))
      .catch(err => console.log(err));
  }
};
//where to store the data of form before we submit it to the DB - state
//when somebody types something in form and we want to get what exactly he us typing - Handlechange
//to validate user is signed in or not
export const isAutheticated = () => {
  if (typeof window == "undefined") {
    return false;
  }
  if (localStorage.getItem("jwt")) {
    return JSON.parse(localStorage.getItem("jwt"));
  } else {
    return false;
  }
};
