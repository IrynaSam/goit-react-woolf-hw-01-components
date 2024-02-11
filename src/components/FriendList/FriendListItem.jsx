import { Img, Item, Name, Status } from './FriendList.styled';

export const FriendListItem = ({ id, avatar, name, isOnline }) => {
  return (
    <Item key={id}>
      <Status isOnline={isOnline} />
      <Img src={avatar} alt={name} />
      <Name>{name}</Name>
    </Item>
  );
};
