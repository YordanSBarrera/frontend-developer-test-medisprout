export const subString = (string, length) => {
    if (!string || string.length === 0) return '';
  
    if (string.length <= length) return string;
  
    const resultString = string.substring(0, length) + "...";
    return resultString;
  }
  
