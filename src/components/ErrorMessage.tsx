import styles from './ErrorMessage.module.css';

interface ErrorMessageProps {
  message: string;
}

export const ErrorMessage = ({ message }: ErrorMessageProps) => {
  return message ? <div className={styles.errorMessage}>{message}</div> : null;
};