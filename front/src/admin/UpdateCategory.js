import React, { useState, useEffect } from "react";
import Base from "../desktopCore/Base";
import {
    getaCategory,
    updateCategory
  } from "./helper/adminapicall";
import { Link } from "react-router-dom";
import { isAutheticated } from "../auth/helper/index";

const UpdateCategory = ({ match }) => {

const { user, token } = isAutheticated();

const [name, setName] = useState("");
//const [error, setError] = useState(false);
//const [success, setSuccess] = useState(false);

const preload = categoryId => {
    getaCategory(categoryId).then(data => {
      if (data.error) {
        setName({ name, error: data.error });
      } else {
        setName({
          name: data.name,
        });
      }
    });
  };
  useEffect(() => {
    preload(match.params.categoryId);
  }, []);


  const onSubmit = event => {
    event.preventDefault();
    setName(name);

    updateCategory(match.params.categoryId, user._id, token, {name}).then(
      data => {
        if (data.error) {
          setName({ name, error: data.error });
        } else {
          setName(name);
        }
      }
    );
  };
  const handleChange = name => event => {
    setName({ name, [name]: event.target.value });
  };
  const createCategoryForm = () => (
    <form>
      <div className="form-group">
        <input
          onChange={handleChange("name")}
          name="photo"
          className="form-control"
          placeholder="Name"
          value={name}
        />
      </div>

      <button
        type="submit"
        onClick={onSubmit}
        className="btn btn-outline-success mb-3"
      >
        Update Category
      </button>
    </form>
  );

    return (
        <Base 
            title="Update Category" 
            description="Update category here">
            <Link to="/admin/dashboard" className="btn btn-md btn-dark mb-3">
        Admin Home
      </Link>
      <div className="row bg-dark text-white rounded">
        <div className="col-md-8 offset-md-2">
          {createCategoryForm()}
        </div>
      </div>
        </Base>
            
        
    )
};

export default UpdateCategory;
