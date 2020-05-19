import {createStore, combineReducers} from 'redux'
import profileReducer from './Profile-reducer';
import dialogReducer from './Dialog-reducer';
import sidebarReducer from './Sidebar-reducer';
import usersReducer from './Users-reducer'

let reducers = combineReducers({

        profilePage: profileReducer,
        dialogPage: dialogReducer,
        sidebar: sidebarReducer,
        users: usersReducer
})




let store = createStore(reducers);

export default store;