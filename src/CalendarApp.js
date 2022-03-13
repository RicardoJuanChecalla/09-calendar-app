import React from 'react';
import { Provider } from 'react-redux'
import { AppRouter } from './router/AppRouter';
import { store } from './store/store';
import './styles.css';


export const CalendarApp = () => {
  return (
    <Provider store={store}>
        <AppRouter />
    </Provider>
  )
}
