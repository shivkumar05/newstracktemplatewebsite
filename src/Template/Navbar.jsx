import axios from "axios";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Navbar = () => {
  const agencyDetails = useSelector((state) => {
    return state.User;
  });

  // console.log(agencyDetails);

  ///////////////////////////////////////get categories///////////////////////////////////////////////////////

  const [categories, setCategory] = useState();
  const getCategories = async () => {
    try {
      const response = await axios.get(
        "http://174.138.101.222:8080/getmastercategories"
      );
      // console.log(response.data.data, "categories");
      setCategory(response.data.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getCategories();
  }, []);

  ///////////////////////////////////////get categories///////////////////////////////////////////////////////

  return (
    <div className="container-fluid p-0 mb-3">
      <nav className="navbar navbar-expand-lg bg-light navbar-light py-2 py-lg-0 px-lg-5 px-sm-1">
        <a href="" className="navbar-brand d-block d-lg-none">
          <h1 className="m-0 display-5 ">
            <span className="text-danger">
              {agencyDetails.publication_name}
            </span>
          </h1>
        </a>
        <button
          type="button"
          className="navbar-toggler"
          data-toggle="collapse"
          data-target="#navbarCollapse"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div
          className="collapse navbar-collapse justify-content-between px-0 px-lg-3"
          id="navbarCollapse"
        >
          <div className="navbar-nav mr-auto py-0">
            <Link
              to={`/${agencyDetails._id}`}
              className="nav"
              style={{ paddingBottom:'1%',
                color: "grey",
                textDecoration: "none",
                paddingTop: "1%",
                marginRight: "20px",
              }}
            >
              Home
            </Link>
            {/* <a href="category.html" className="nav-item nav-link">
              Categories
            </a> */}
            <div style={{ paddingLeft: "0%" }}>
              <a
                href="single.html"
                className="nav-item nav"
                style={{
                  marginRight: "20px",
                  color: "grey",
                  textDecoration: "none",
                  paddingTop: "9%",
                }}
              >
                Single News
              </a>
            </div>
            <div style={{ paddingLeft: "0%" }}>
              <a
                href="contact.html"
                className="nav-item nav"
                style={{
                  marginRight: "20px",
                  color: "grey",
                  textDecoration: "none",
                  paddingTop: "14%",
                }}
              >
                Contact
              </a>
            </div>
            {/* <div  style={{paddingTop:'2%'}}> */}
            {/* <a
                href="#"
                className="nav-link dropdown-toggle"
                data-bs-toggle="dropdown"
              >
                Categories
              </a> */}

            <a style={{ paddingLeft: "0%", paddingTop: "1%" }}>
              {categories &&
                categories.map((item, index) => {
                  return (
                    <Link
                      className="nav-item link"
                      style={{
                        color: "grey",
                        textDecoration: "none",
                        marginRight: "20px",
                      }}
                      to={`/${agencyDetails._id}/Category/${item.categories_Name_Url}`}
                      state={agencyDetails}
                      key={index}
                      // className="nav-link"

                      // className="dropdown-item"
                    >
                      {item.categories_Name_English}
                    </Link>
                  );
                })}
            </a>

            {/* </div> */}
          </div>
          {/* <div
            className="input-group ml-auto"
            style={{ width: "100%", maxWidth: 300 }}
          >
            <input type="text" className="form-control" placeholder="Keyword" />
            <div className="input-group-append">
              <button className="input-group-text text-secondary">
                <i className="fa fa-search" />
              </button>
            </div>
          </div> */}
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
