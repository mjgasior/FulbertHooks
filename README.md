Fulbert with [React Hooks](https://reactjs.org/docs/hooks-intro.html).

## Long story short

I'm just playing around with this new cool thing called React Hooks based on the [documentation](https://reactjs.org/docs/hooks-intro.html). 
Every component has its own custom hooks in a seperate file (that means this useContext in Main.js doesn't count, because its not custom :D ).

You can also check [this blog](https://www.robinwieruch.de/react-hooks-fetch-data/) to learn how to do fetching with hooks (but I did that also in my app with PokeAPI) and easy to understand React Hook recipes [by Gabe Ragland](https://usehooks.com/).

The app uses:
* useState
* useEffect - fetching data from PokeAPI and showing clicks in console
* useReducer - this one is my fav - you can make small [reducers](https://redux.js.org/basics/reducers) for your functional components (we don't call them stateless any more ;) ) - also used [immutability helper](https://github.com/kolodny/immutability-helper)
* useContext (with super cool [React Context](https://reactjs.org/docs/context.html))
