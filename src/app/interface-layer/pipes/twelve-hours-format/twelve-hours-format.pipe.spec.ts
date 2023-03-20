import { TwelveHoursFormatPipe } from './twelve-hours-format.pipe';

describe('TwelveHoursFormatPipe', () => {
  it('create an instance', () => {
    const pipe = new TwelveHoursFormatPipe();
    expect(pipe).toBeTruthy();
  });
});
