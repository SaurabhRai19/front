import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./core/Home";
import Signin from "./user/Signin";
import Signup from "./user/Signup";
import Shop from "./core/Shop";
import User from "./core/User";
import Cart from "./core/Cart";
import Room from "./core/Room";
import Qrscan from "./core/Qrscan";
import Register from "./core/Register";
import Login from "./core/Login";
import Productdetail from "./core/Productdetail";
import AdminRoute from "./auth/helper/AdminRoutes";
import PrivateRoute from "./auth/helper/PrivateRoutes";
import UserDashBoard from "./user/UserDashBoard";
import AdminDashBoard from "./user/AdminDashBoard";
import AddCategory from "./admin/AddCategory";
import ManageCategories from "./admin/ManageCategories";
import AddProduct from "./admin/AddProduct";
import ManageProducts from "./admin/ManageProducts";
import UpdateProduct from "./admin/UpdateProduct";
import UpdateCategory from "./admin/UpdateCategory";
const Routes = () => {
    return(
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/signin" exact component={Signin} />
                <Route path="/signup" exact component={Signup} />
                <Route path="/shop" exact component={Shop} />
                <Route path="/user" exact component={User} />
                <Route path="/qrscan" exact component={Qrscan}/> 
                <Route path="/cart" exact component={Cart} />
                <Route path="/login" exact component={Login} />
                <Route path="/register" exact component={Register}/>
                <Route path="/product/:productId" exact component={Productdetail}/>
                <Route path="/share/:roomId" exact component={Room} />
                <PrivateRoute path="/user/dashboard" exact component={UserDashBoard} />
        <AdminRoute path="/admin/dashboard" exact component={AdminDashBoard} />
        <AdminRoute
          path="/admin/create/category"
          exact
          component={AddCategory}
        />
        <AdminRoute
          path="/admin/categories"
          exact
          component={ManageCategories}
        />
        <AdminRoute 
          path="/admin/category/update/:categoryId"
          exact 
          component={UpdateCategory}
        />
        <AdminRoute path="/admin/create/product" exact component={AddProduct} />

        <AdminRoute path="/admin/products" exact component={ManageProducts} />
        <AdminRoute
          path="/admin/product/update/:productId"
          exact
          component={UpdateProduct}
        />
        
            </Switch>
        </BrowserRouter>
    );
}

export default Routes;