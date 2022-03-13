import { combineReducers } from 'redux';
import { authReducer } from './authReducer';
import { canlendarReducer } from './calendarReduder';
import { uiRecuder } from './uiRecuder';

export const rootReducer = combineReducers({
    ui: uiRecuder,
    calendar: canlendarReducer,
    auth: authReducer
})
