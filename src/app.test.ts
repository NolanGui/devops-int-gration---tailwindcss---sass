import { add } from './app';

describe('add function', () => {
  it('should return the sum of two numbers', () => {
    const result = add(2, 3);
    expect(result).toBe(5);
  });
});