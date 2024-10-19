import React from "react";
import { useCustomization } from "../contexts/Customization";

const Configurator = () => {
  const {
    material,
    setMaterial,
    legs,
    setLegs,
    chairColor,
    setChairColor,
    cushionColor,
    setCushionColor,
    chairColors,
    cushionColors
  } = useCustomization();

  return (
    <div className="configurator">
      <section className="configurator__section">
        <h2 className="configurator__title">Chair material</h2>
        <div className="configurator__values">
          <div
            className={`item ${material === "leather" ? "item--active" : ""}`}
            onClick={() => setMaterial("leather")}
          >
            <div className="item__label">Leather</div>
          </div>
          <div
            className={`item ${material === "fabric" ? "item--active" : ""}`}
            onClick={() => setMaterial("fabric")}
          >
            <div className="item__label">Fabric</div>
          </div>
        </div>
      </section>
      <section className="configurator__section">
        <h2 className="configurator__title">Legs</h2>
        <div className="configurator__values">
          <div
            className={`item ${legs === 1 ? "item--active" : ""}`}
            onClick={() => setLegs(1)}
          >
            <div className="item__label">Modern</div>
          </div>
          <div
            className={`item ${legs === 2 ? "item--active" : ""}`}
            onClick={() => setLegs(2)}
          >
            <div className="item__label">Classic</div>
          </div>
        </div>
      </section>
      <section className="configurator__section">
        <h2 className="configurator__title">Chair color</h2>
        <div className="configurator__values">
          {chairColors.map((item, index) => (
            <div
              className={`item ${
                item.color === chairColor.color ? "item--active" : ""
              }`}
              onClick={() => setChairColor(item)}
              key={index}
            >
              <div
                className="item__dot"
                style={{ backgroundColor: item.color }}
              />
              <div className="item__label">{item.name}</div>
            </div>
          ))}
        </div>
      </section>
      <section className="configurator__section">
        <h2 className="configurator__title">Cushion color</h2>
        <div className="configurator__values">
          {cushionColors.map((item, index) => (
            <div
              className={`item ${
                item.color === cushionColor.color ? "item--active" : ""
              }`}
              onClick={() => setCushionColor(item)}
              key={index}
            >
              <div
                className="item__dot"
                style={{ backgroundColor: item.color }}
              />
              <div className="item__label">{item.name}</div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Configurator;
