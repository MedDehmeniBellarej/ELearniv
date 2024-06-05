
"use client";

import React, { useEffect, useState, useCallback } from 'react';
import axios from "axios";

const Player = ({ id: courseId }) => {
    const [otp, setOtp] = useState(null);
    const [sessionId, setSessionId] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
  
    const fetchSession = useCallback(async () => {
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
  
        setOtp(newOtp);
        setSessionId(newSessionId);
        setLoading(false);
      } catch (err) {
        console.error("Error fetching session:", err);
        setError(err);
        setLoading(false);
      }
    }, []);
  
    useEffect(() => {
      console.log("Component mounted, fetching session...");
      fetchSession(); // Fetch the session only once on component mount
    }, [fetchSession]);
  
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
  
    const handleProgress = async () => {
      const data = { videoId: '5911fd7d-7ba4-4273-9426-48eb0580dbc5' }; // Assuming videoId is constant as shown in fetchSession
      await axios.post(`/api/progress/${courseId}`, data);
    };
  
    return (
      <div className="video-content-box" style={{ minHeight: '500px' }}>
        {videoUrl ? (
          <iframe
            title="video"
            
            src={videoUrl}
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            width="100%"
            style={{ minHeight: '600px' }}
          />
        ) : (
          <p>Unable to load video.</p>
        )}
      </div>
    );
  };

  export default Player;