import React, { useState, useEffect } from 'react';

import './Stars.scss';

import Spinner from '../../components/Spinner/Spinner';

const fetchPeople = async (id) => {
  const data = await fetch(`https://swapi.dev/api/people/${id}`);
  return await data.json();
};

const fetchPlanet = async (id) => {
  const data = await fetch(`https://swapi.dev/api/planets/${id}`);
  return await data.json();
};

const Stars = () => {
  // Test counter state
  const [counter, setCounter] = useState(0);

  // People state
  const [isLoadingPeople, setIsLoadingPeople] = useState(true);
  const [peopleId, setPeopleId] = useState(1);
  const [people, setPeople] = useState({});

  // Planet state
  const [isLoadingPlanet, setIsLoadingPlanet] = useState(true);
  const [planetId, setPlanetId] = useState(1);
  const [planet, setPlanet] = useState([]);

  // Set test counter state
  const handleCounter = (action) => {
    return () => {
      setCounter((prevState) => {
        return action === '+' ? prevState + 1 : prevState - 1;
      });
    };
  };

  // Set people state
  useEffect(() => {
    setIsLoadingPeople(true);

    fetchPeople(peopleId).then((people) => {
      setIsLoadingPeople(false);
      setPeople(people);
    });
  }, [peopleId]);

  // Set planet state
  useEffect(() => {
    setIsLoadingPlanet(true);

    fetchPlanet(planetId).then((planet) => {
      setIsLoadingPlanet(false);
      setPlanet((prevState) => [...prevState, planet]);
    });
  }, [planetId]);

  return (
    <div className="star-wrap">
      <div className="counter-wrap">
        <p>Test counter</p>
        <button onClick={handleCounter()} disabled={counter === 0}>
          -
        </button>
        <span>{counter}</span>
        <button onClick={handleCounter('+')}>+</button>
      </div>

      {isLoadingPeople ? (
        <Spinner />
      ) : (
        <div className="star-people-wrap">
          <div>
            <h2>{people.name}</h2>
            <p>Birthday: {people.birth_year}</p>
            <p>Gender: {people.gender}</p>
            <p>Hair color: {people.hair_color}</p>
          </div>

          <button
            onClick={() => {
              setPeopleId((prevState) => prevState - 1);
            }}
            disabled={peopleId === 1}
          >
            Prev
          </button>

          <button
            onClick={() => {
              setPeopleId((prevState) => prevState + 1);
            }}
            disabled={peopleId === 10}
          >
            Next
          </button>
        </div>
      )}

      {isLoadingPlanet ? (
        <Spinner />
      ) : (
        <div className="star-planets-wrap">
          <ul>
            {planet.map(({ name, terrain, diameter, climate }, index) => {
              return (
                <li key={index}>
                  <h2>{name}</h2>
                  <p>Terrain: {terrain}</p>
                  <p>Diameter: {diameter}</p>
                  <p>Climate: {climate}</p>
                </li>
              );
            })}
          </ul>

          <button
            onClick={() => {
              setPlanetId((prevState) => prevState + 1);
            }}
            disabled={planetId === 10}
          >
            show more
          </button>
        </div>
      )}
    </div>
  );
};

export default Stars;
