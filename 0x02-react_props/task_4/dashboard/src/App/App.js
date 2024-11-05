import React from 'react';
import './App.css';
import logo from '../assets/holberton-logo.jpg';
import { getFooterCopy, getFullYear } from '../utils/utils';
import Notifications from '../Notifications/Notifications';
import Login from '../Login/Login';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import CourseList from '../CourseList/CourseList';

function App() {
  const listCourses = [
    {id: 1, name: 'ES6', credit: 60},
    {id: 2, name: 'Webpack', credit: 20},
    {id: 3, name: 'React', credit: 40}
  ];
  const listNotifications = [
    { id: 1, html: { __html: 'Notification 1' }, type: 'default', value: 'New course available' },
    { id: 2, html: { __html: 'Notification 2' }, type: 'urgent' },
    { id: 3, html: { __html: 'Notification 3' }, type: 'urgent', value: 'New resume available' },
  ]
  const isLoggedIn = false;
  return (
    <>
    <Notifications listNotifications={listNotifications} />
    <div className="App">
      <div className="App-header">
        <Header />
      </div>
      <div className="App-body">
        {isLoggedIn ? <CourseList listCourses={listCourses}/> : <Login />}
      </div>

      <div className="App-footer">
        <Footer />
      </div>
    </div>
    </>
  );
}

export default App;