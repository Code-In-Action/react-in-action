import { Link } from 'react-router-dom';
import styles from './index.css';

export default function() {
  return (
    <div className={styles.normal}>
      <div className={styles.welcome} />
      <Link to="/about">about</Link>
      <ul className={styles.list}>

        <li>To get started, edit <code>src/pages/index.js</code> and save to reload.</li>
        <li><a href="https://umijs.org/guide/getting-started.html">Getting Started</a></li>

      </ul>
    </div>
  );
}
