import React from "react";
import "./ArtistName.css"; // Import your CSS file

export default function ArtistName({ artists }) {
  return (
    <div className="artist-names">
      {artists.map((artist, index) => (
        <span key={index}>
          <a
            href={artist.external_urls.spotify}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h3>{artist.name}</h3>
          </a>
        </span>
      ))}
    </div>
  );
}
