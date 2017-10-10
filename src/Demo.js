import React, {Component} from "react";

export const Chat = (props) => {
	return (
		<div>
			{props.msg}
			{props.children}
		</div>
	)
}
export class MyAwesomeComponent extends Component {
	render() {
		return (
			<div>
				ipsum
			</div>
		)
	}
}