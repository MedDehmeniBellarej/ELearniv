"use client";

import React, { useState } from "react";
import { BmdrmVideoUploader,useProgressListener } from 'video_uploader_bmdrm'
import axios from 'axios';



const VideoUploaderComponent = () => {
  const [uploadResult, setUploadResult] = useState(null);
  const [uploadError, setUploadError] = useState(null);
  const iconStyle = {
    width: '18px',  // Adjust the size as needed
    height: '18px'
  };

  const inProgressVideo = useProgressListener()
  const videosIds = inProgressVideo.map((video) => video.uploadJobId)
  console.log("progress  : " , inProgressVideo )
  console.log("videosIds  : " , videosIds )
 

  return (
    <div>
      <BmdrmVideoUploader
        bmdrmUploader={{
          icon: <img src='/images/upload.png' alt='test'  style={iconStyle} />,
          deleteIcon: <img src='/images/cancel.png' alt='test'  style={iconStyle} />,
          videoIcon: <img src='/images/video.png' alt='test'  style={iconStyle} />,
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
            headerFontColor: 'red',
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
