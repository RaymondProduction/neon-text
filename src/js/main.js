require(['ntext'], function(ntext) {

  document.addEventListener("DOMContentLoaded", start());

  function start() {
    resultEl = document.getElementById('neonText');
    console.log('DOM is ready for manipulation! Hi!');
    //test();
    st = [
      'Ира привет! :) ',
      'Решил попантоватся ',
      'Потратил час чтоб zzzz ',
      'сделать неоновый текст Hello!! ~',
    ].join('~');
    ntext.printNeon('Введите текст: ');
    ntext.inputNeon(function(st) {
      console.log(st);
      ntext.printNeon('~ Ваш текст: ' + st);
     //   ntext.printNeon('Ввведите текст2: ');
     //   ntext.inputNeon(function(st2) {
     //     ntext.printNeon('Ваш текст 2'+st2)
     //   });
    });

  };

});
