import reactDOM from 'react-dom';

import Button from '../UI/Button';
import styles from './Modal.module.css';

const Backdrop = ({ onClick }) => {
  return <div className={styles.backdrop} onClick={onClick}></div>;
};

const Overlay = ({ title, message, onClose }) => {
  const { modal, header, body, action } = styles;
  return (
    <div className={modal}>
      <div className={header}>
        <div>{title}</div>
      </div>
      <div className={body}>
        <p>{message}</p>
        <div className={action}>
          <Button type={'button'} label={'Okay'} onClick={onClose} />
        </div>
      </div>
    </div>
  );
};

function Modal(props) {
  return (
    <>
      {reactDOM.createPortal(<Backdrop onClick={props.onClose} />, document.getElementById('backdrop-root'))}
      {reactDOM.createPortal(<Overlay {...props} />, document.getElementById('overlay-root'))}
    </>
  );
}

export default Modal;
