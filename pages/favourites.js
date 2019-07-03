import Fetch from 'isomorphic-unfetch';

import Layout from '../components/Layout.js'
import Postsliked from '../components/Postsliked.js'

const Favourites = ({posts}) => {

	var likedHtml = '';
	if(posts.length > 0)
	{
		likedHtml = posts.map(post => (
	  		<Postsliked key={post.id} post={post} />
	  	))
	}
	else{
		likedHtml = 
		<div>
			<h1>Nothong to show here!</h1>
			<style jsx>{`
				text-align: center;
	    		margin-top: 150px;
	    	`}</style>
		</div> //if there's no liked posts show this msg
	}

	return (
		<Layout>
			
			<div>
		  	{likedHtml}
			</div>
		    <style jsx>{`
		      * {
		        box-sizing: border-box;
		      }
		    `}</style>
		</Layout>
	)
	
}

Favourites.getInitialProps = async ({ req }) => {
  const res = await fetch('http://localhost:3001/posts/liked');
  const response = await res.json();

  return { posts: response };
};


export default Favourites;