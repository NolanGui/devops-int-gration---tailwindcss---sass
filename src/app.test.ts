import { add } from './app';

describe('add function', () => {
  it('should return the sum of two numbers', () => {
    const result = add(2, 3);
    expect(result).toBe(5); // Teste que 2 + 3 donne bien 5
  });
});
