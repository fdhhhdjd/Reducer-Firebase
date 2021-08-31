import React, { useEffect, useState } from "react";
import { projectStorage, projectFirestore, timestamp } from "../../firebase";
const UpFirebase = (file) => {
  const [progress, setProgress] = useState(0);
  const [error, setError] = useState(null);
  const [url, setUrl] = useState(null);

  useEffect(() => {
    // references
    const storageRef = projectStorage.ref(file.name);
    const collectionRef = projectFirestore.collection("images"); //tham chieu toi bo suu tap

    storageRef.put(file).on(
      "state_changed",
      (snap) => {
        let percentage = (snap.bytesTransferred / snap.totalBytes) * 100;
        setProgress(percentage); //? chia ty le phan tram thanh processBar
      },
      (err) => {
        setError(err);
      },
      async () => {
        const url = await storageRef.getDownloadURL();
        const createdAt = timestamp(); //! ẩn thoi gian
        //? url:cua hinh nao,createdAt:thoi gian
        await collectionRef.add({ url, createdAt });
        setUrl(url);
      }
    );
  }, [file]);

  return { progress, url, error };
};

export default UpFirebase;
