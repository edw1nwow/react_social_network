const addPost = 'addPost'
const areaPost = 'areaPost'

let initialState = {
  messageData: [
    { id: 1, message: "hello, Bro!", countLike: 0 },
    { id: 2, message: "How are y ?", countLike: 23 },
    { id: 3, message: "hello, Bro!", countLike: 3 },
    { id: 4, message: "hello, Bro!", countLike: 43 },
    { id: 5, message: "hello, Br!", countLike: 42 },
  ],
  NewPostText: "Social network",
}

const profileReducer = (state = initialState, action) => {
  switch(action.type) {
      case addPost:
        let newPost = {
            id: 6,
            message: state.NewPostText,
            countLike: 0,
          };
          state.messageData.push(newPost);
          state.NewPostText = "";
          return state
      case areaPost:
        state.NewPostText = action.text;
        return state;
      default:
          return state
  }
}

export const addPostCreator = () => ({ type: "addPost" });
export const onChangeAreaCreator = (text) => ({ type: "areaPost", text: text });






export default profileReducer;
