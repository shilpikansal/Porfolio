import React from 'react';
import JOBS from '../data/JOBS'


class Jobs extends React.Component
{
  state={showMore:{1:false,
                   2:false}}

  toggleReadMore = (val) =>
  {
    console.log("In here")
    this.setState(prevState => {
      let showMore = Object.assign({}, prevState.showMore);  // creating copy of state variable jasper
      showMore[val]=!showMore[val];                     // update the name property, assign a new value
      return { showMore };                                 // return new object jasper object
    })
  }

  doNothing =(val) =>{console.log("Nothing")}
  render()
  {
    console.log(this.state.showMore)
    return(
      <div>
        <h2> Work Experience </h2>
        {
          JOBS.map(JOB=>(
              <div style={{display:'inline-block', margin:50}}>
              <img src={JOB.image} className="img-fluid" className="border" alt="Responsive image" style={{width:150, height: 150, margin: 10}} />
              <p style={{margin:0}}> {JOB.company} </p>
              <p style={{margin:0}}> {JOB.title} </p>
              <p> {JOB.duration} </p>
              {

                this.state.showMore[JOB.id]?(
                  <div>
                  <ul>
                  {  JOB.desc.map(item=>(<li id="list"> {item} </li>))     }
                  </ul>
                  <button className="btn btn-outline-info" onClick={()=>this.toggleReadMore(JOB.id)}> Show Less </button>
                  </div>
                ):
                (<button className="btn btn-outline-info" onClick={()=>this.toggleReadMore(JOB.id)}> Show More </button>)
              }

              </div>
          ))
        }
      </div>
    )
  }
}

export default Jobs
