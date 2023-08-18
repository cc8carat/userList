import Button from '../UI/Button';
import styles from './Modal.module.css';

function Modal({ closeModal }) {
  const { modal, backdrop, header, body, action } = styles;
  return (
    <div className={backdrop}>
      <div className={modal}>
        <div className={header}>
          <div>Invalid input</div>
        </div>
        <div className={body}>
          <p>Please enter a valid name and age (none empty values).</p>
          <div className={action}>
            <Button type={'button'} label={'Okay'} onClick={closeModal} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Modal;
