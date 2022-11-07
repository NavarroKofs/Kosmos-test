import { Component } from "react";
import ReactDOM from "react-dom";

const modalRoot = document.getElementById("modal-root");

class Dialog extends Component {
	constructor( props ) {
		super( props );

		this.el = document.createElement("div");
	}

	componentDidMount() {
		modalRoot.appendChild(this.el);
	}

	componentWillUnmount() {
		modalRoot.removeChild(this.el);
	}

	render() {
		this.el.style = `
			width: 100vw;
			height: 100vh;
			display: flex;
			justify-content: center;
			align-items: center;
			overflow: hidden !important;
			background-color: rgba(0, 0, 0, 0.8);
    	`;

		return ReactDOM.createPortal( this.props.children, this.el );
	}
}

export default Dialog;
