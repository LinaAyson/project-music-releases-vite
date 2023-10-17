import React from "react";

export default function AlbumName({ name, externalUrl }) {
  return (
    <div className="album-name">
      <a href={externalUrl} target="_blank" rel="noopener noreferrer">
        <h2>{name}</h2>
      </a>
    </div>
  );
}
