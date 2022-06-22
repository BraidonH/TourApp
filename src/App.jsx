import { useState, useEffect, createPortal } from "react";
import Tours from "./Tours";
import Loading from "./Loading";
import ReservedTours from "./ReservedTours";
import logo from "./logo.svg";
import "./App.css";

//api made by John Smilga
const url = "https://course-api.com/react-tours-project";

function App() {
  const [loading, setLoading] = useState(true);
  const [viewReserved, setViewReserved] = useState(false);
  const [tours, setTours] = useState([]);
  const [myTours, setMyTours] = useState([]);

  //a function that will be passed down to the child Tours Component that will remove the specific tour based on its id prop
  const removeTours = (id) => {
    const newTours = tours.filter((tour) => tour.id != id);
    setTours(newTours);
  };

  const reserveTours = (id) => {
    const reserve = tours.filter((tour) => tour.id === id);

    setMyTours((prev) => [...prev, reserve]);
  };

  //fetches api data containing tour locations
  const fetchTours = async () => {
    try {
      const response = await fetch(url);
      const tours = await response.json();
      setTours(tours);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  //fetches api using function on component load once with empty dependency array
  useEffect(() => {
    //artificial load time wait
    setTimeout(() => {
      fetchTours();
    }, 2000);
  }, []);

  {
    //ternary operator
    return loading && tours ? (
      <div className="App">
        <main>
          <Loading />
        </main>
      </div>
    ) : tours.length === 0 ? (
      <main>
        <div className="no-tours-container">
          <button
            className="btn btn-reserved"
            onClick={() => setViewReserved(!viewReserved)}
          >
            reserved tours
          </button>
          <h1 className="tours-title"> Our Tours</h1>
          <h2>no current tours</h2>
          <button className="btn btn-reload" onClick={fetchTours}>
            reload tours
          </button>
        </div>
      </main>
    ) : (
      <div className="App">
        <main className="tours-container">
          <button
            className="btn btn-reserved"
            onClick={() => setViewReserved(!viewReserved)}
          >
            reserved tours
          </button>
          <ReservedTours viewReserved={viewReserved} myTours={myTours} />
          <Tours
            tours={tours}
            removeTours={removeTours}
            reserveTours={reserveTours}
          />
        </main>
      </div>
    );
  }
}

export default App;
