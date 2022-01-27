import React from "react";

export const Gifts = ({ data, tema }) => {
  return (
    <div className="box-gifs">
      <h1 className="">Resultados de la búsqueda</h1>
      <div className={tema ? "box-gifs-dark" : "box-gifs-light"}>
        {data.map(({ id, url, images }) => {
          return (
            <img
              key={id}
              href={url}
              src={images.fixed_width_downsampled.url}
              alt={id}
            />
          );
        })}
      </div>
    </div>
  );
};
