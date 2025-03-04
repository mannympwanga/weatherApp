import styles from './ThemeToggle.module.css';

interface ThemeToggleProps {
  darkMode: boolean;
  toggleTheme: () => void;
}

export const ThemeToggle = ({ darkMode, toggleTheme }: ThemeToggleProps) => {
  return (
    <button className={styles.themeToggle} onClick={toggleTheme}>
      {darkMode ? '🌞 Light' : '🌙 Dark'}
    </button>
  );
};