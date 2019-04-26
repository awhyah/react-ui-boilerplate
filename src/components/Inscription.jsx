import React, {
  useState, useEffect,
} from 'react';

import styles from './Inscription.less';

export default function Inscription() {
  const [quote, setQuote] = useState('viam supervadet vadens');
  const printingInterval = 150;

  useEffect(() => {
    const charArray = quote.split('');
    const accumulatedChars = [];
    let depth = Math.round(Math.random() * 10 + 1);
    let action = 'DELETING';

    setInterval(() => {
      if (action === 'DELETING') {
        const char = charArray.pop();
        accumulatedChars.push(char);
        depth -= 1;

        if (depth === 0) {
          action = 'TYPING';
        }
      } else if (action === 'TYPING') {
        charArray.push(accumulatedChars.pop());

        if (!accumulatedChars.length) {
          depth = Math.round(Math.random() * 10) + 1;
          action = 'DELETING';
        }
      }

      setQuote(charArray.join(''));
    }, printingInterval);
  }, []);

  return (
    <div className={styles.Inscription}>
      <span className={styles.quote}>{quote}</span>
    </div>
  );
}
