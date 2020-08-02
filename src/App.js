import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Layout from './hoc/Layout/Layout';
import Quiz from './containers/Quiz/Quiz';
import Guide from './containers/Guide/Guide';
import Form from './containers/Form/Form'
import GDPR from './containers/GDPR/GDPR';



function App() {
  return (
    <Layout>
        <Switch>
          <Route path="/leitfaden" component={Guide} />
          <Route path="/kontakt" component={Form} />
          <Route path="/datenschutz" component={GDPR} />
          <Route path="/" component={Quiz} />
        </Switch>
    </Layout>
  )
}

export default App
