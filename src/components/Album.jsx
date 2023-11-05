import React from "react";
import style from "./style.css";
import AlbumName from "./AlbumName";
import ArtistName from "./ArtistName";
import CoverImage from "./CoverImage";
import Heart from "./HeartIcon";
import Play from "./PlayIcon";
import Dots from "./DotIcon";

export default function Album({ albumData }) {
  return (
    <div className="album">
    <div className="cover-wrapper">
      <CoverImage imageUrl={albumData.images[0].url} />
      <span className="icons-wrapper">
        <button className="icon">
          <Heart />
        </button>
        <button className="icon-play">
          <Play />
        </button>
        <button className="icon">
          <Dots />
        </button>
      </span>
    </div>

    <div className="album-info">
      <AlbumName
        name={albumData.name}
        externalUrl={albumData.external_urls.spotify}
      />

<div className="artist-name">
  <ArtistName artists={albumData.artists} />
</div>
    </div>
  </div>
  );
}
