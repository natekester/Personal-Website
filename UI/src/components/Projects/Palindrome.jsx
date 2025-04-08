import React, { useEffect, useState } from 'react';
import styles from './Palindrome.module.css';
import { callPalindrome } from '../../api-calls/palindrome';

function Palindrome() {
  const [isPalindrome, setPalindrome] = useState('');
  const [callMade, setCallMade] = useState(false);
  const [word, setWord] = useState('');
  const [delayAPICall, setDelayAPICall] = useState(false);
  const [error, setError] = useState('');
  const [count, setCount] = useState(null);

  useEffect(() => {
    //if they change the word, lets reset the answer
    setCallMade(false);
  }, [word]);

  const checkIsPalindrome = async () => {
    try {
      if (!delayAPICall && !callMade && word) {
        setError('');
        const response = await callPalindrome(word);
        setCallMade(true);
        setPalindrome(response.isPalindrome);
        setCount(response.count);
        //by default api-gateway rate limits. doesnt hurt to slow down.
        setDelayAPICall(true);
        setTimeout(() => {
          setDelayAPICall(false);
        }, 500);
      }
      if (word === '') {
        setError('please enter a word');
      }
    } catch (e) {
      setError('something went wrong calling the lambda, please try again');
    }
  };

  return (
    <div className={styles.palindromeContainer}>
      <div className={styles.inputsContainer}>
        <input
          className={styles.input}
          onChange={(e) => setWord(e.target.value)}
          type="text"
          maxLength="19"
          placeholder="example: racecar"
        />

        <button className={styles.button} onClick={checkIsPalindrome}>
          {' '}
          Call Lambda
        </button>
      </div>
      {error ? <div className={styles.isNotPalindrome}>{error}</div> : ''}
      {callMade ? (
        isPalindrome ? (
          <p className={styles.isPalindrome}>
            <q>{word}</q> &nbsp; is a palindrome! 😎
            {count > 1
              ? `  It has been checked on this website ${count} times already!`
              : '  That is the first time anyone has input that Palindrome!'}
          </p>
        ) : (
          <p className={styles.isNotPalindrome}>
            <q>{word}</q> &nbsp; is NOT a palindrome 😔
          </p>
        )
      ) : (
        <div className={styles.placeholder}></div>
      )}
    </div>
  );
}

export default Palindrome;
