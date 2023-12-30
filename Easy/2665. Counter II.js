/*
2665. Counter II
Write a function createCounter. It should accept an initial integer init. It should return an object with three functions.

The three functions are:

increment() increases the current value by 1 and then returns it.
decrement() reduces the current value by 1 and then returns it.
reset() sets the current value to init and then returns it.
*/


function createCounter(init) {
    let count = init
    function increment(){
        return count += 1
    }
    function decrement() {
        return count -= 1
    }
    function reset(){
        return count = init
    }

    return {
        increment,
        decrement,
        reset
    }
}

/**
 * const counter = createCounter(5)
 * counter.increment(); // 6
 * counter.reset(); // 5
 * counter.decrement(); // 4
 */