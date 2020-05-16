import profileReducer from "./Profile-reducer";
import dialogReducer from "./Dialog-reducer";

let store = {
  _state: {
    profilePage: {
      messageData: [
        { id: 1, message: "hello, Bro!", countLike: 0 },
        { id: 2, message: "How are y ?", countLike: 23 },
        { id: 3, message: "hello, Bro!", countLike: 3 },
        { id: 4, message: "hello, Bro!", countLike: 43 },
        { id: 5, message: "hello, Br!", countLike: 42 },
      ],
      NewPostText: "Social network",
    },
    dialogPage: {
      usersData: [
        { id: 1, name: "Stas" },
        { id: 2, name: "Lera" },
        { id: 3, name: "Mama" },
        { id: 4, name: "Andrey" },
      ],
      letterData: [
        { id: 1, message: "Hy" },
        { id: 2, message: "How are you?" },
        { id: 3, message: "Good night" },
        { id: 4, message: "Good night,sir" },
      ],
      sendMessage: "newLetter",
    },
  },
  getState() {
    return this._state;
  },
  _callSubscriber() {
    console.log("was changed");
  },
  subscriber(observer) {
    this._callSubscriber = observer;
  },
  dispatch(action, text) {
    this._state.profilePage = profileReducer(this._state.profilePage , action);
    this._state.dialogPage = dialogReducer(this._state.dialogPage, action);
    this._callSubscriber(this._state);
  },
};




window.state = store._state;
export default store;
