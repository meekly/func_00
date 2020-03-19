{
  // Дано: функция

  const mixin = function(){
   return this * this;
  };

  // Выполнить: вызвать функцию так, чтобы при вызове от значения 5 выдавался квадрат числа 5, равный 25

  const A = function(n) { this.n = n };
  A.prototype.mixin = mixin;
  A.prototype.valueOf = function() { return this.n }

  console.log(new A(5).mixin());
  console.log(new A(155).mixin());
  console.log(new A(10).mixin());
}
