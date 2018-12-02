let fib = n => {
  if (n <= 1) return [1];
  if (n === 2) return [1, 1];
  let s = fib(n - 1);
  s.push(s[n - 2] + s[n - 3]);
  return s;
};

console.log(fib(1));
console.log(fib(2));
console.log(fib(3));
console.log(fib(5));
console.log(fib(10));
console.log(fib(20));
console.log(fib(50));
