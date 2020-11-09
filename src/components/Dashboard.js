import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import IncidentCard from './IncidentCard';

const Dashboard = () => {
  const [incidents, setIncidents] = useState([]);
  useEffect(() => {
    const getIncidents = () => {
      axios
        .get('https://hrf-c-api.herokuapp.com/incidents/showallincidents')
        .then(res => {
          setIncidents(res.data);
          console.log(res.data);
        })
        .catch(err => {
          console.error('server error', err);
        });
    };

    getIncidents();
  }, []);

  return (
    <div className="incident-list">
      {incidents.map(incident => (
        <IncidentDetails key={incident.id} incident={incident} />
      ))}
    </div>
  );
};

function IncidentDetails({ incident }) {
  return (
    <div className="incident-card">
      <IncidentCard incident={incident} />
    </div>
  );
}
export default Dashboard;
