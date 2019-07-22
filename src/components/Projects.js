import React, { Component } from 'react'
import PROJECTS from '../data/PROJECTS'

const Project = (props) =>
{
  return(
    <div style={{ display: 'inline-block', width: 400, margin: 20}}  className="align-top">
    <h4> {props.data.title} </h4>
    <img src={props.data.image} className="border" alt="Responsive image" style={{ width: 300, height: 200 }} />
    <p  className="text-justify"> {props.data.description} </p>
    <p className="text-info"> {props.data.tech} </p>
    <a href={props.data.link}> {props.data.link} </a>
    </div>
  )
}

const Projects = () =>
(
<div>
<h2> Projects </h2>
<div style={{display: 'block'}}>
{        PROJECTS.map(PROJECT => ( <Project key={PROJECT.id} data={PROJECT} /> ))   }
</div>
</div>
)

export default Projects;
