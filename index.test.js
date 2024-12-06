const  { convertTimeToWords } = require('./index');

describe('Time to words', () => {
  it('Handles midnight', () => {
    const timeInWords = convertTimeToWords('0:00');
    expect(timeInWords).toBe('midnight');
  });

  it('Handles midday', () => {
    const timeInWords = convertTimeToWords('12:00');
    expect(timeInWords).toBe('midday');
  });

  it('handles o clock', () => {
    const timeInWords = convertTimeToWords('2:00');
    expect(timeInWords).toBe("two o'clock");
  });

  it('before 30 mins', () => {
    const times = ['2:02', '2:05', '2:07', '2:10', '2:13'];
    const expectedTimes = ["two past two", "five past two", "seven past two", "ten past two", "thirteen past two"];
    for(let index = 0; index < times.length; index++){
      const timeInWords = convertTimeToWords(times[index]);
      expect(timeInWords).toBe(expectedTimes[index]);
    }

    
  });

  test.each([
    {time: '13:40', expected: 'twenty to two'},
    {time: '11:50', expected: 'ten to twelve'},
    {time: '12:43', expected: 'seventeen to one'},
  ])('handles ($time)', ({time, expected}) => {
    expect(convertTimeToWords(time)).toBe(expected);
  });

  it('Handles 30 - 8:30', () => {
    const timeInWords = convertTimeToWords('8:30');
    expect(timeInWords).toBe('half past eight');
  });

  it('Handles times after 30 mins - 2:45', () => {
    const timeInWords = convertTimeToWords('2:45');
    expect(timeInWords).toBe('quarter to three');
  });

});
