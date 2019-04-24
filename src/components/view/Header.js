import React from 'react'


export default (props) => {
	return (
		<div style={style.headerStyle}>
			<img style={style.logo} src="https://skyhood-duunitori5.s3.amazonaws.com/static/web/images/logo-duunitori-rgb-horisontal-inverse.svg" alt="logo"/>
		</div>
	)

}

const style = {
	headerStyle:{
		height: 73,
		background:"#001e43",

	},
	logo:{
		marginLeft: 750,
		marginTop: 20,
		width: 130, 
	}
}