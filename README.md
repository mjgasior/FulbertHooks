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

Additionally to read:
* [5 Ways to animate a ReactJs app in 2019](https://medium.com/@dmitrynozhenko/5-ways-to-animate-a-reactjs-app-in-2019-56eb9af6e3bf)
* [Developing UI](http://mrmrs.cc/writing/2016/04/21/developing-ui/)
* [React as a UI Runtime](https://overreacted.io/react-as-a-ui-runtime/)
* [CSS](http://estelle.github.io/)
* [Specificity](http://www.standardista.com/css3/css-specificity/)
* [The Shapes of CSS](https://css-tricks.com/the-shapes-of-css/)