let store = {
  _state: {
    NewPostText: "Social network",
    sendMessage: "newLetter",
    messageData: [
      { id: 1, message: "hello, Bro!", countLike: 0 },
      { id: 2, message: "How are y ?", countLike: 23 },
      { id: 3, message: "hello, Bro!", countLike: 3 },
      { id: 4, message: "hello, Bro!", countLike: 43 },
      { id: 5, message: "hello, Br!", countLike: 42 },
    ],
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
  },
  getState() {
    return this._state;
  },
  _callSubscriber() {
    console.log("was changed");
  },
  addPost() {
    let newPost = {
      id: 6,
      message: this._state.NewPostText,
      countLike: 0,
    };
    this._state.messageData.push(newPost);
    this._state.NewPostText = "";
    this._callSubscriber(this._state);
  },
  addMessage(postMessage) {
    let messageNew = {
      id: 5,
      message: this._state.sendMessage,
    };
    this._state.letterData.push(messageNew);
    this._state.sendMessage = "";
    this._callSubscriber(this.state);
  },
  areaPost(postMessage) {
    this._state.NewPostText = postMessage;
    this._callSubscriber(this.state);
  },
  areaMessage(postMessage) {
    this._state.sendMessage = postMessage;
    this._callSubscriber(this.state);
  },
  subscriber(observer) {
    this._callSubscriber = observer;
  },
};

window.state = store._state;
export default store;
