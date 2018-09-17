// Excercise 3:
// Sometimes we don't want to keep updating our state, so we would like to update the state every given milliseconds
// extend the state class from excercise 1. Add an extra method 'setStateInBatch' so that the objects updates its state with a 500ms delay and if there's any updates within that 500 milliseconds they should be merged to one single call to the setState function,

class BatchUpdateState extends State {
  setStateInBatch = () => {

  }
}
