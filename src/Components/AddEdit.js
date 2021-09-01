import React, { useState, useEffect, useContext } from "react";
import { firebaseDb } from "../firebase";
import { useParams, useHistory, Link } from "react-router-dom";
import { isEmpty } from "lodash";
const AddEdit = () => {
  const values = {
    fullName: "",
    mobile: "",
    email: "",
    address: "",
  };
  const [initialState, setState] = useState(values);
  const { fullName, mobile, email, address } = initialState;
  const [data, setData] = useState({});
  const history = useHistory();
  const handleInputChange = (e) => {
    let { name, value } = e.target;
    setState({
      ...initialState,
      [name]: value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (isEmpty(id)) {
      firebaseDb.child("information customer").push(initialState, (err) => {
        if (err) {
          console.log(err);
        }
      });
    } else {
      firebaseDb
        .child(`information customer/${id}`)
        .set(initialState, (err) => {
          if (err) {
            console.log(err);
          }
        });
    }
    history.push("/");
  };

  //! edit
  let currentId = useParams();
  const { id } = currentId;
  console.log(currentId);
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
  useEffect(() => {
    if (isEmpty(id)) {
      console.log("initialState", initialState);
      setState({ ...values });
    } else {
      setState({ ...data[id] });
    }
  }, [id, data]);
  return (
    <div className="container mt-5 pt-5">
      <div className="row">
        <div className="col-md-6">
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label className="bmd-label-floating">Name 💭</label>
              <input
                type="text"
                className="form-control"
                name="fullName"
                value={fullName}
                onChange={handleInputChange}
              />
            </div>
            <div className="form-group">
              <label className="bmd-label-floating">Mobile 📲</label>
              <input
                type="number"
                className="form-control"
                name="mobile"
                value={mobile}
                onChange={handleInputChange}
              />
            </div>
            <div className="form-group">
              <label className="bmd-label-floating">Email 📧</label>
              <input
                type="email"
                className="form-control"
                name="email"
                value={email}
                onChange={handleInputChange}
              />
            </div>
            <div className="form-group">
              <label className="bmd-label-floating">Address 📗</label>
              <input
                type="text"
                className="form-control"
                name="address"
                value={address}
                onChange={handleInputChange}
              />
            </div>
            <Link to="/" className="btn btn-danger btn-raised mr-2">
              Cancel 🔙
            </Link>
            <button type="submit" className="btn btn-success btn-raised">
              Submit 📎
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddEdit;
