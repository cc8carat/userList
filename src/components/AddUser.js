import { useState } from 'react';

import Card from '../UI/Card';
import Button from '../UI/Button';

import styles from './AddUser.module.css';

function AddUser({ onSubmit, errorHandler }) {
  const [user, setUser] = useState({ userName: '', age: '' });

  const changeHandler = (input, value) => {
    setUser((prev) => ({ ...prev, [input]: value }));
  };

  const submitHandler = (e) => {
    e.preventDefault();
    if (user.userName.trim().length === 0 || !user.age) {
      errorHandler();
    } else {
      onSubmit(user);
      setUser({ userName: '', age: '' });
    }
  };

  return (
    <Card>
      <form onSubmit={submitHandler}>
        <div className={styles.input}>
          <label htmlFor='name'>UserName</label>
          <input type='text' id='username' onChange={(e) => changeHandler('userName', e.target.value)} value={user.userName} />
        </div>
        <div className={styles.input}>
          <label htmlFor='age'>Age (Years)</label>
          <input type='number' id='age' onChange={(e) => changeHandler('age', e.target.value)} value={user.age} />
        </div>
        <Button type={'submit'} label={'Add User'} />
      </form>
    </Card>
  );
}

export default AddUser;
