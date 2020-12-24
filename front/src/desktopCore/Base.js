import React from "react";
import Menu from "./Menu";
import "./Base.css";

//we are creating variables in Base
//This base component will act as an enclosing parent for children. Whatever insert in <Base>badabhabsdabksd </Base> will act as children.
//This variables title etc come in really handy while reusing in Base component we just need to override it. 
const Base = ({
  title = "My Title",
  description = "My desription",
  className = "bg-blue text-white p-4",
  children
}) => (
  <div>
    <Menu />
    <div className="container-fluid">
      <div className="jumbotron background text-dark text-center">
        <h2 className="display-4">{title}</h2>
        <p className="lead">{description}</p>
      </div>
      <div className={className}>{children}</div>
    </div>
    <footer className="footer bg-blue mt-5 py-3">
      <div className="container-fluid bg-dark text-white text-center py-3">
        <h4>If you got any questions, feel free to reach out!</h4>
        <button className="btn btn-danger btn-lg">Contact Us</button>
      </div>
      <div className="container">
        <span className="text-muted">
          &copy; <span className="text-secondary">335BAZAAR</span> 2020-Present
        </span>
      </div>
    </footer>
  </div>
);

export default Base;