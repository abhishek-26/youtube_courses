import React from "react";
import { Link } from "react-router-dom";
import { ListGroup } from "reactstrap";

const Menus = () => {
    return (
        <ListGroup>
        <Link 
          className = "list-group-item list-group-item-action"
          to = "/"
          tag="a"
          action
        >
          Home
        </Link>
        <Link 
          className = "list-group-item list-group-item-action"
          to = "/add-course"
          tag= "a"
          action
        >
          Add Course
        </Link>
        <Link 
          className = "list-group-item list-group-item-action"
          to ="/view-course"
          tag="a"
          action
        >
          View Courses
        </Link>
        <Link 
          className = "list-group-item list-group-item-action"
          to="#"
          tag="a"
        >
          About
        </Link>
        <Link 
          className = "list-group-item list-group-item-action"
          to="#"
          tag="a"
        >
          Contact
        </Link>
      </ListGroup>
    );
}

export default Menus;