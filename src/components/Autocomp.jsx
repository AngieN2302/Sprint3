import React from "react";

export const Autocomp = ({ dataAuto, theme, handleGetvalue }) => {
  return (
    <div className="container-autocomp">
      <ul
        className={theme ? "autocomp autocomp-dark" : "autocom autocom-light"}
      >
        {dataAuto.map((data) => {
          return (
            <li
              className={
                theme
                  ? "suggestions suggestions-dark"
                  : "suggestions suggestions-light"
              }
              onClick={() => {
                handleGetvalue(data.name);
              }}
            >
              {data.name}
            </li>
          );
        })}
      </ul>
    </div>
  );
};
