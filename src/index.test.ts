import { helloWorld } from './index';
describe('test', () => {
  it('should import hello world variable', () => {
    expect(helloWorld).toEqual('hello world');
  });
});
