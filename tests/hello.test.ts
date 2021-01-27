import { hello } from '../src';

describe('hello', () => {
  test('should return hello', () => {
    const message = hello();
    expect(message).toEqual('Hello Typescript!');
  });
});
