import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { firebaseDb } from "../firebase";
const View = () => {
  const [data, setData] = useState({});
  const currentId = useParams();
  const { id } = currentId;
  useEffect(() => {
    firebaseDb.child("information customer").on("value", (snapshot) => {
      if (snapshot.val() !== null) {
        setData({
          ...snapshot.val(),
        });
      } else {
        setData({});
      }
    });
  }, [id]);
  return (
    <div className="container mt-5">
      {Object.keys(data).map((userId) => {
        if (userId === id) {
          return (
            <div class="card">
              <div class="card-header lead">User Detail</div>
              <div class="card-body">
                <p class="card-text">Name: {data[id].fullName}</p>
                <p class="card-text">Mobile: {data[id].mobile}</p>
                <p class="card-text">Email: {data[id].email}</p>
                <p class="card-text">Address: {data[id].address}</p>
                <Link to="/">
                  <a className="btn btn-info">Go Back</a>
                </Link>
              </div>
            </div>
          );
        }
      })}
    </div>
  );
};

export default View;
