console.log("1- Basic synchronous & asynchronous code:");
console.log('A'); // synchronous
// setTimeout(fun, delay)
// () => {} : function() {function body}
setTimeout(() =>{
    console.log('B'); // macrotask
});
console.log('C'); //synchronous

// ###################################################################

console.log("2- Microtask with Promise & macrotask:");
console.log('A');
setTimeout(() => { // macrotask
    console.log('B');
}, 0);
Promise.resolve().then(() => {
    console.log('C'); // microtask
});
console.log('D');

// ###################################################################

console.log("3- Nested microtasks:");
Promise.resolve().then(() => {
  console.log('A');
  Promise.resolve().then(() => console.log('B'));
});
console.log('C');

// ###################################################################

console.log("4- setTimeout vs setImmediate (Node.js only):")
setTimeout(() => console.log('A'), 0); // Macrotask
setImmediate(() => console.log('B')); // Macrotask in Node.js

// ###################################################################

console.log("5- Event listener & Promise:");
document.body.addEventListener('click', () => {
    console.log("Click event"); // Macrotask
});
Promise.resolve().then(() => {
    console.log("Promise resolved"); // Microtask
});
console.log("End");

// ###################################################################

console.log("6- Interleaving Promises and setTimeout:");
setTimeout(() => console.log('A'), 0);
Promise.resolve().then(() => console.log('B'));
setTimeout(() => console.log('c'), 0);
Promise.resolve().then(() => console.log('D'));

// ###################################################################

console.log("7- Nested Promises with setTimeout: ");
console.log('A');

setTimeout(() => {
  console.log('B');
  Promise.resolve().then(() => {
    console.log('C');
  });
}, 0);

Promise.resolve().then(() => {
  console.log('D');
  setTimeout(() => {
    console.log('E');
  }, 0);
});

console.log('F');

// ###################################################################

console.log("8- Promises chaining with setTimeout: ");
console.log('1');

setTimeout(() => {
  console.log('2');
  Promise.resolve().then(() => {
    console.log('3');
  }).then(() => {
    console.log('4');
  });
}, 0);

Promise.resolve().then(() => {
  console.log('5');
}).then(() => {
  console.log('6');
});

console.log('7');

// ###################################################################

console.log("9- Mixing Promises resolution with delays: ");
console.log('Start');

setTimeout(() => {
  console.log('Timeout 1');
}, 0);

Promise.resolve().then(() => {
  console.log('Promise 1');
  setTimeout(() => {
    console.log('Timeout 2');
  }, 0);
  return Promise.resolve();
}).then(() => {
  console.log('Promise 2');
});

console.log('End');

// ###################################################################

console.log("10- Deeply nested Promises in a timer: ");
setTimeout(() => {
  console.log('Timer 1');
  Promise.resolve().then(() => {
    console.log('Microtask 1');
    Promise.resolve().then(() => {
      console.log('Microtask 2');
    });
  });
}, 0);

Promise.resolve().then(() => {
  console.log('Microtask 3');
});

console.log('Main Task');

// ###################################################################

console.log("11- Combining chained Promises and timer nesting: ");
console.log('Start');

setTimeout(() => {
  console.log('Timeout 1');
  Promise.resolve().then(() => {
    console.log('Promise 1');
  }).then(() => {
    console.log('Promise 2');
  });
}, 0);

Promise.resolve().then(() => {
  console.log('Promise 3');
  setTimeout(() => {
    console.log('Timeout 2');
  }, 0);
  return Promise.resolve();
}).then(() => {
  console.log('Promise 4');
});

console.log('End');