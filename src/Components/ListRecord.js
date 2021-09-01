import React, { useEffect, useState, useContext } from "react";
import { firebaseDb } from "../firebase";
import { Link, useParams } from "react-router-dom";
import { isEmpty } from "lodash";
import { ThemeContext } from "../useContext/ToggleTheme";
const ListRecord = () => {
  const [data, setData] = useState({});
  useEffect(() => {
    firebaseDb.child("information customer").on("value", (snapshot) => {
      if (snapshot.val() !== null) {
        setData({
          ...snapshot.val(),
        });
      } else {
        snapshot({});
      }
    });
  }, []);
  const onDelete = (id) => {
    if (window.confirm("Bạn có chắc chắn muốn xóa ❌")) {
      firebaseDb.child(`information customer/${id}`).remove((err) => {
        if (err) {
          console.log(err);
        }
      });
    }
  };
  const { theme } = useContext(ThemeContext);
  const { light, dark, common, isFlag } = theme;
  const themeStyle = { ...(isFlag ? dark : light), ...common };
  return (
    <>
      <div className="container-fluid mt-5">
        <div className="row">
          <div className="col-lg-12">
            <div className="jumbotron">
              <h1 className="display-2">Information customer 🛂</h1>
            </div>
            <table
              className="table table-bordered table-striped"
              style={themeStyle}
            >
              <thead className="thead-dark">
                <tr>
                  <th scope="col">No. 🛑</th>
                  <th scope="col">Name 💭</th>
                  <th scope="col">Mobile 📲</th>
                  <th scope="col">Email 📧</th>
                  <th scope="col">Address 📗</th>
                  <th scope="col">Action</th>
                </tr>
              </thead>
              <tbody>
                {Object.keys(data).map((id, index) => {
                  return (
                    <tr key={id}>
                      <th scope="row">{index + 1}</th>
                      <td>{data[id].fullName}</td>
                      <td>{data[id].mobile}</td>
                      <td>{data[id].email}</td>
                      <td>{data[id].address}</td>
                      <td>
                        <Link to={`/update/${id}`}>
                          <p className="btn text-primary">
                            <i className="fas fa-pencil-alt" />
                          </p>
                        </Link>

                        <p
                          className="btn text-danger"
                          onClick={() => onDelete(id)}
                        >
                          <i className="fas fa-trash-alt" />
                        </p>
                        <Link to={`/view/${id}`}>
                          <p className="btn text-info">
                            <i className="fas fa-eye" />
                          </p>
                        </Link>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default ListRecord;
