import Button from '../UI/Button';
import styles from './Modal.module.css';

function Modal({ title, message, onClose }) {
  const { modal, backdrop, header, body, action } = styles;
  return (
    <div className={backdrop} onClick={onClose}>
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
    </div>
  );
}

export default Modal;
