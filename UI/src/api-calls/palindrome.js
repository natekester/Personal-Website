async function callPalindrome(word) {
  const url = `${prodPalindromeApi}?word=${word}`;
  const response = await fetch(url);
  const jsonData = await response.json();
  console.log(jsonData);
}
