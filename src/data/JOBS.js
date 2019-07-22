import rbs from '../assets/rbs.png'
import accenture from '../assets/Accenture-red-arrow-logo.png'

const JOBS=[
  {
    id:1,
    image:rbs,
    company:"RBS",
    duration:"July 2017 to July 2018",
    title:"Senior Software Engineer",
    desc:[
      "Automated the database activity of maintaining tablespace and free space which resulted in cutting down manual effort to 1% and in reducing interface failure by 80%",
      "Automated the database health check activity by rebuilding indexes and updating statistics to improve the performance of the daily batch by 70%",
      "Analysed and modified existing scripts for enhancements",
      "Developed business logic from Informatica to PL SQL as part of migration activity",
      "Performed query optimization by using Indexes, Partitions, Hints and more"
    ]
  },
  {
    id:2,
    image:accenture,
    company:"Accenture",
    duration:"Feb 2014 to May 2017",
    title:"Software Engineer/Mentor",
    desc:[
      "Automated multiple processes by creating interfaces using integration of UNIX Shell Scripts, Oracle and Informatica",
      "Created one to one mapping between Informatica project and different work environments which cut down the manual effort to 0%, increased accuracy by 100% and saved time on an average of 5 hours a week",
      "Increased monetary profits for the business clients and changed the behaviour of an interface from ‘failure’ to ‘success’ by performing a data fix pending for more than 2 years",
      "Developed different database objects like tables, views, packages, stored procedure, functions and triggers",
      "Fixed critical bugs to ensure smooth functioning of the application in production",
      "Created various process and technical/functional documents for development of interfaces",
      "Interacted with the business clients to understand new requirements, issues and resolve them",
      "Mentored four senior and two junior colleagues to help them understand the application"
    ]
  }
]

export default JOBS;
