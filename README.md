# React Context Practice

## Set Up
- Fork and clone this repo
- Run `npm ci` to install dependencies
- `npm run dev` to run the app

## Instructions

You'll find `PostList` and `CreatePostForm` components in the `src/components` directory. Currently, these have props that get provided from the `src/App.jsx` component.

1. Create a new file named `PostsContext`. In this file, use the `createContext` function to create a context called `PostsContext` and export it.
2. In the App component, import your `PostsContext`.
3. Replace the react fragments ( `<></>` ) in the App component with your `<PostsContext.Provider></PostsContext.Provider>`
4. Add a `value` prop to the PostsContext.Provider, giving it an object that holds the `posts` state array and `setPosts` state function.
5. Remove the prop drilling from the PostList and CreatePostForm components and replace it with context using the `useContext` hook. If everything went right, the app should function exactly the same as it did.