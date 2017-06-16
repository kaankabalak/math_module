module.exports = function (){
  return {
    add: function(num1, num2) { 
         return num1 + num2;
    },
    multiply: function(num1, num2) {
         return num1 * num2;
    },
    square: function(num) {
         return num * num;
    },
    // return random number between 0 and 10
    random: function(num1, num2) {
         return Math.floor(Math.random()*10);
    }
  }
};
