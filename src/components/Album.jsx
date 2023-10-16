import React from "react";
import style from "./style.css";
import AlbumName from "./AlbumName";
import ArtistName from "./ArtistName";
import CoverImage from "./CoverImage";
import HeartIcon from "./HeartIcon";
import DotIcon from "./DotIcon";
import PlayIcon from "./PlayIcon";

export default function Album({ albumData }) {
  return (
    <div className="album">
      <div className="cover-wrapper">
        <CoverImage imageUrl={albumData.images[0].url} />
      </div>
      {/* <div className="icons"></div> */}
      <div className="album-info">
        {/* <PlayIcon />
        <DotIcon />
        <HeartIcon /> */}
        <a
          href={albumData.external_urls.spotify}
          target="_blank"
          rel="noopener noreferrer"
        >
          <AlbumName
            name={albumData.name}
            externalUrl={albumData.external_urls.spotify}
          />
        </a>
        <ArtistName artists={albumData.artists} />
      </div>
      <div className="artist-name"></div>
    </div>
  );
}
