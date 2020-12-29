import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { authServices } from "../services/auth.services";

const Home = (props) => {
  return (
    <div>
      <h1>Home page</h1>
      {props.user ? (
        <div>
          <button onClick={authServices.logout}>Logout</button>
        </div>
      ) : (
        <div>
          <Link to="/login">Login</Link>
          <Link to="/register">Signup</Link>
        </div>
      )}
    </div>
  );
};

function mapStateToProps(state) {
  return {
    user: state.auth.user,
  };
}

export default connect(mapStateToProps)(Home);
