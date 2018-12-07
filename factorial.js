// using continuation passing style
var factorial = function(n, cons) {
  return n === 1 ? cons(1) : factorial(n - 1, x => cons(x * n));
}

factorial(6, x => console.log(x));
