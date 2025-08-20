import React from 'react';
import styled from 'styled-components';

const Card = styled.div`
  background: rgba(255, 255, 255, 0.1); // semi-transparent white
  border-radius: 15px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2);
  backdrop-filter: blur(10px); // glass effect
  padding: 20px;
  margin: 20px;
  transition: transform 0.3s, box-shadow 0.3s;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 40px rgba(0, 0, 0, 0.3);
  }
`;

const Title = styled.h2`
  color: #ff7f50; // coral orange
  font-size: 24px;
  margin: 0;
`;

const Content = styled.p`
  color: white;
  font-size: 16px;
`;

const GlassCard: React.FC<{ title: string; content: string }> = ({ title, content }) => {
  return (
    <Card>
      <Title>{title}</Title>
      <Content>{content}</Content>
    </Card>
  );
};

export default GlassCard;