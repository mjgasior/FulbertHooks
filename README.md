Fulbert with [React Hooks](https://reactjs.org/docs/hooks-intro.html).

## Long story short

I'm just playing around with this new cool thing called React Hooks based on the [documentation](https://reactjs.org/docs/hooks-intro.html). I'm trying to extract all of the hooks into a single file (hooks.js).

You can also check [this blog](https://www.robinwieruch.de/react-hooks-fetch-data/) to learn how to do fetching with hooks (but I did that also in my app with PokeAPI).

The app uses:
* useState
* useEffect (fetching data from PokeAPI and showing clicks in console)
* useReducer (this one is my fav - you can make small [reducers](https://redux.js.org/basics/reducers) for your functional components - we don't call them stateless any more ;) )
* useContext (with super cool [React Context](https://reactjs.org/docs/context.html))
