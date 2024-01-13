/*
Intuition
The goal of the once function is to create a new function that ensures the original function is called at most once. The implementation achieves this by defining a variable that keeps track of whether the function has been called already, and returning a new function that checks whether the function has been called already before calling the original function.

Approach
The approach taken by the once function is to return a new function that wraps the original function and ensures that it is called at most once. The implementation achieves this by defining a variable called that keeps track of whether the function has been called already. The returned function checks whether called is true or false. If called is false, it calls the original function with the given arguments and stores the result in a variable result. It then sets called to true and returns result. If called is true, it simply returns undefined without calling the original function again.

Complexity
Time complexity:
The time complexity of the once function is O(1) for the returned function since it checks the value of a single boolean variable before calling the original function. The time complexity of the original function passed to once is not considered since it depends on the implementation of the function itself
*/

var once = function(fn) {
    let called = false;
    return function(...args){
        if(called){
            return undefined;
        }
        called = true;
        return fn(...args)
    }
};
