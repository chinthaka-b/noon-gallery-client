import Layout from '../components/Layout.js'
import Link from 'next/link';
import MdHeart from 'react-ionicons/lib/MdHeart'
import MdHeartOutline from 'react-ionicons/lib/MdHeartOutline'

const posts = [
    {
    	id: 1,
    	description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    	likes:20,
    	hashtags : ['toyota','corolla','E90'],
    	image : {
    		title: 'AE92',
	    	description: 'Toyota Corolla Sedan',
	    	imgUrl: '../static/img-1.jpeg',
    	},
    	user : {
	    	picUrl : '../static/profile-2.jpg',
	    	name : 'iambatman',
    	},
    	userLiked : false
    },
    {
    	id: 2,
    	description: 'Cras malesuada eu magna vitae pharetra. Donec tempus ipsum in lacinia iaculis.',
    	likes:15,
    	hashtags : ['datsun','510','sss'],
    	image: {
    		title: 'SSS',
    		description : 'Datsun 510',
    		imgUrl: '../static/img-5.jpeg',
    	},
    	user : {
	    	picUrl : '../static/profile-1.jpg',
	    	name : 'jarvis',
    	},
    	userLiked : false
    },
    {
    	id: 3,
     	description: 'Donec sit amet justo ut nisl pulvinar dapibus. Praesent placerat turpis at turpis rhoncus pharetra.',
    	likes:35,
    	hashtags : ['trueno','hachiRoku','panda','corolla','initialD'],
     	image: {
    		title: 'Trueno',
     		description: 'Toyota Corolla',
    		imgUrl: '../static/img-7.jpeg',
     	},
     	user : {
	    	picUrl : '../static/profile-3.png',
	    	name : 'sultanofspeed',
     	},
    	userLiked : false

    },

  ];

const getPosts = () => {
  return posts;
}

let likeButton;
let unlikeButton;

const Post = ({post}) => {
		unlikeButton = <MdHeart color="#f00000" onClick={() => unlikePost(post.id) }  />;
	if(post.userLiked){
	}
	else{
	}
		likeButton = <MdHeartOutline color="#fafafa" onClick={() => likePost(post.id) } />;

	return (
  		<div className="post">
  			<div >
  				<div className="userinfo-section">
		  			<div className="profile-img">
	  					<img src={`${post.user.picUrl}`} alt={`${post.user.name}`} /> <p>{post.user.name}</p>
					</div>
				</div>
  				<div className="img-container">
  					<div className="post-img">
		  				<img src={`${post.image.imgUrl}`} alt={`${post.image.title}`} />
  					</div>

		  			<div className="post-info-section">
		  				<div>
				  			<div className="img-title-section">
					  			<div>{post.image.description}</div>
					  			<div>{post.image.title}</div>
				  			</div>
				  			<div className="spacer" />
				  			<div className="like-btn">
				  				{likeButton}
				  				{unlikeButton}
				  			</div>
		  				</div>
		  			</div>
  				</div>
	  			<div className="post-footer">
	  				<div className="post-likes-section">
	  					<div className="post-likes">
	  						<MdHeart fontSize="20px" color="#003cdc" /><p>{post.likes} Likes</p>
	  					</div>
	  				</div>
	  				<div className="post-description">
						<p>{post.description}</p>
					</div>
					<div className="hash-tags">
						<p>#{post.hashtags.join(' #')}</p>
					</div>
					<div className="view-comments">
						<p>View 12 comments</p>
					</div>
  				</div>

  			</div>
		  	<style jsx>{`

		  		* {
					box-sizing: border-box;
				}

				.post {
			      	position: relative;
				    text-align: left;
			    }

			    .post:not(:last-child) {
					border-bottom: 1px solid #e8e8e8;
					margin-bottom: 5px;
				}

		  		.userinfo-section {
					display: inline-block;
				    float: left;
				    width: 100%;
				    height: 40px;
				    left: 0;
				   	margin-left: 10px;
				}
		      	
		  		.profile-img {
		      		align-items: center;
    				height:100%;
    				display: flex;
		      	}

				.profile-img img {
					width:25px;
					border-radius: 50%;
				}
		      	
			    .post-img img {
			    	width:100%; /*give post images the window width */
			    	height : auto;
			    }

			    .profile-img p {
					margin-left: 10px;
					color: #003cdc;
					cursor: pointer; //to make it look like clickable
					font-weight: 600;
				}

			    .post-info-section {
			      	position: absolute;
				    left: 10px;
				    text-align: left;
				    color: #fafafa;
				    width: 100%;
				    margin-top: -45px
			    }

			    .post-info-section div {
			    	display:flex
			    }

			    .post-info-section .spacer {
			    	flex:1;
			    }

			    .img-title-section {
			    	display: block !important; ;
				    float: left;
			    }

			    .img-title-section div:last-child {
			    	font-weight : 1000;
			    }

			    .post-footer {
					display: block;
				    width: 100%;
				    left: 0;
				   	margin-left: 10px;
				    font-size:15px;
				}

				.post-footer > *:first-child {
			    	margin-top: -15px;
				}

				.post-footer > * {
				    margin-top: -15px;
				}

				.post-footer > *:last-child {
			    	margin-top: -5px;
				}

				.post-likes {
		      		align-items: center;
    				height:100%;
    				display: flex;
    				font-size: 13px;
		      	}

		      	.post-likes p {
					margin-left: 5px;
					color: #003cdc;
					font-weight: 600;
				}

			    .like-btn {
					margin-right: 25px;
			    }

				.post-footer .hash-tags {
					color: #6784d2;
				}

			    .post-footer .post-description p {
			    	color : #918484;
			    }

			    .post-footer .view-comments p {
			    	color : #b7adad;
			    }
		  	`}
		  	</style>
	  	</div>
	)
}

const likePost = (postId) => {
	getPostById(postId).userLiked = true;
	console.log(getPostById(postId).userLiked);
}

const unlikePost = (postId) => {
	getPostById(postId).userLiked = false;
	console.log(getPostById(postId).userLiked);
}

const getPostById = (id) => {
	return getPosts().find(post => post.id == id);
}

export default function Index() {
	return (
		<Layout>
			<div>
		  	{getPosts().map(post => (
		  		<Post key={post.id} post={post} />
		  	))}
			</div>
		    {/*<Link href="/about">
			  <button>Go to About Page</button>
			</Link>*/}

		    <style jsx>{`
		      * {
		        box-sizing: border-box;
		      }
		    `}</style>
		</Layout>
	)
};