"use client";
import axios from "axios";
import { useEffect, useState } from "react";
import React from "react";

const UploadTest = () => {
  const [isUploading, setIsUploading] = useState(false);
  const [file, setFile] = useState(undefined);

  const uploadImages = async function (e) {
    const file = e.target.files?.[0];
    if (file) {
      setIsUploading(true);
      const formData = new FormData();
      formData.append("file", file);
      setFile(file);
      console.log(file);
      // Logging the contents of formData
      for (let [key, value] of formData.entries()) {
        console.log(`${key}: ${value}`);
      }
      try {
        const response = await axios.post(
          "http://localhost:3000/api/upload",
          formData,
          {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          }
        );
        console.log(response.data);
      } catch (error) {
        console.error("Error uploading file:", error);
      }
    }
  };

  return (
    <>
      <form>
        <div className="mt-10 mb-10 flex flex-col items-center justify-evenly">
          <div className="flex items-center ">
            <label className="cursor-pointer bg-gray-100 border border-gray-200 p-14 rounded-full hover:bg-gray-200 text-gray-400 hover:text-gray-500">
              <span className="">Add a photo</span>
              <input onChange={uploadImages} type="file" />
            </label>
          </div>
        </div>
      </form>
    </>
  );
};

export default UploadTest;

/*
async function handleImage(e) {
    console.log([...e.target.files]);
    const files = [...e.target.files];
    const formData = new FormData();

    for (const file of files) {
      console.log(file);
      formData.append("file", file);
    }

    try {
      await axios
        .post("http://localhost:3000/api/upload", formData, {
          headers: { "Content-Type": "multipart/form-data" },
        })
        .then((res) => {
          console.log(res.data);
        });
    } catch (err) {
      console.log(err);
    }
*/
