import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components/app';
import PostsIndex from './components/posts_index';

// if a route only matches the parent, then show indexRoute(default component shown)
export default (
	<Route path="/" component={App}>
		<IndexRoute component={PostsIndex} />
	</Route>
);