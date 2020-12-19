# Cinema Search!

![Home Page](./images/cinemaSearch.png)

## Getting started

- Fork this repository

### `yarn`

- Runs the package manager to install dependencies
- Create an .env file in the root directory
- Ensure if adding to git, add .env to your .gitignore before adding your API key
- Create a variable in the .env file

  - Ex: REACT_APP_API_KEY="sfku3489sdfoin3a9sof8hel3aelqqk3"
  - The above is an example API key, please go to [https://developers.themoviedb.org/3/getting-started/introduction](https://developers.themoviedb.org/3/getting-started/introduction) to get your API key and replace it with what you see above

## Challenges

A challenge I came across when designing Cinema Search was injecting styling into components with styled components based on props. It was as simple as reading the docs to understand it properly and trying out different things. This was a great learning experience with styled components as I had only used it a few times before.

Another challenge I had come across was state changes on the useEffect for the API call and a bug that persisted:

- Searching a term that has multiple pages, going to a higher numbered page, then searching a second term that does NOT have as many pages, and the state remains at the page state, Ie: 42 / 1 (CurrentPage / TotalPages). The solutions I had tried caused unwanted behavior within the useEffect. I was unable to set the current state back to 1 on keypress after checking if the query is an emtpy string (nothing in the input). This bug cost me the most time which left me with minimal testing towards the end. After setting up the components, coding the core functionality, and then running into a few bugs like the one mentioned above I started to lose time to flesh out fully comprehensive unit tests when I should have written the tests at first.

## Reasoning Behind Design

I chose the context API to umbrella any components that rely on that state and make it easier to add on features without passing down too many props.

I chose styled components because it is tech I haven't worked with too often, but I really enjoy it! It reminds me of Vue with having everything within one file. The breakpoints file was to basically have a theme of media queries so every component can pull from the responsiveness. The theme.js file was also for the same reasoning. Anything common I found, I grouped together when it made sense, like the Button component for example. I had considered putting the Searchbar component within common as well, but had thought they only pertained to the MovieList itself.

## Future Improvements

If I had more time, I would have dug into a couple bugs I had found before adding new features on top. The bugs that stood out to me:

- The CurrentPage / TotalPages mentioned above in the 'Challenges' section
- Clicking the 'Next' or 'Previous' page buttons too rapidly sometimes causes a loop in the counting logic

Once I had smoothed out those bugs, I would have wanted to:

- Page number query filters on keypress and not on 'Go!' button onClick
- Move the controls to the bottom for mobile into a sticky footer so they are closer to the thumbs
- Add more to the styling

Thank you, Group Nine Media, for the opportunity!

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
