import React, { Component } from 'react';
import { PostLayout } from './Layout/PostLayout/PostLayout';
import { Layout } from './Layout/Layout';
import { Route, BrowserRouter } from 'react-router-dom';
import { Comments } from './Layout/Comments/Comments';
import { NewPost } from './Layout/NewPost/NewPost';

export default class App extends Component {
  static displayName = App.name;
  render() {
    return (
      <BrowserRouter>
        <Layout>
          <Route exact path='/' component={PostLayout} />
          <Route exact path='/comments' component={Comments} />
          <Route exact path='/newPost' component={NewPost} />
        </Layout>
      </BrowserRouter>
    );
  }
}
