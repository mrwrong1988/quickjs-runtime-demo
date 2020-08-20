import {toByteArray, fromByteArray, byteLength} from './base64.js'

function stringToUint(string) {
  const charList = string.split('');
  const uintArray = [];
  for (var i = 0; i < charList.length; i++) {
      uintArray.push(charList[i].charCodeAt(0));
  }
  return new Uint8Array(uintArray);
}

function uintToString(uintArray) {
  const charList = [];
  for (var i = 0; i < uintArray.length; i++) {
    charList.push(String.fromCharCode.apply(null, [uintArray[i]]))
  }
  return charList.join('');
}

const helpMsg = `
usage: base64-tool [options] [string]
-h          list options
-f str     生成base64
-t str     从base64到string
`
function base64Tool() {
  if (scriptArgs.length <= 1) {
    console.log(helpMsg)
    return
  }

  switch (scriptArgs[1]) {
    case '-f':
      if (!scriptArgs[2]) {
        console.log(helpMsg)
      } else {
        console.log(fromByteArray(stringToUint(scriptArgs[2])))
      }
      break;
    case '-t':
      if (!scriptArgs[2]) {
        console.log(helpMsg)
      } else {
        console.log(uintToString(toByteArray(scriptArgs[2])))
      }
      break;
    default:
      console.log(helpMsg)
      break;
  }
}

base64Tool()
