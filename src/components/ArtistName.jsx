import React from "react";

export default function ArtistName({ artists }) {
  return (
    <span className="artist-names">
    {artists.map((artist, index) => (
      <a
        key={index}
        href={artist.external_urls.spotify}
        target="_blank"
        rel="noopener noreferrer"
      >
        <h3>{artist.name}</h3>
      </a>
    ))}
  </span>
  );
}
