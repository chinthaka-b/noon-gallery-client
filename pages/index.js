import Fetch from 'isomorphic-unfetch';

import Layout from '../components/Layout.js'
import Posts from '../components/Posts.js'

import config from '../config.json';

const Index = ({posts}) => {
		return (
			<Layout>
				
				<div>
			  	{JSON.parse(posts).map(post => (
			  		<Posts key={post.id} post={post} />
			  	))}
				</div>
			    <style jsx>{`
			      * {
			        box-sizing: border-box;
			      }
			    `}</style>
			</Layout>
		)
	
}

Index.getInitialProps = async ({ req }) => {
  const res = await fetch(`${config.api_url}/posts`);
  const response = await res.json();
  return { posts: JSON.stringify(response) };
};


export default Index;