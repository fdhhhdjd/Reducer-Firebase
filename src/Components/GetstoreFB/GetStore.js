import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { firebaseGet } from "../../firebase";
const GetStore = () => {
  const [book, setBook] = useState([]);
  const [loading, setLoading] = useState(false);

  const ref = firebaseGet.firestore().collection("Sach");
  console.log("ref", ref);
  const getBook = () => {
    setLoading(true);
    ref.onSnapshot((item) => {
      const items = [];
      item.forEach((doc) => {
        items.push(doc.data());
      });
      setLoading(false);
      setBook(items);
    });
  };
  useEffect(() => {
    getBook();
  }, []);
  if (loading) {
    return <div>...Loading</div>;
  }
  return (
    <>
      <div className="row mt-3  ">
        {book.map((item) => (
          <>
            <div className="col-sm-6">
              <div className="card">
                <div className="card-body">
                  <p className="card-text">Stt:{item.id}</p>
                  <h5 className="card-title">Môn học:{item.title}</h5>

                  <p className="card-text">Tác giả: {item.author}</p>
                  <p className="card-text">Trích Dẫn:{item.quote}</p>
                  <Link to="/" className="btn btn-primary">
                    Back to home
                  </Link>
                </div>
              </div>
            </div>
          </>
        ))}
      </div>
    </>
  );
};

export default GetStore;
