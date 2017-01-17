const maxLength = 20;
const emailRegExp = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

class Сonstants {
  static get maxLength() {
    return maxLength;
  }
  static get emailRegExp() {
    return emailRegExp;
  }
}

export default Сonstants;
