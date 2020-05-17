const areaMessage = 'areaMessage';
const addMessage = 'addMessage';


let initialState = {
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
}

const dialogReducer = (state = initialState, action) => {
 switch(action.type){

    case addMessage: {
        let messageNew = {
            id: 5,
            message: state.sendMessage,
          };
        let stateCopy = {...state};
        stateCopy.letterData = [...stateCopy.letterData];
        stateCopy.letterData.push(messageNew)
        stateCopy.sendMessage = "";
          return stateCopy;
        }
    case areaMessage:{
      let copyState = {...state};
      copyState.sendMessage =  [...state.sendMessage]     
       copyState.sendMessage = action.sendMessage
        return copyState;
    }
    default: 
    return state;
 }  
 
}



export const addMessageCreator = (add) => ({
    type: "addMessage",
    sendMessage: add,
  });
  export const areaMessageCreator = (add) => ({
    type: "areaMessage",
    sendMessage: add,
  });

export default dialogReducer;
