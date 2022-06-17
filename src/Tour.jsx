import { React, Fragment, useState } from "react";

export default function Tour({
  id,
  name,
  image,
  info,
  price,
  removeTours,
  reserveTours,
}) {
  const [readMore, setReadMore] = useState(false);

  return (
    <article className="tour-container">
      <footer>
        <img className="tour-image" src={image} alt={name} />
        <h2 classname="tour-title">{name}</h2>
        <article className="tour-info">
          <div>
            {readMore ? info : `${info.substring(0, 200)}...`}
            <button
              className="read-more"
              onClick={() => setReadMore(!readMore)}
            >
              {readMore ? "show less" : "read more"}
            </button>
          </div>
        </article>
      </footer>
      <div>
        <button
          className="btn btn-delete"
          onClick={() => {
            removeTours(id);
          }}
        >
          not interested
        </button>
        <button
          className="btn"
          onClick={() => {
            reserveTours(id);
          }}
        >
          reserve
        </button>
      </div>
      <section>
        <p>${price}</p>
      </section>
    </article>
  );
}
