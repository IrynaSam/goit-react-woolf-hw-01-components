import { Profile } from './Profile/Profile';
import { Statistics } from './Statistics/Statistics';
import { FriendList } from './FriendList/FriendList';
import { TransactionHistory } from './TransactionHistory/TransactionHistory';
import { StyleSheetManager } from 'styled-components';
import isPropValid from '@emotion/is-prop-valid';

import user from './Profile/user.json';
import stats from './Statistics/data.json';
import friends from './FriendList/friends.json';
import items from './TransactionHistory/transactions.json';

export const App = () => {
  function shouldForwardProp(propName, target) {
    if (typeof target === 'string') {
      return isPropValid(propName);
    }
    return true;
  }
  return (
    <StyleSheetManager shouldForwardProp={shouldForwardProp}>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          fontSize: 40,
          color: '#010101',
        }}
      >
        <Profile
          username={user.username}
          tag={user.tag}
          location={user.location}
          avatar={user.avatar}
          stats={user.stats}
        />
        <Statistics stats={stats} />
        <FriendList friends={friends} />
        <TransactionHistory transactions={items} />
      </div>
    </StyleSheetManager>
  );
};
