const addPost = 'addPost'
const areaPost = 'areaPost'

const profileReducer = (state, action) => {
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
