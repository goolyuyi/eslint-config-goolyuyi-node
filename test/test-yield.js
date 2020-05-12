function* foo(index) {
}

const iterator = foo(0);

console.log(iterator.next().value)
// expected output: 0

console.log(iterator.next().value);
// expected output: 1
