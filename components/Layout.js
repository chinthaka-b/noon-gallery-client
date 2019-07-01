import Header from './Header';
import Toolbar from './Toolbar';

export default function Layout(props) {
	return (
		<div>
			<Header /> {/*page header*/}
			<Toolbar /> {/* tool bar element */}
			<div className="child-elements">
				{props.children}{/* all the other pages/components goes here */}
      		</div>
			{/*grid system styles */}
			<style jsx>{`
			* {
			  box-sizing: border-box;
			}

			@media (max-width: 500px) { //keep margine with navbar when it is at bottom
	        	.child-elements {
	        		margin-bottom:55px;
	        	}
	        }

	        @media (min-width: 501px) { //keep margine with navbar when it is at top
	        	.child-elements {
	        		margin-top:55px;
	        	}
	        }
			`}</style>
		</div>
	)
}