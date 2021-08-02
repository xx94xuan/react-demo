import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './index.css';
import App from './InitApp/App';
import LoadMore from './LoadMore/LoadMore';
import reportWebVitals from './reportWebVitals';

let divBlocksContent = []
for (let i = 0; i < 100; i++) {
  divBlocksContent.push(i+1);
}

ReactDOM.render(
  <Router>
     <div>
        <ul className='header-nav'>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/test">Test</Link>
          </li>
          <li>
            <Link to="/load-more">LoadMore</Link>
          </li>
        </ul>

        <hr />
      <Switch>
        <Route exact path="/">
          <App />
        </Route>
        <Route path="/test">
          <Test />
        </Route>
        <Route path="/load-more">
          <LoadMore divBlocksContent={divBlocksContent} />
        </Route>
      </Switch>
    </div>
  </Router>,
  document.getElementById('root')
);


function Test() {
  return (
    <div>
      <h2>Test</h2>
    </div>
  );
}

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
