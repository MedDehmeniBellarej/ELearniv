"use client";

import React, { useState } from "react";
import { BmdrmVideoUploader } from 'video_uploader_bmdrm';
import axios from 'axios';



const VideoUploaderComponent = () => {
  const [uploadResult, setUploadResult] = useState(null);
  const [uploadError, setUploadError] = useState(null);


  return (
    <div>
      <BmdrmVideoUploader
        bmdrmUploader={{
          deleteIcon: <img src='' alt='test' />,
          videoIcon: <img src='' alt='test' />,
          btnStyle: {
            background: 'green',
            color: 'white',
            width: '500px'
          },
          style: {
            background: 'white',
            color: 'blue',
            fontSize: '16px',
            fontFamily: 'Arial'
          },
          videoStyle: {
            background: 'white',
            color: 'green',
            fontSize: '22px',
            fontFamily: 'Gill Sans',
            borderColor: 'blue'
          }
        }}
        apiKey={'d1b65fe7-81f6-4c82-9533-3ebf1f80f51c'}
        bmdrmProgressWidget={{
          style: {
            left: 0,
            backgroundColor: 'white',
            headerBackgroundColor: 'black',
            color: 'green',
            headerFontColor: 'white',
            videoIcon: <i className='ri-computer-line text-[30px]' />,
            cancelIcon: <i className='ri-computer-line text-[30px]' />,
            checkIcon: <i className='ri-computer-line text-[30px]' />
          }
        }}
      />
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

export default VideoUploaderComponent;
