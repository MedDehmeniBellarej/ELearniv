import VideoPlayer from "@/components/devVideo/VideoPlayer"; // This is the client-side component
import React from "react";

const Page = ({ params, searchParams }) => {
  return (
    <div>
          <VideoPlayer /> {/* Client-side component */}
    </div>
  );
};

export default Page;

