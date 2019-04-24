import React from 'react'


const Logo = (props) => {
	return (
	  <div style={style.logo}>
		  <h6>{props.name}</h6>
	  </div>
  )
}

export default (props) => {
	const job = props
  const getMonth = (date) => new Date().getMonth()
	const getDay = (date) => new Date().getDate()
	const isLogo = job.logo_url
	return (
		<div style={style.jobPost}>
			<div style={{width:200, textAlign:'center',marginTop: 16}}>	{isLogo ? <img width="80" src={job.logo_url} alt="logo"/> : <Logo name={job.company_name}/>}</div>
      <div style={{width: 580}}>
        <h3>{job.heading}</h3>
        <p style={style.text}>{job.area_name}{" - Julkaistu"} {" "}{getDay(job.date_posted)}{"."}{getMonth(job.date_posted)}{"."}</p>
      </div>
		</div>
	)

}

const style = {
	jobPost: {
		padding: 16,
		background: '#ffff',
		border: '1px solid #ebf0f2',
    display:"flex",flexDirection:"row",
    width: 800, height: "100%"
	
	},
	logo:{
		padding: 6,
		background: '#ebf0f2',
		color:'#3e3e41',
		border: '1px solid #ddd',
    width: 80, height: 80, borderRadius: 80,
    textAlign: "center",
    marginLeft: 50
  },
  text:{
    color: '#9e9ea0',
    fontSize: 15
  }
}
