
# Netflix GPT
<img width="1905" height="888" alt="Screenshot 2025-11-21 171612" src="https://github.com/user-attachments/assets/9e0169ee-117f-435d-a544-feac558103d9" />

## Project Setup & Development

- Created React app
- Configured Tailwind CSS
- Built Header component
- Implemented routing
- Built Login form
- Built Signup form
- Added form validation
- Used useRef hook
- Firebase setup and deployment
- Implemented Sign-in user API
- Created Redux store with userSlice
- Implemented Sign-out functionality
- Bug fix: signup profile picture update and displayName
- Bug fix: unauthorized users redirected to login page
- Bug fix: logged-in users redirected from login to browse
- Unsubscribed from onAuthStateChanged callback

## Movies & Data Handling

- Fetched data from TMDB Movies API
- Used TMDB access token for secure requests
- Retrieved now playing movies
- Stored movie data in Redux store
- Created movieSlice
- Planned browse page structure
- Built MainContainer and SecondaryContainer
- Updated store with movie and trailer data
- Embedded YouTube trailer with autoplay and mute
- Applied Tailwind styling on browse page
- Built secondary components
- Built MovieList component
- Built MovieCard component
- Used TMDB Image CDN URL

## Custom Hooks & Optimization

- Created usePopularMovies hook
- Implemented memoization for performance
- Added responsive design support

## GPT Features

- Built GPT Search feature
- Created GPT Search Bar
- Added multi-language support
- Supported languages: English, Hindi, Japanese
- Integrated Gemini API
- Fetched GPT-based movie suggestions from TMDB
- Created gptSlice and stored GPT results
- Reused MovieList component for GPT movie suggestions
- Added environment variables using .env file

---

# Features

## Authentication

- Login
- Signup
- Sign-in / Sign-up forms
- Redirect to browse page after authentication
- Secure header navigation

## Browse Page (After Authentication)

- Header
- Main movie display
- Background trailer with title and description
- Movie suggestions
- Multiple movie lists

## Netflix GPT

- GPT-powered search bar
- AI-based movie recommendations


# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
