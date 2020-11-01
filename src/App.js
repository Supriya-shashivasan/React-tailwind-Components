import React from 'react';
import {Switch, Route, Link} from 'react-router-dom'
import Card from './components/Card'

function App() {
  return (
      <div>
        <ul className="bg-gray-900 flex justify-start items-center p-5">
          <li>
            <Link className="font-normal text-gray-300 mr-5" to="/">Home</Link>
          </li>
          <li>
            <Link className="font-normal text-gray-300 mr-5" to="/cards">Card Designs</Link>
          </li>
        </ul>
        <Switch>
          <Route exact path="/">
            <Home/>
          </Route>
          <Route exact path="/cards">
            <Card/>
          </Route>
      </Switch>
    </div>
  );
}

function Home() {
  return (
    <div className="p-5">
      <h2 className="font-semibold text-2xl">Welcome!!</h2>
      <p className="font-normal text-md">
      React-Tailwind-Components is a project built by me as a learning step. I recently stumbled upon TailwindCss and loved it!! Hence practicing it by building UI componets as often as I can. This initial release contains 3 Card templates.
      </p>
    </div>
  );
}

export default App;
