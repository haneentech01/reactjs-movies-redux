import React from "react";
import { Container, Col, Row } from "react-bootstrap";
import logo from "../images/logo (1).png";
import { useDispatch } from "react-redux";
import { getAllMovie, getMovieSearch } from "../redux/actions/movieAction";

const NavBar = () => {
  const onSearch = (word) => {
    search(word);
  };

  const dispatch = useDispatch();

  const search = async (word) => {
    if (word === "") {
      dispatch(getAllMovie());
    } else {
      dispatch(getMovieSearch());
    }
  };

  return (
    <div className="nav-style w-100">
      <Container>
        <Row className="pt-2 ">
          <Col xs="2" lg="1">
            <a href="/">
              <img className="logo" src={logo} alt="logoPic" />
            </a>
          </Col>
          <Col xs="10" lg="11" className=" d-flex align-items-center">
            <div className="search w-100">
              <input
                onChange={(e) => onSearch(e.target.value)}
                type="text"
                className="form-control"
                placeholder="ابحث"
              />

              {/* <i className="fa fa-search"></i> */}
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default NavBar;
