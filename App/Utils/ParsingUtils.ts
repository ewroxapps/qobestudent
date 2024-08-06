import moment from "moment";

export const parseYoutubeUrl = (url: string) => {
  const regExp =
    /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#&?]*).*/;
  const match = url.match(regExp);
  return match && match[7].length == 11 ? match[7] : false;
};

export const parseVimeoUrl = (url: string) => {
  const regExp =
    /(?:https?:\/\/(?:www\.)?)?vimeo.com\/(?:channels\/|groups\/([^\/]*)\/videos\/|album\/(\d+)\/video\/|)(\d+)(?:$|\/|\?)/;
  const match = url.match(regExp);
  return match ? match[3] : false;
};


export const findWord = (dictionary: DynamicDictionary, targetWord: string): string | undefined => {
  if(targetWord!=undefined && dictionary!=undefined){
    const foundValue = dictionary[targetWord];
    return foundValue;
  }else{
    return undefined
  }

 
};


export const convertNumberToArabic = (
  dictionary: DynamicDictionary,
  number: any
): string | undefined => {
  const numberString = String(number);
  let result = '';

  if (dictionary && numberString) {
    for (let i = 0; i < numberString.length; i++) {
      const digit = numberString.charAt(i);
      const mappedDigit = dictionary[digit];

      if (mappedDigit !== undefined) {
        result += mappedDigit;
      } else {
        result += digit;
      }
    }
  }

  return result;
};
export const convertDateToArabic = (
  dateString: string,
  arabicDictionary: DynamicDictionary
): string  => {
  const dateStringWithoutOrdinal = dateString.replace(/(\d+)(st|nd|rd|th)/, '$1');
  const momentDate = moment(dateStringWithoutOrdinal, "dddd, Do MMM YYYY").local();
  const saveMoment = momentDate.format("dddd, Do [of] MMM YYYY")
  const dayOfWeek = findWord(arabicDictionary, momentDate.format('ddd'))?.trim() || momentDate.format('ddd').trim()
  const dayOfMonthWithoutSuffix = momentDate.format('Do').replace(/(\d+)\s*(?:st|nd|rd|th)?\s*/, '$1');
  const dayOfMonthConverted = convertNumberToArabic(arabicDictionary, dayOfMonthWithoutSuffix);
  const dayOfMonth = dayOfMonthConverted !== undefined ? dayOfMonthConverted.trim() : '';
  const month = findWord(arabicDictionary, momentDate.format('MMMM'))?.trim() || momentDate.format('MMMM').trim();
  const year = convertNumberToArabic(arabicDictionary, momentDate.year().toString().trim()) || momentDate.year().toString().trim();

  if(arabicDictionary)
  return `${dayOfMonth.trim()} ${month.trim()} ${year.trim()}`
  else 
  return dateString

};


export const convertDateToArabic2 = (
  dateString: string,
  arabicDictionary: DynamicDictionary
): string => {
  const momentDate = moment(dateString, 'DD-MM-YYYY');
  const dayOfMonthWithoutSuffix = momentDate.format('Do').replace(/(\d+)\s*(?:st|nd|rd|th)?\s*/, '$1');
  const dayOfMonthConverted = convertNumberToArabic(arabicDictionary, dayOfMonthWithoutSuffix) || dayOfMonthWithoutSuffix;
  const month = convertNumberToArabic(arabicDictionary, momentDate.format('MM')) || momentDate.format('MM');
  const year = convertNumberToArabic(arabicDictionary, momentDate.year().toString().trim()) || momentDate.year().toString().trim();

  return `${year} - ${month} - ${dayOfMonthConverted}`;
};


export const getDaysfrom = (
  day: string,
  arabicDictionary: DynamicDictionary
): string | undefined => {
 
  const dayOfWeek = findWord(arabicDictionary, day)
  if(dayOfWeek != undefined)
  return `${dayOfWeek}`;
  else
  return day
}

export const convertDecimal = (
  dictionary: DynamicDictionary,
  number: any
): string => {
  const numberString = String(Math.floor(number)); // Take only the integer part
  let result = '';

  for (let i = 0; i < numberString.length; i++) {
    const digit = numberString.charAt(i);
    const mappedDigit = dictionary[digit];

    if (mappedDigit !== undefined) {
      result += mappedDigit;
    } else {
      result += digit;
    }
  }

  return result;
};






export const convertTimeToArabic = (
  timeString: string,
  arabicDictionary: DynamicDictionary
): string => {
  const momentTime = moment(timeString, 'HH:mm:ss');
  const hours = convertNumberToArabic(arabicDictionary, momentTime.format('HH')) || momentTime.format('HH');
  const minutes = convertNumberToArabic(arabicDictionary, momentTime.format('mm')) || momentTime.format('mm');
  const seconds = convertNumberToArabic(arabicDictionary, momentTime.format('ss')) || momentTime.format('ss');

  if(arabicDictionary)
  return `${seconds}:${minutes}:${hours}`
 else
 return timeString
};
