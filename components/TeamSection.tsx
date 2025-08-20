import React from 'react';
import './TeamSection.css'; // Importing CSS for styling

const TeamSection: React.FC = () => {
    return (
        <section className="team-section">
            <h2 className="team-title">Meet Our Glam Team</h2>
            <div className="team-container">
                <div className="team-member">
                    <img src="/images/member1.jpg" alt="Team Member 1" className="member-photo" />
                    <h3 className="member-name">Alice Johnson</h3>
                    <p className="member-role">Founder & CEO</p>
                </div>
                <div className="team-member">
                    <img src="/images/member2.jpg" alt="Team Member 2" className="member-photo" />
                    <h3 className="member-name">Michael Smith</h3>
                    <p className="member-role">Creative Director</p>
                </div>
                <div className="team-member">
                    <img src="/images/member3.jpg" alt="Team Member 3" className="member-photo" />
                    <h3 className="member-name">Sophia Lee</h3>
                    <p className="member-role">Product Manager</p>
                </div>
                <div className="team-member">
                    <img src="/images/member4.jpg" alt="Team Member 4" className="member-photo" />
                    <h3 className="member-name">James Brown</h3>
                    <p className="member-role">Lead Designer</p>
                </div>
            </div>
        </section>
    );
};

export default TeamSection;