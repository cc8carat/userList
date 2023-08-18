import Card from '../UI/Card';

import styles from './UserList.module.css';

function UserList({ userList }) {
  return (
    <Card>
      <ul>
        {userList.map((user, index) => (
          <li key={index}>
            {user.userName} ({user.age} years old )
          </li>
        ))}
      </ul>
    </Card>
  );
}

export default UserList;
