import Fetch from 'isomorphic-unfetch';

import Layout from '../components/Layout.js'
import Posts from '../components/Posts.js'

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
  const res = await fetch('http://localhost:3001/posts');
  const response = await res.json();
  return { posts: response };
};


export default Index;