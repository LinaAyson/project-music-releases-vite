import React from "react";
import Album from "/src/components/Album";
import Header from "./components/Header";
import data from "./data.json";

// console.log(data);

export const App = () => {
  const albumsData = data.albums.items;
  // console.log(data.albums.items);
  return (
    <>
      <Header />
      <div className="album-content">
        {albumsData.map((album, index) => (
          <Album key={index} albumData={album} />
        ))}
      </div>
    </>
  );
};
