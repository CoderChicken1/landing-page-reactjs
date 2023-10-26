import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import "./Dashboard.css";

const Dashboard = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState({});

  useEffect(() => {
    if (
      localStorage.getItem("token") == "" ||
      localStorage.getItem("token") == null
    ) {
      navigate("/");
    } else {
      getUser();
    }
  }, []);

  const getUser = () => {
    axios
      .get("/api/user", {
        headers: { Authorization: "Bearer " + localStorage.getItem("token") },
      })
      .then((r) => {
        setUser(r.data);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  const logoutAction = () => {
    axios
      .post(
        "/api/logout",
        {},
        {
          headers: { Authorization: "Bearer " + localStorage.getItem("token") },
        }
      )
      .then((r) => {
        localStorage.setItem("token", "");
        navigate("/");
      })
      .catch((e) => {
        console.log(e);
      });
  };
  return (
    <div className="dashboard">
      <div className="dashboard__header">
        <h1>Dashboard</h1>
        <nav>
          <ul>
            <li>
              <a onClick={() => logoutAction()} aria-current="page" href="#">
                Logout
              </a>
            </li>
          </ul>
        </nav>
      </div>
      <div className="dashboard__content">
        <h2 className="welcome-message">Welcome, {user.name}!</h2>
        <button className="btn btn__blue">
          <Link
            to="/welcome"
            style={{ textDecoration: "none", color: "inherit" }}
          >
            Go to Page
          </Link>
        </button>
      </div>
    </div>
  );
};

export default Dashboard;
