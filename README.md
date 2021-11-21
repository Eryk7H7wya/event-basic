# event-basic
Event registration app

## Tools used

- [Create React App](https://github.com/facebook/create-react-app) to generate the app.
- [Namelix](https://namelix.com/) to generate app name.


## Task

```
1. Create a simple event registration app that consists of form and success pages.

The form should have the following inputs:

Event name
Address (fetched from ‘Google Places Autocomplete’ api)
Calendar date input
All inputs are required and should have appropriate validations.

The error messages should be clearly visible.

 

2. On form submit, route to a new success page and print submitted form values. 

 

3. (Bonus) Convert a given date into an interactive ‘time left’ counter.The ideal stack React + Typescript

 

Front end UI library of your choice
We recommend using a form handler and context for global data storage.
Particular interest will be paid to component structure and clean, self explanatory code.
Attention to detail and ability to stand back behind the chosen stack would be great.

```

## Plan / TODO

1. [x] Create React app
1. [x] Add TS support
1. [x] Add simple form controls
1. [x] Handle form submit and save results
1. [ ] Add validation
1. [ ] Add Router
1. [ ] Display submitted results on the different page
1. [ ] Add Google Places autocomplete
1. [ ] Add some styling

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

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

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
