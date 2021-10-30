import React from 'react';
import Title from './Title';
import Planets from '../data/planets';
import PlanetCard from './PlanetCard';

class SolarSystem extends React.Component {
  render() {
    return (
      <div className="solarSystem" data-testid="solar-system">
        <Title headline="Planetas" />
        <div className="planetcard">
          {Planets.map((planet) => {
            const { name, image } = planet;
            return <PlanetCard key={ name } planetName={ name } planetImage={ image } />;
          })}
        </div>
      </div>
    );
  }
}

export default SolarSystem;
