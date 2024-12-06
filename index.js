// expecting time to be a string in the format like '8:15' or '12:30'
function convertTimeToWords(time) {
  if (time === '0:00') {
    return 'midnight';
  } else if (time === '12:00'){
    return 'midday';
  }

  let numberToWords = [
    'zero',
    'one',
    'two',
    'three',
    'four',
    'five',
    'six',
    'seven',
    'eight',
    'nine',
    'ten',
    'eleven',
    'twelve',
    'thirteen',
    'fourteen',
    'quarter',
    'sixteen',
    'seventeen',
    'eighteen',
    'nineteen',
    'twenty',
    'twenty one',
    'twenty two',
    'twenty three',
    'twenty four',
    'twenty five',
    'twenty six',
    'twenty seven',
    'twenty eight',
    'twenty nine',
    'half',
  ];

  let tmp = time.split(":");
  let hour = Number(tmp[0]);
  let minute = Number(tmp[1]);

  hour %= 12;
  if(hour == 0) hour = 12;
  let nextHour = hour + 1;
  if(nextHour == 13) nextHour = 1;

  if(minute == 0){
    return `${numberToWords[hour]} o'clock`;
  }
  let result = (minute <= 30 ? 
    `${numberToWords[minute]} past ${numberToWords[hour]}` : 
    `${numberToWords[60 - minute]} to ${numberToWords[nextHour]}`
  );
  return result;
}

module.exports = { convertTimeToWords };