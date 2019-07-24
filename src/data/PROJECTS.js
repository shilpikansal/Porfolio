import weatherApp from '../assets/weather_app.PNG';
import dashboardApp from '../assets/Dashboard_app.PNG';
import emotionRecognitionApp from '../assets/emotion_recognition.png';
import fileShareApp from '../assets/file_sharing.png';
import keywordCounterApp from '../assets/keyword_counter.png';

const PROJECTS=[
  {
    id:1,
    title:"Weather App",
    image: weatherApp,
    description:"React app to find the weather conditions like temperature, humidity, visibility and more a given city",
    tech: "React.js",
    link:'http://react-weather-app-shilpi.s3-website.us-east-2.amazonaws.com'
  },
  {
    id:2,
    title:"DashBoard Application",
    image: dashboardApp,
    description:"This is a dashboard application which logs in a user and lets the user manage the list of daily tasks by adding/deleting or editing the current status of any task.",
    tech:"React.js, Redux, Spring Boot, Java",
    link:'http://dashboard-shilpikansal.us-east-1.elasticbeanstalk.com/'
  },
  {
    id:3,
    title:"N most popular hash tags across social media data",
    image: keywordCounterApp,
    description:"The project implements a max Fibonacci Heap data structure in java to find the N most popular hash tags appearing on social media such as Twitter and Facebook",
    tech:"Java",
    link:'https://github.com/shilpikansal/Keyword-Counter'
  },
  {
    id:4,
    title:"P2P file sharing application",
    image: fileShareApp,
    description:"A P2P file sharing application which incorporates some of the most interesting features of BitTorrent, including choking and unchoking mechanism. It can run on various machines and helps transfer large files in few minutes.",
    tech: "Java",
    link:''
  },
  {
    id:5,
    title:"Emotion Recognition",
    image: emotionRecognitionApp,
    description:"An OpenCV project in python that recognizes and categorizes various human emotions by analyzing their key facial points",
    tech: "Python",
    link:'https://github.com/shilpikansal/Emotion-Recognition'
  }

]

export default PROJECTS;
