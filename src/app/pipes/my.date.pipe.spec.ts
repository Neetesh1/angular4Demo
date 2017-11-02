import { My.DatePipe } from './my.date.pipe';

describe('My.DatePipe', () => {
  it('create an instance', () => {
    const pipe = new My.DatePipe();
    expect(pipe).toBeTruthy();
  });
});
