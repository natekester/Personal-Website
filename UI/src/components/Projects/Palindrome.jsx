import React, { useEffect, useState } from 'react';
import styles from './Palindrome.module.css';
import { callPalindrome } from '../../api-calls/palindrome';

function Palindrome() {
  const [isPalindrome, setPalindrome] = useState('');
  const [callMade, setCallMade] = useState(false);
  const [word, setWord] = useState('');
  const [delayAPICall, setDelayAPICall] = useState(false);
  const [error, setError] = useState('');

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
        //by default api-gateway rate limits. doesnt hurt to slow down.
        setDelayAPICall(true);
        setTimeout(() => {
          setDelayAPICall(false);
        }, 500);
      }
      if (word === '') {
        setError('you need to input a word before calling');
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
          placeholder="check if word is palindrome"
        />

        <button className={styles.button} onClick={checkIsPalindrome}>
          {' '}
          Call Lambda
        </button>
      </div>
      {callMade ? (
        isPalindrome ? (
          <p className={styles.isPalindrome}>
            <q>{word}</q> &nbsp; is a palindrome! 😎
          </p>
        ) : (
          <p className={styles.isNotPalindrome}>
            <q>{word}</q> &nbsp; is NOT a palindrome 😔
          </p>
        )
      ) : (
        <div className={styles.placeholder}></div>
      )}
      <div className={styles.isNotPalindrome}>{error}</div>
    </div>
  );
}

export default Palindrome;
