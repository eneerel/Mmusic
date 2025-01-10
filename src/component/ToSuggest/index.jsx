import React from "react";
import "./style.scss";

const Suggest = () => {
  const suggestions = [
    { title: "Song 1", image: "/image/sanalbolgoh6.png", color: "#614723" },
    { title: "Song 2", image: "/image/sanalbolgoh1.png", color: "#4B322C" },
    { title: "Song 3", image: "/image/sanalbolgoh2.png", color: "#2C2C2C" },
    { title: "Song 4", image: "/image/sanalbolgoh3.png", color: "#9F6546" },
    { title: "Song 5", image: "/image/sanalbolgoh4.png", color: "#5A0208" },
    { title: "Song 6", image: "/image/sanalbolgoh5.png", color: "#7C4D14" },
  ];

  return (
    <div className="container">
      <div>
        <h2>Санал болгох</h2>
        <hr />
      </div>
      <div className="suggest">
        {suggestions.map((item, index) => (
          <div
            key={index}
            className="suggest-item"
            style={{ backgroundColor: item.color }}
          >
            <img
              src={process.env.PUBLIC_URL + item.image}
              alt={item.title}
              className="suggest-img"
            />
            <div className="suggest-title">{item.title}</div>
          </div>
        ))}
      </div>
     </div>
  );
};

export default Suggest;
