const areaMessage = 'areaMessage';
const addMessage = 'addMessage';

const dialogReducer = (state, action) => {
 switch(action.type){

    case addMessage:
        let messageNew = {
            id: 5,
            message: state.sendMessage,
          };
          state.letterData.push(messageNew);
          state.sendMessage = "";
          return state;
    case areaMessage:
        state.sendMessage = action.sendMessage;
        return state;
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
