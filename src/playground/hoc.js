import React from 'react';
import ReactDOM from 'react-dom';

const Info = (props) => (
	<div>
		<h1>Info</h1>
		<p>This Info is: {props.info}</p>
	</div>
);

const withAdminWarning = (WrappedComponent) => {
	return (props) => (
		<div>
			{props.isAdmin && <p>This is private Info Do not Share!!!</p>}
			<WrappedComponent {...props} />
		</div>
	);
};

const requireAuthentication = (MessageAfter) => {
	return (props) => (
		<div>
			{props.isAuthenticated ? (<MessageAfter {...props} />) : (<p>You must require Authentication</p>)}
		</div>
	);
};

const AdminInfo = withAdminWarning(Info);
const AuthInfo = requireAuthentication(Info);

// ReactDOM.render(<AdminInfo  isAdmin={true} info="These are the details"/>, document.getElementById('app'));
ReactDOM.render(<AuthInfo isAuthenticated={true} info="These are the details" />, document.getElementById('app'));
console.log('hoc.js is running');