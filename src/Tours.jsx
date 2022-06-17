import React from "react";
import Tour from "./Tour";

export default function Tours({ tours, removeTours, reserveTours }) {
  return (
    <div>
      <h1 className="tours-title"> Our Tours</h1>
      {tours.map((tour) => {
        return (
          <Tour
            key={tour.id}
            {...tour}
            removeTours={removeTours}
            reserveTours={reserveTours}
          />
        );
      })}
    </div>
  );
}
