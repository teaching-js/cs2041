// Excercise 1:
// Implement a class StatefulClass that has
// - A method 'setState' which updates the state to the attribute passed in as an argument. If the provided attribute is not one of the defined states, the current state is not updated.
// - A method 'getSnapshotBeforeUpdate', which before the state is updated, should be called with the previous properties and state. If the state is not updated, this function is not called.
// - A method 'stateDidUpdate', which after the state is updated, is called. This method may or may not exist. If the state is not updated, this function is not called.
// - A method 'render', which is called at the end of a state change

class StatefulClass {
  constructor(props) {

  }

  setState = (newState) => {

  }

  render = () => {
    return '';
  }
}

module.exports = StatefulClass;
