// Define the newsSlice module to handle news-related state and asynchronous actions
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'; // Import necessary functions from Redux Toolkit
import axios from 'axios'; // Import Axios for making HTTP requests

const apiKey = '3d15e168f2514f98bcb1b30596a0cb97'; // Define API key

// Define an asynchronous thunk action to fetch news data from an external API
export const fetchNews = createAsyncThunk('news/fetchNews', async () => {
  // Use Axios to make a GET request to the news API with the provided API key
  const response = await axios.get(`https://newsapi.org/v2/top-headlines?country=us&apiKey=${apiKey}`);
  // Return only the articles data from the response, limiting to the first 10 articles
  return response.data.articles.slice(0, 10);
});

// Define the newsSlice, including initial state, reducers, and extra reducers to handle async actions
const newsSlice = createSlice({
  name: 'news', // Slice name
  initialState: { // Initial state with empty articles array, 'idle' status, and null error
    articles: [],
    status: 'idle',
    error: null,
  },
  reducers: {}, // No additional reducers defined
  extraReducers: (builder) => { // Define extra reducers to handle async actions
    builder
      .addCase(fetchNews.pending, (state) => { // Handle pending state of fetchNews action
        state.status = 'loading'; // Set status to 'loading'
      })
      .addCase(fetchNews.fulfilled, (state, action) => { // Handle successful completion of fetchNews action
        state.status = 'idle'; // Set status to 'idle'
        state.articles = action.payload; // Update articles array with payload (news data)
      })
      .addCase(fetchNews.rejected, (state, action) => { // Handle rejection of fetchNews action
        state.status = 'failed'; // Set status to 'failed'
        state.error = action.error.message; // Set error message based on action error
      });
  },
});

export default newsSlice.reducer; // Export reducer function generated by createSlice
