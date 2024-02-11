import styled from 'styled-components';

export const Status = styled.span`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  display: inline-block;
  margin-right: 10px;
  background-color: ${props => (props.isOnline ? 'green' : 'red')};
`;

export const FriendListStyled = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 20px;
  list-style: none;
  padding: 0;
  margin: auto;
  margin-top: 20px;
  width: 300px;
`;

export const Img = styled.img`
  display: block;
  width: 48px;
`;

export const Name = styled.p`
  font-size: 20px;
  font-weight: bold;
  color: #333;
`;

export const Item = styled.li`
  display: flex;
  align-items: center;
  gap: 20px;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  background: #f3f4f6;
`;
