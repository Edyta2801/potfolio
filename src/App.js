import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Projects from './components/views/Projects/Projects.js';
import Contact from './components/views/Contact/Contact.js';
import About from './components/views/About/About.js';
import styles from './App.scss';
import { AnimatedSwitch } from 'react-router-transition';
import MainLayout from './components/layout/MainLayout/MainLayout.js'
import Home from './components/views/Home/Home.js';



class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <MainLayout>
          <AnimatedSwitch
            atEnter={{ opacity: 0, offset: 200 }}
            atLeave={{ opacity: 0 }}
            atActive={{ opacity: 1, offset: 0 }}
            className={styles.switchWrapper}
            mapStyles={styles => ({
              opacity: styles.opacity,
              transform: `translateY(${styles.offset}px)`,
            })}
          >
            <Route exact path="/" component={Home} />
            <Route exact path="/projects" component={Projects} />
            <Route exact path="/contact" component={Contact} />
            <Route exact path="/about" component={About} />
          </AnimatedSwitch>
        </MainLayout>
      </BrowserRouter>
    );
  }
}

export default App;