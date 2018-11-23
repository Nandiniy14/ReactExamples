import React from 'react'
import PropTypes from 'prop-types'
import { Provider } from 'react-redux'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import about from './about'

const Root = ({ store }) => (
  <Provider store={store}>
    <Router>
      <Route path="/about" component={about} />
    </Router>
  </Provider>
)
Root.propTypes = {
  store: PropTypes.object.isRequired
}
export default Root