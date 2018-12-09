# ECAMScript (Javascript, JS)

A collection of some interesting Javascript functions:

## 1. Fibonacci number

```console
$ node fibonacci
[ 1 ]
[ 1, 1 ]
[ 1, 1, 2 ]
[ 1, 1, 2, 3, 5 ]
[ 1, 1, 2, 3, 5, 8, 13, 21, 34, 55 ]
...
```

## 2. Continuation-passing style

Write a factorial function in continuation-passing style:

```javascript
var factorial = function(n, cons) {
  return n === 1 ? cons(1) : factorial(n - 1, x => cons(x * n));
}

factorial(6, x => console.log(x)); // 6! = 720
```


```console
$ node factorial
720 
```

## 3 Generator

Define a generator object with ```function*``` to return a lazy sequence of values:

```javascript
// return a lazy sequence of special numbers which are calculated 
// with a function f on the natural numbers
function* sequence(f) {
  var num = 1;
  while (true) {
    yield f(num++);
  }
}

// return the first nth numbers from the sequence
function* take(nth, sequence) {
  for (let i = 0; i < nth; i++) {
    yield sequence.next().value;
  }
}
```

a. even numbers: 2 4 6 8 10 ...

```javascript
for (let even of take(10, sequence(x => 2 * x))) {
  console.log(even);
}
```

b. square numbers: 1 4 9 16 25 ...

```javascript
for (let square of take(10, sequence(x => x * x))) {
  console.log(square);
}
```

c. power of 2 numbers: 2 4 8 16 32 ...

```javascript
for (let pow2 of take(10, sequence(x => Math.pow(2, x)))) {
  console.log(pow2);
}
```
