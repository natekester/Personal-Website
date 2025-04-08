import { localPalindromeApi, prodPalindromeApi } from '../constants/api-urls';

export async function callPalindrome(word) {
  const lowerCaseWord = word.toLowerCase();
  const api =
    process.env.NODE_ENV === 'development'
      ? prodPalindromeApi
      : prodPalindromeApi;
  const url = `${api}?word=${lowerCaseWord}`;

  const response = await fetch(url, { mode: 'cors' });
  const jsonData = await response.json();
  return jsonData;
}
