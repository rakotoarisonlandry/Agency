import React from "react";

function Service() {
  return (
    <React.Fragment>
      <div style={{ textAlign: "center" }}>
        <div
          style={{
            width: "50%", // Largeur de la bordure
            margin: "0 auto", // Centre la bordure horizontalement
            paddingTop: "50px", // Espace supplémentaire en haut du texte
            paddingBottom: "10px", // Espace sous le texte
            position: "relative", // Position relative pour positionner la bordure
          }}
        >
          <h1
            style={{
              fontSize: "32px",
              fontWeight: "bold",
            }}
          >
            Our Best Services
          </h1>
          <div
            style={{
              position: "absolute",
              bottom: "0",
              left: "50%",
              transform: "translateX(-50%)",
              width: "50px", // Largeur de la bordure
              height: "5px", // Hauteur de la bordure
              backgroundColor: "#ca7c56", // Couleur de la bordure
            }}
          ></div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default Service;
