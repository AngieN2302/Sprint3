import React, { useEffect, useState } from "react";
import { Header } from "./Header";
import { Filter } from "./Filter";
import "../index.css";
import { Gifts } from "./Gifts";
import { Autocomp } from "./Autocomp";
import { GiftsClean } from "./GiftsClean";

export const App = () => {
  const [tema, setTema] = useState(false);

  const [value, setValue] = useState("");

  const [gif, setgif] = useState([]);
  // const [Change, setChange] = useState(initialState);

  const [valgif, setValgif] = useState("trending");

  const llave = "LwojdryQxFrxb6KfzEOOo02RZ1HRbixR";

  const [suggestions, setSuggestions] = useState([]);

  useEffect(() => {
    fetch(
      `https://api.giphy.com/v1/gifs/search?api_key=${llave}&q=${valgif}&limit=15#`
    )
      .then((rta) => rta.json())
      .then((data) => {
        setgif(data.data);
      });
    console.log(gif);
  }, [valgif]);

  useEffect(() => {
    fetch(
      `https://api.giphy.com/v1/gifs/search/tags?api_key=${llave}&q=${value}&limit=5#`
    )
      .then((rta) => rta.json())
      .then((data) => {
        setSuggestions(data.data);
      });

    console.log(gif);
  }, [value]);

  const handleChangeBut = () => {
    setTema(!tema);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setValgif(value);
    setValue("");
  };

  const handleInputChange = (e) => {
    setValue(e.target.value);
  };

  const handleGetvalue = (word) => {
    setValgif(word);
    setSuggestions([]);
  };

  return (
    <div className={tema ? "Fondo" : ""}>
      <Header tema={tema} handleChangeBut={handleChangeBut} />

      <Filter
        tema={tema}
        value={value}
        handleSubmit={handleSubmit}
        handleInputChange={handleInputChange}
      />

      <Autocomp
        theme={tema}
        dataAuto={suggestions}
        handleGetvalue={handleGetvalue}
      />

      <Gifts tema={tema} data={gif} />

      {console.log(gif)}

      {gif.length === 0 && <GiftsClean theme={tema} valueGif={valgif} />}

      {/* {dataAuto.length > 0 && (
        <Autocomp
          dataAuto={dataAuto}
          theme={tema}
          handleGetvalue={handleGetvalue}
        />
      )} */}
    </div>
  );
};
