"use client";

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ReactPlayer from 'react-player';


const VideoPlayer = ({ videoId, userId, apiKey }) => {
  const [otp, setOtp] = useState(null);
  const [sessionId, setSessionId] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isOpen, setIsOpen] = useState(false); // State to control modal visibility
 useEffect(() => {
    const fetchSession = async () => {
      console.log("Fetching session...");
      try {
        const response = await axios.get(
          'https://app.bmdrm.com/api/Sessions',
          {
            params: {
              videoId: '5911fd7d-7ba4-4273-9426-48eb0580dbc5',
              userId: 'ahmed',
            },
            headers: {
              'Accept': 'text/plain',
              'API-KEY': 'd1b65fe7-81f6-4c82-9533-3ebf1f80f51c',
            },
          }
        );
  
        console.log("Session fetched:", response.data);
  
        const { otp: newOtp, sessionId: newSessionId } = response.data;
  
        // Set OTP and Session ID only if they're new or different
        if (newOtp !== otp || newSessionId !== sessionId) {
          setOtp(newOtp);
          setSessionId(newSessionId);
        }
  
        setLoading(false);
      } catch (err) {
        console.error("Error fetching session:", err);
        setError(err);
        setLoading(false);
      }
    };
    console.log("Component mounted, fetching session...");
    fetchSession(); // Fetch the session only once on component mount
  }, []); // No dependencies, to avoid re-renders

  if (loading) {
    return <p>Loading...</p>; // While fetching is in progress
  }

  if (error) {
    return (
      <div>
        <p>Error loading video: {error.message}</p>
        <button onClick={fetchSession}>Try Again</button> {/* Option to refresh */}
      </div>
    );
  }
 
  // Generate the video URL using the OTP and sessionId
  const videoUrl = otp && sessionId ? `https://player.bmdrm.com/Player?otp=${otp}&sessionId=${sessionId}` : null;
  console.log("Generated video URL:", videoUrl); // Log the generated video URL
  
  const handleButtonClick = () => {
    if (videoUrl) {
      window.open(videoUrl, '_blank'); // Open in a new tab
    }
  }
  return (
    <div>
      <h1>Video Player</h1>
      <button onClick={handleButtonClick}>Open Video</button> {/* Button to open the video */}
      <iframe src= {videoUrl}   allowFullScreen    allow="encrypted-media">      </iframe>  
      {videoUrl && (
				<ReactPlayer
					url={videoUrl}
					controls
					playing={true}
					width="100%"
					height="100%"
           allow = "encrypted-media"
				/>
			)}
   </div>
  );
};

export default VideoPlayer;



