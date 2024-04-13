# News App

## Technologies Used
- HTML
- CSS
- JavaScript
- React
- Redux Toolkit
- AJAX (fetch API)
- NewsAPI (for fetching news data)

## Approach
This project is a simple news app built with React and Redux Toolkit. It utilizes the NewsAPI to fetch news articles and displays them in a grid layout using React components. Here's a breakdown of the approach taken:
1. Set up the project structure using Vite.
2. Implemented Redux Toolkit for state management.
3. Created a Redux slice to handle news-related actions and reducers.
4. Developed a React component, `NewsList`, to display the fetched news articles.
5. Styled the app using CSS to create a visually appealing layout.
6. Made use of AJAX (fetch API) to fetch news data from the NewsAPI.
7. Rendered the fetched data into the DOM as news cards.

## Live Site
The live site for this project can be accessed at [News App](https://example.com).

(this app has not been set up to be live yet... per instructer the grade will not be affected if its not live.)

## Usage Instructions
To run the project locally:
1. Clone this repository to your local machine.
2. Navigate to the project directory in your terminal.
3. Install dependencies using `npm install`.
4. Start the development server using `npm run dev`.
5. Open your browser and visit `http://localhost:3000` to view the app.

## Unsolved Problems
- Pagination: Currently, the app fetches and displays a limited number of news articles. Implementing pagination could allow users to view more articles.
- Error Handling: The app does not handle errors gracefully. Implementing error handling logic could improve user experience in case of API failures.


# react-sba
