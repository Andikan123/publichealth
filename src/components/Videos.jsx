// src/Videos.jsx
import React from "react";
import { courses } from "./Data";


const Videos = () => {
  // Extract videos from all courses
  const allVideos = courses
    .filter((course) => course.video)
    .map((course) => ({
      id: course.id,
      title: course.title,
      description: course.description,
      videoUrl: course.video,
    }));

  return (
    <div className="videos-page">
      <h2 className="videos-title">📹 Course Videos</h2>
      {allVideos.length === 0 ? (
        <p className="no-videos">No videos available</p>
      ) : (
        <div className="videos-grid">
          {allVideos.map((video) => (
            <div key={video.id} className="video-card">
              <h3 className="video-title">{video.title}</h3>
              <p className="video-description">{video.description}</p>
              <div className="video-container">
                <video controls>
                  <source src={video.videoUrl} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Videos;
