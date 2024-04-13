// Import configureStore function from Redux Toolkit to create the Redux store
import { configureStore } from '@reduxjs/toolkit';
// Import newsReducer from the newsSlice module to include in the store's reducers
import newsReducer from '../features/news/newsSlice';

// Create and export the Redux store using configureStore
export default configureStore({
  reducer: { // Define reducers object with newsReducer as the news slice reducer
    news: newsReducer,
  },
});
