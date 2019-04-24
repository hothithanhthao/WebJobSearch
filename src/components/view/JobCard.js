import React from 'react'
import Radium, { Style } from 'radium';

const Logo = (props) => {
	return (
	  <div style={style.circleLogo}>
		  <h6>{props.name}</h6>
	  </div>
  )
}

const JobCard = (props) => {
	const job = props
  const getMonth = (date) => new Date().getMonth()+1
	const getDay = (date) => new Date().getDate()
	const isLogo = job.logo_url
	return (
		<a style={style.jobPost} href={"https://duunitori.fi/tyopaikat/tyo/"+job.slug}>
			<div style={style.logo}>	{isLogo ? <img width="80" src={job.logo_url} alt="logo"/> : <Logo name={job.company_name}/>}</div>
      <div style={{width: 700}}>
        <h3>{job.heading}</h3>
        <p style={style.text}>{job.area_name}{" - Julkaistu"} {" "}{getDay(job.date_posted)}{"."}{getMonth(job.date_posted)}{"."}</p>
      </div>
		</a>
	)

}

const style = {
	jobPost: {
		padding: 16,
		background: '#ffff',
		border: '1px solid #ebf0f2',
    display:"flex",flexDirection:"row",
    width: "60%", height: "100%",
    minWidth: 350,
    textDecoration: 'none',
    color:'black',
    ":hover": {
      background: "#f9fffd"
    }
	
	},
	circleLogo:{
		padding: 6,
		background: '#ebf0f2',
		color:'#3e3e41',
		border: '1px solid #ddd',
    width: 70, height: 70, borderRadius: 70,
    textAlign: "center",
    
  },
  text:{
    color: '#9e9ea0',
    fontSize: 15
  },
  logo:{
    width:200, 
    marginTop: 16,
    display: 'flex',  
		justifyContent:'center', 
		alignItems:'center'
  }
}

export default Radium(JobCard);
