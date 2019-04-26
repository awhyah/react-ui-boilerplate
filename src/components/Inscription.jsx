import React, {
  useState, useEffect,
} from 'react';

import styles from './Inscription.less';

const PRINT_INTERVAL = 150;

export default function Inscription() {
  const [quote, setQuote] = useState('viam supervadet vadens');

  useEffect(() => {
    const charArray = quote.split('');
    const accumulatedChars = [];
    let depth = Math.round(Math.random() * 10 + 1);
    let action = 'deleting';

    setInterval(() => {
      if (action === 'deleting') {
        const char = charArray.pop();
        accumulatedChars.push(char);
        depth -= 1;

        if (depth === 0) {
          action = 'typing';
        }
      } else if (action === 'typing') {
        charArray.push(accumulatedChars.pop());

        if (!accumulatedChars.length) {
          depth = Math.round(Math.random() * 10) + 1;
          action = 'deleting';
        }
      }

      setQuote(charArray.join(''));
    }, PRINT_INTERVAL);
  }, []);

  return (
    <div className={styles.Inscription}>
      <span className={styles.quote}>{quote}</span>
    </div>
  );
}
