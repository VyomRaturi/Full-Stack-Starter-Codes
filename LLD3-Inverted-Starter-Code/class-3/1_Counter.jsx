// Task Overview:
// Build a simple Counter component where:
//     Buttons are provided to increment, decrement, and reset the count.
//     The initial count is passed as a prop to the Counter component.
//     The count cannot be decremented below 0.

const Counter = () => {

  return (
    <div>
      <h2>Count: </h2>
      <button>Increment</button>
      <button>Decrement</button>
      <button>Reset</button>
    </div>
  );
};

export default Counter;