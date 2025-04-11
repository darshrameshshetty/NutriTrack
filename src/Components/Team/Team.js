import React from 'react';
import './Team.css';

const teamMembers = [
  {
    name: 'Darsh Shetty',
    role: 'Code Ninja',
    image: '/images/member1.jpg',
  },
  {
    name: 'Sahil Topale',
    role: 'Design King',
    image: '/images/member2.jpg',
  },
  {
    name: 'Sebin Sebastian',
    role: 'Data Wizard',
    image: '/images/member3.jpg',
  },
  {
    name: 'Raul Rebello',
    role: 'Marketing Mastermind',
    image: '/images/member4.jpg',
  },
];

const Team = () => {
  return (
    <section className="team-section">
      <h2 className="team-title">🔥 Meet Our Power Team</h2>
      <p className="team-subtitle">Fueled by innovation, united by fire</p>
      <div className="team-container">
        {teamMembers.map((member, i) => (
          <div className="team-card orange-glow" key={i}>
            <div className="image-wrapper">
              <img src={member.image} alt={member.name} />
            </div>
            <div className="card-content">
              <h3>{member.name}</h3>
              <p>{member.role}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Team;
