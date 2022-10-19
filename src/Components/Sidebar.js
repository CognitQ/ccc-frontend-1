import React, { useState } from "react";
import { Home } from "./Home";

export const Sidebar = () => {
  const [deployment, setDeployment] = useState(true);
  return (
    <div>
      <div class="container-fluid">
        <div class="row flex-nowrap">
          <div class="col-auto col-md-3 col-xl-2 px-sm-2 px-0 bg-dark">
            <div class="d-flex flex-column align-items-center align-items-sm-start px-3 pt-2 text-white min-vh-100">
              <a
                href="/"
                class="d-flex align-items-center pb-3 mb-md-0 me-md-auto text-white text-decoration-none"
              >
                <span class="fs-5 d-none d-sm-inline">Dashbord</span>
              </a>
              <ul
                class="nav nav-pills flex-column mb-sm-auto mb-0 align-items-center align-items-sm-start"
                id="menu"
              >
                <li class="nav-item">
                  <button
                    class="nav-link align-middle px-0"
                    onClick={() => setDeployment(true)}
                  >
                    <i class="fs-4 bi-house"></i>{" "}
                    <span class="ms-1 d-none d-sm-inline">Deployment</span>
                  </button>
                </li>

                <li>
                  <button
                    class="nav-link px-0 align-middle"
                    onClick={() => setDeployment(false)}
                  >
                    <i class="fs-4 bi-people"></i>{" "}
                    <span class="ms-1 d-none d-sm-inline">Demonset</span>{" "}
                  </button>
                </li>
              </ul>
              <hr />
            </div>
          </div>
          <div class="col py-3">
            <Home show={deployment} />
          </div>
        </div>
      </div>
    </div>
  );
};