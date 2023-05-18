//need to make a test that mocks the fetch calls, and returns the correct status
import '@testing-library/jest-dom';
import { callPalindrome } from './palindrome';

describe('When the promise is rejected', () => {
  it('test a good api call', async () => {
    global.fetch = jest.fn(() =>
      Promise.resolve({
        json: () =>
          Promise.resolve({
            isPalindrome: true,
          }),
      })
    );

    const res = await callPalindrome('testset');
    expect(res.isPalindrome).toBe(true);
  });

  it('test a good api call - but a palindrome is false', async () => {
    global.fetch = jest.fn(() =>
      Promise.resolve({
        json: () =>
          Promise.resolve({
            isPalindrome: false,
          }),
      })
    );

    const res = await callPalindrome('testset');
    expect(res.isPalindrome).toBe(false);
  });
});
