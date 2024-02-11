import styled from 'styled-components';

export const Wrapper = styled.div`
  border: 1px solid #e1e4e8;
  border-radius: 5px;
  width: 300px;
  margin: 20px auto;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
`;

export const Description = styled.div`
  text-align: center;
  padding: 20px;
`;

export const Image = styled.img`
  display: block;
  max-width: 100%;
  width: 100px;
  height: 100px;
`;
export const Name = styled.p`
  font-size: 20px;
  font-weight: bold;
  color: #333;
`;

export const Tag = styled.p`
  color: #767676;
  font-size: 14px;
`;

export const Location = styled.p`
  color: #767676;
  font-size: 14px;
`;

export const Stats = styled.ul`
  list-style: none;
  display: flex;
  justify-content: space-around;
  background: #f3f4f6;
  padding: 10px 0;
  margin: 0;
`;

export const StatsItem = styled.li`
  text-align: center;
`;

export const Label = styled.span`
  display: block;
  font-size: 12px;
  color: #767676;
`;

export const Quantity = styled.span`
  font-size: 16px;
  font-weight: bold;
  color: #333;
`;
