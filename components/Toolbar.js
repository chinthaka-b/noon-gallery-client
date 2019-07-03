import MdHeart from 'react-ionicons/lib/MdHeart'
import MdHome from 'react-ionicons/lib/MdHome'

import Link from 'next/link';

const Toolbar = (props) =>  {
	return (
		<nav className="tool-bar">
			<div className="tool-bar-navigation">
				<div><Link href="/"><MdHome color="white" /></Link></div> {/* link to home/default page */}
				<div><Link href="/favourites"><MdHeart color="white" /></Link></div> {/*link to favorite posts page*/}
			</div>
			<style jsx>{`
				.tool-bar {
		          position : fixed;
		          left:0;
		          width : 100%;
		          background : #ff627e;
		          height:50px;
				  display: inline-block;
				  z-index: 999;
		        }

		        .tool-bar-navigation { //vertically centered
    				align-items: center;
    				height:100%;
    				display: flex;
		        }

		        .tool-bar-navigation > :first-child { //space between navbar home button and left
		        	margin-left: 30%;
		        }

		        .tool-bar-navigation > :last-child { //space between navbar favorites button and right side of the screen
		        	margin-right: 30%;
				    float: right;
				    right: 0;
				    position: absolute;
		        }

		        @media (max-width: 500px) { //navbar should visible in bottom for small screens
		        	.tool-bar {
		        		bottom:0;
		        	}
		        }

		        @media (min-width: 501px) { //navbar should visible on top of the page for large screens
		        	.tool-bar {
		        		top:0;
		        	}
		        }
			`}
			</style>
		</nav> 
	)
}

export default Toolbar;