import React, { useState } from 'react';

import AddUser from './components/AddUser';
import UserList from './components/UserList';

function App() {
  const [userList, setUserList] = useState([]);

  const showList = (user) => {
    setUserList((prev) => [...prev, user]);
  };

  return (
    <div>
      <AddUser onSubmit={showList} />
      {userList.length > 0 && <UserList userList={userList} />}
    </div>
  );
}

export default App;
