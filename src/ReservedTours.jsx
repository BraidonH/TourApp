import { React, useEffect, useState } from "react";

export default function ReservedTours({ myTours, viewReserved }) {
  return myTours.length > 0 ? (
    <div
      className="reserved-tour-container"
      style={{ display: viewReserved ? "inline" : "none" }}
    >
      {myTours.map((tour) => {
        for (let reserved of tour) {
          console.log(myTours);
          return (
            <div className="reserved-tour">
              <h2 className="tour-reserved-name">{reserved.name}</h2>
            </div>
          );
        }
      })}
    </div>
  ) : (
    <div
      className="reserved-tour-container"
      style={{ display: viewReserved ? "inline" : "none" }}
    >
      No tours Reserved
    </div>
  );
}
