import React, { useState } from 'react';

import AddUser from './components/AddUser';
import UserList from './components/UserList';
import Modal from './components/Modal';

function App() {
  const [userList, setUserList] = useState([]);
  const [isModalShown, setIsModalShown] = useState(false);
  const showList = (user) => {
    setUserList((prev) => [...prev, user]);
  };

  const errorHandler = () => setIsModalShown(true);
  const closeModal = () => setIsModalShown(false);

  return (
    <div>
      <AddUser onSubmit={showList} errorHandler={errorHandler} />
      {userList.length > 0 && <UserList userList={userList} />}
      {isModalShown && <Modal closeModal={closeModal} />}
    </div>
  );
}

export default App;
