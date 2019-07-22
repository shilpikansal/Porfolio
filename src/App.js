import React from 'react';
import profile from './assets/image_linkedIn.png'
import 'bootstrap/dist/css/bootstrap.min.css';
import Projects from './components/Projects';
import Social from './components/Social'
import Jobs from './components/Jobs'


class App extends React.Component
{
  state={ readMore:false };

  toggleReadMore = () => { this.setState({readMore:!this.state.readMore})
console.log("In toggle and readmore is", this.state.readMore)}
  render()
  {
    return(
      <div>
     <img src={profile} id="profile" />
      <h1> Hello! </h1>
      <p> My name is Shilpi </p>
      {
        this.state.readMore?(
          <div>
          <p> I am a Computer Science Masters student at University of Florida.
          <br/>
          I love to code
          <br/>
          My preferred programming language is Java
          </p>
          <button className="btn btn-outline-info"  onClick={this.toggleReadMore}>Show less</button>
          </div>
        ):(
          <button className="btn btn-outline-info" onClick={this.toggleReadMore}> Read More </button>
        )
      }
      <hr />
      <Projects />
      <hr />
      <Jobs />
      <hr />
      <Social />
      </div>
    )
  }
}

export default App;
