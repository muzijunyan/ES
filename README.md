# ECAMScript (Javascript, JS)

A collection of some interesting Javascript functions:

## 1. Fibonacci number (https://en.wikipedia.org/wiki/Fibonacci_number)

```console
$ node fibonacci
[ 1 ]
[ 1, 1 ]
[ 1, 1, 2 ]
[ 1, 1, 2, 3, 5 ]
[ 1, 1, 2, 3, 5, 8, 13, 21, 34, 55 ]
...
```

## 2. Continuation-passing style (https://en.wikipedia.org/wiki/Continuation-passing_style)

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
