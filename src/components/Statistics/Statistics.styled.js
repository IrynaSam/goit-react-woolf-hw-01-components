import styled from 'styled-components';
const randomColor = () => {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
};

export const StatisticsSection = styled.section`
  text-align: center;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
  width: 50%;
  margin: auto;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
`;

export const Title = styled.h2`
  text-transform: uppercase;
  margin-bottom: 20px;
`;

export const StatList = styled.ul`
  list-style: none;
  padding: 0;
  display: flex;
  justify-content: space-around;
`;

export const Item = styled.li`
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
  width: 20%;
  background-color: ${() => randomColor()};
`;

export const Label = styled.span`
  display: block;
  margin-bottom: 5px;
  font-size: 20px;
  font-weight: semi-bold;
`;

export const Percentage = styled.span`
  font-weight: bold;
  font-size: 30px;
`;
