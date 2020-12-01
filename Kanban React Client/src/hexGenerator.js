const KEY_LENGTH = 10;

function generateHexString() {
  var ret = "";
  while (ret.length < KEY_LENGTH) {
    ret += Math.random().toString(16).substring(2);
  }
  return ret.substring(0,KEY_LENGTH);
}


export {generateHexString};