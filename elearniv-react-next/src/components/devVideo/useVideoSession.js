import { useEffect, useState } from 'react';
import axios from 'axios';

export const useVideoSession = (videoId, userId, apiKey) => {
  const [videoUrl, setVideoUrl] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchSession = async () => {
    try {
      setLoading(true); // Start loading state
  
      const response = await axios.get(
        'https://app.bmdrm.com/api/Sessions',
        {
          params: {
            videoId: '5911fd7d-7ba4-4273-9426-48eb0580dbc5',
            userId: 'ahmed',
          },
          headers: {
            'Accept': 'text/plain', // Ensure the correct content type
            'API-KEY': 'd1b65fe7-81f6-4c82-9533-3ebf1f80f51c', // Your API key
          },
        }
      );
  
      const { otp, sessionId } = response.data;
      const videoUrl = `https://player.bmdrm.com/Player?otp=${otp}&sessionId=${sessionId}`;
      setVideoUrl(videoUrl);
      setLoading(false);
    } catch (err) {
      setError(err);
      setLoading(false);
    }
  }; 

  useEffect(() => {
    fetchSession(); // Fetch session when the hook is used
  }, []); // No dependency changes, so it only runs once

  return { videoUrl, loading, error };
};
