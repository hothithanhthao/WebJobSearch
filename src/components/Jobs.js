import React from 'react'
import axios from 'axios'

import JobCard from './view/JobCard';
import Header from './view/Header';


const baseUrl = 'https://duunitori.fi/api/v1/5d3fc27dec93f5e5105e3443edfc421bb57c3603/jobentries?tag=harjoittelija&format=json'


export default class Jobs extends React.Component {
  constructor(props) {
    super(props)
      this.state = {
        jobs: [],
      }
  }

  componentDidMount() {
    axios
      .get(baseUrl)
      .then(response => {
        this.setState({ jobs: response.data.results })
      })
  }

  render() {
    return (
      <div> 
        <Header/>
        <h2 style={style.title}>Avoimet työpaikat Harjoittelija</h2>
        <div style={{ marginLeft: 50}}>
          {this.state.jobs.slice(0,8).map((job) => (
            <JobCard heading={job.heading} area_name={job.area_name} logo_url={job.logo_url} date_posted={job.date_posted} company_name={job.company_name}/>
          ))}
        </div>
        
        <h4 style={style.text}><a style={style.linkText} href="https://duunitori.fi/tyopaikat/?haku=harjoittelija&alue=&order_by=date_posted">NÄYTÄ LISÄÄ TYÖAIKKOJA &#9002;</a></h4>
      </div>

    )
  }
}

const style = {
  title:{
    textAlign: 'center',
    marginBottom: 100
  },
  text:{
    marginBottom: 150,
    marginLeft: 350,
  },
  linkText:{
    color: '#01b0a5',
    textDecoration: 'none'
  }
}
    
