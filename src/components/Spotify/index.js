import React from "react";

const Spotify = () => {
  return (
    <iframe
      title="Spotify"
      style={{ borderRadius: "10px" }}
      src="https://open.spotify.com/embed/playlist/6MRyrt5jmW3wugGusg7vZC?utm"
      width="100%"
      height="152"
      allowFullScreen=""
      allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
      loading="lazy"
    ></iframe>
  );
};

export default Spotify;
