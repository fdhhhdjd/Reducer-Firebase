import React, { useEffect } from "react";
import { motion } from "framer-motion";
import UpFirebase from "./UpFirebase";
const ProcessBar = ({ file, setFile }) => {
  const { progress, url } = UpFirebase(file);

  useEffect(() => {
    if (url) {
      setFile(null);
    }
  }, [url, setFile]);

  return (
    <motion.div
      className="progress-bar"
      initial={{ width: 0 }}
      animate={{ width: progress + "%" }}
    ></motion.div>
  );
};

export default ProcessBar;
