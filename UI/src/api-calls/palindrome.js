import { localPalindromeApi, prodPalindromeApi } from '../constants/api-urls';

export async function callPalindrome(word) {
  const api =
    process.env.NODE_ENV === 'development'
      ? localPalindromeApi
      : prodPalindromeApi;
  const url = `${api}?word=${word}`;

  const response = await fetch(url, { mode: 'cors' });
  const jsonData = await response.json();
  return jsonData;
}
