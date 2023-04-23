function convertUnixTimestamp(unixTimestamp) {
    const dateObj = new Date(unixTimestamp * 1000);
    const month = dateObj.toLocaleString("default", { month: "short" });
    const day = dateObj.toLocaleString("default", { day: "numeric" });
    const year = dateObj.toLocaleString("default", { year: "numeric" });
    const suffix = getOrdinalSuffix(day);
    return `${month} ${day}${suffix}, ${year}`;
  }
  function dateToUnix(dateString) {
    const dateObj = new Date(dateString);
    const unixTimestamp = Math.floor(dateObj.getTime() / 1000);
  
    return unixTimestamp;
  }
  function getOrdinalSuffix(day) {
    if (day >= 11 && day <= 13) {
      return "th";
    } else {
      const lastDigit = day % 10;
      switch (lastDigit) {
        case 1:
          return "st";
        case 2:
          return "nd";
        case 3:
          return "rd";
        default:
          return "th";
      }
    }
  }
  function capitalizeWords(str) {
    const words = str.split(" ");
    const capitalizedWords = words.map(word => {
      return word.charAt(0).toUpperCase() + word.slice(1);
    });
    const capitalizedStr = capitalizedWords.join(" ");
    
    return capitalizedStr;
  }
  export {convertUnixTimestamp,dateToUnix,getOrdinalSuffix, capitalizeWords}