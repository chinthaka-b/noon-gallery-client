import MdHeart from 'react-ionicons/lib/MdHeart'
import MdHeartOutline from 'react-ionicons/lib/MdHeartOutline'

import config from '../config.json';

class Posts extends React.Component {

	state = {'post_liked' : this.props.post.userLiked};

	likePost = (postId) => {
		this.setState({post_liked : true}) // update state object when user liked on a post
		console.log(postId);

		fetch(`${config.api_url}/post/like/${postId}`, {
	        method: 'PUT',
	        headers: {
	          'Accept': 'application/json',
	          'Content-Type': 'application/json'
	        },
	        body: JSON.stringify({status:true})
	      })
	}

	unlikePost = (postId) => {
		this.setState({post_liked : false}) // update state object when user dislike on a post
		console.log(postId);

		fetch(`${config.api_url}/post/like/${postId}`, {
	        method: 'PUT',
	        headers: {
	          'Accept': 'application/json',
	          'Content-Type': 'application/json'
	        },
	        body: JSON.stringify({status:false})
	    })
	}

	render(){
	
		let likeBtn = '';
		if(this.state.post_liked == false) //if user not liked this post show default icon
		{
			likeBtn = <MdHeartOutline color="#fafafa" onClick={e => this.likePost(this.props.post.post_id)} />;
		}
		else{ //if user has liked this post show liked icon (red)
			likeBtn = <MdHeart color="#f00000" onClick={e => this.unlikePost(this.props.post.post_id)} />;
		}
	    return (
	    	<div className="post">
	    	
				<div >
					<div className="userinfo-section">
		  			<div className="profile-img">
				  				
	  					<img src={`${this.props.post.user.picUrl}`} alt={`${this.props.post.user.name}`} /> <p>{this.props.post.user.name} test {this.liked}</p>
					</div>
				</div>
					<div className="img-container">
						<div className="post-img">
		  				<img src={`${this.props.post.image.imgUrl}`} alt={`${this.props.post.image.title}`} />
						</div>

		  			<div className="post-info-section">
		  				<div>
				  			<div className="img-title-section">
					  			<div>{this.props.post.image.description}</div>
					  			<div>{this.props.post.image.title}</div>
				  			</div>
				  			<div className="spacer" />
				  			<div className="like-btn">
				  				{likeBtn}
				  			</div>
		  				</div>
		  			</div>
					</div>
	  			<div className="post-footer">
	  				<div className="post-likes-section">
	  					<div className="post-likes">
	  						<MdHeart fontSize="20px" color="#003cdc" /><p>{this.props.post.likes} Likes</p>
	  					</div>
	  				</div>
	  				<div className="post-description">
						<p>{this.props.post.description}</p>
					</div>
					<div className="hash-tags">
						<p>#{this.props.post.hashtags.join(' #')}</p>
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
	  	);
	}
}

Posts.getInitialProps = async ({ req }) => {
  const res = await fetch(`${config.api_url}/like`);
  const posts = await res.json();
  return { posts : posts };
};

export default Posts;