let instance = {};

//window.instance = instance;
//global.instance = instance;

(function (global) {
  let count = 0;
  let instance = {
    do() {
      count++;
    }
  };
  global.instance = instance;
}(window));

instance.do();