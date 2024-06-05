"use client";

import React, { useState, useEffect } from "react";
import ImageUploaddbm from "@/components/FormHelpers/ImageUploadBDmb";
import { setupAxiosInterceptors } from './axiosSetup';

const Page = ({ params, searchParams }) => {
  const [uploadResult, setUploadResult] = useState(null);
  const [uploadError, setUploadError] = useState(null);

  useEffect(() => {
    setupAxiosInterceptors(setUploadResult, setUploadError);
  }, []);

  return (
    <div>
      <ImageUploaddbm /> {/* Client-side component */}
      {uploadResult && (
        <div>
          <h3>Upload Result:</h3>
          <pre>{JSON.stringify(uploadResult, null, 2)}</pre>
        </div>
      )}
      {uploadError && (
        <div>
          <h3>Upload Error:</h3>
          <pre>{JSON.stringify(uploadError, null, 2)}</pre>
        </div>
      )}
    </div>
  );
};

export default Page;


