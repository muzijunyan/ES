// return a lazy sequence of special numbers which are calculated with a function f on the natural numbers
function* sequence(f) {
  var num = 1;
  while (true) {
    yield f(num++);
  }
}

// return the first nth numbers of the lazy sequence
function* take(nth, sequence) {
  for (let i = 0; i < nth; i++) {
    yield sequence.next().value;
  }
}

// take first 10 of even numbers: 2 4 6 8 10 ...
for (let even of take(10, sequence(x => 2 * x))) {
  console.log(even);
}

// take first 10 of square numbers; 1 4 9 16 25 ...
for (let square of take(10, sequence(x => x * x))) {
  console.log(square);
}

// take first 10 of power of 2 numbers: 2 4 8 16 32 ...
for (let pow2 of take(10, sequence(x => Math.pow(2, x)))) {
  console.log(pow2);
}
