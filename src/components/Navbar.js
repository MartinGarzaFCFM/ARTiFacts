import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import { Link } from "react-router-dom";

import colors from "./Colors";

export default function Navbar() {
  return (
    <div>
      <nav class="navbar bg-body-tertiary">
        <div
          class="container-fluid justify-content-space-between"
          style={{
            backgroundColor: colors.darkBlue,
          }}
        >
          <a class="navbar-brand" href="#" style={{ color: colors.white }}>
            <img
              src="./ARTiFacts_Logo.png"
              alt="Logo"
              height="50"
              class="d-inline-block align-text-middle"
            ></img>
            ARTiFacts
          </a>
          <form class="d-flex" role="search">
            <input
              class="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button
              class="btn btn-outline-success"
              type="submit"
              style={{ color: colors.white }}
            >
              Search
            </button>
          </form>
          <button class="btn btn-primary" type="submit">
            {" "}
            <Link to="/login">Entrar</Link>
          </button>
        </div>
      </nav>
    </div>
  );
}
