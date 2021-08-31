import React, { useState } from "react";
import ProcessBar from "./Process";

const UploadForm = () => {
  const [file, setFile] = useState(null);
  const [error, setError] = useState(null);

  const types = ["image/png", "image/jpeg"];

  const handleChange = (e) => {
    let selected = e.target.files[0];
    if (selected && types.includes(selected.type)) {
      // todo: select.type loai nay la loai gi
      console.log(selected);
      setFile(selected);
      setError("");
    } else {
      setFile(null);
      setError("Please select an image file img or jpg 🚫");
    }
  };

  return (
    <form className="form">
      <label className="label">
        <input type="file" onChange={handleChange} className="input" />
        <span className="span">+</span>
      </label>
      <div className="output">
        {error && <div className="error">{error}</div>}
        {file && <div>{file.name}</div>}
        {file && <ProcessBar file={file} setFile={setFile} />}
      </div>
    </form>
  );
};

export default UploadForm;
