import React from 'react';
import {Switch, Route, Link} from 'react-router-dom'
import Card from './components/Card'
import Button from './components/Button'

function App() {
  return (
      <>
        <ul className="bg-gray-900 flex justify-start items-center p-5">
          <li>
            <Link className="font-normal text-gray-300 mr-5" to="/">Home</Link>
          </li>
          <li>
            <Link className="font-normal text-gray-300 mr-5" to="/cards">Cards</Link>
          </li>
          <li>
            <Link className="font-normal text-gray-300 mr-5" to="/buttons">Buttons</Link>
          </li>
        </ul>
        <Switch>
          <Route exact path="/">
            <Home/>
          </Route>
          <Route exact path="/cards">
            <Card/>
          </Route>
          <Route exact path="/buttons">
            <Button/>
          </Route>
      </Switch>
    </>
  );
}

function Home() {
  return (
    <div className="p-5">
      <h2 className="font-semibold text-2xl m-2">Welcome!!</h2>
      <p className="font-normal text-md m-2">
      React-Tailwind-Components is a project built by me as a learning step. 
      </p>
      <p className="font-normal text-md m-2">
      I recently stumbled upon TailwindCss and loved it!! Hence practicing it by building UI componets as often as I can. 
      </p>
      <h3 className="font-semibold text-lg m-2">
        Week II release contains: Card and Button UI components
      </h3>
    </div>
  );
}

export default App;
