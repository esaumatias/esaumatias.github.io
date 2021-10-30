import React from 'react';
import Title from './Title';
import MissionCard from './MissionCard';
import missions from '../data/missions';

class Missions extends React.Component {
  render() {
    return (
      <div className="missions" data-testid="missions">
        <Title headline="Missões" />
        <div className="missionCards">
          {missions.map((missoes) => {
            const { name, year, country, destination } = missoes;
            const props = {
              name,
              year,
              country,
              destination,
            };
            return <MissionCard key={ name } { ...props } />;
          })}
        </div>
      </div>
    );
  }
}

export default Missions;
