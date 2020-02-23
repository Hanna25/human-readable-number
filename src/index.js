let stringNumbers = {
  0: "",
  1:"one", 2:"two", 3:"three", 4:"four",
  5:"five", 6:"six", 7:"seven", 8:"eight", 
  9:"nine", 10:"ten", 11:"eleven", 12:"twelve", 13:"thirteen",
  15: "fifteen", 18:"eighteen", 20: "twenty", 30:"thirty", 40:"forty", 50:"fifty", 80:"eighty"
}

module.exports = function toReadable (number) {
  if (number === 0) {
    return 'zero'
  }

  let calculate = function(number) {
    if(number <= 12 || stringNumbers.hasOwnProperty(number)) {
      return stringNumbers[number]
    } else if (number < 20 ) {
      let handledNum = Math.floor(number - 10)
      return stringNumbers[handledNum] + "teen"
    } else if (number < 100) {
      str = number + "";
      if (stringNumbers.hasOwnProperty([str[0] * 10])){
        let result = stringNumbers[[str[0] * 10]] + " " + stringNumbers[str[1]]
        return result.trim()
      }
      let result = stringNumbers[str[0]] + "ty " + calculate(str[1])
      return result.trim()
      } else {
      str = number + "";
      let result = stringNumbers[str[0]] + " hundred " + calculate(+str.substring(1))
      return   result.trim()
    }
  }
  return calculate(number)
 
}
