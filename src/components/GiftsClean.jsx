export const GiftsClean = ({ theme, valueGif }) => {
  return (
    <div className="container-gifts-clean">
      <h3 className={!theme && "light-losiento"}>
        lo siento, no sé encontró nada <span>{valueGif}</span>
      </h3>
      <img src="/images/vision.svg" alt="" />
    </div>
  );
};
