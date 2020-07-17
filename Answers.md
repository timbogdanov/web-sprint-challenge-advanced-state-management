1. What problem does the context API help solve?

- Context API allows you to modularly include your state trees througout your application

1. In your own words, describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?

- Objects that organize the descriptions of what happened
- Function that set the changes to the application state
- A store, stores all the application state (app state)

They are know as the single source of truth becuase the only way you can make a change in the UI is using all three parts of redux.

1. What is the difference between Application state and Component state? When would be a good time to use one over the other?

- Application state

  - state that is universal and can be accessed from anywhere in the app.
  - used in large applications where managing state can get cumberson

-Component state

- state that is only used in a component or childern components
- small apps or for simple functionality

1. Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?
   - Redux Thunk checks to see if we are trying to pass a function into our reducer, and if we are it will run dispatch and return an object
1. What is your favorite state management system you've learned and this sprint? Please explain why!
   - Redux, managing global states see simpler than managing many state trees throughout your app
