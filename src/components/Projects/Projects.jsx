import React from 'react';
import Title from '../shared-components/Title';
import styles from './Projects.module.css';
import ReactPlayer from 'react-player';
import GitHubButton from '../shared-components/GitHubButton';

function Projects() {
  return (
    <div className={styles.Projects}>
      <Title className={styles.title} title="This Web Page!"  />
      <h4 className={styles.text}>
        {' '}
        I made this page in React after creating a Figma for it. I am hosting
        this site on AWS. As I add to it, you’ll see more. I plan to have this
        connected to a server-less backend for an api gateway and lambda just as
        a simple proof of backend knowledge.{' '}
      </h4>
      <GitHubButton />
      <Title className={styles.title} title="CS50 Course Capstone" />
      <h4 className={styles.text}>
        {' '}
        This is a very old project that utilized React and Django with jwts to
        make an app that keeps track of manufacturing scrap and displays cost
        data to the user. I’ve learned a lot since making this, but I think it
        still holds merit.
      </h4>
      <div className={styles.youtubeVideo}>
        <ReactPlayer
          className="player"
          width="80%"
          height="100%"
          url="https://www.youtube.com/watch?v=I0eGY5WpmKs?autoplay=1&mute=1"
        />
      </div>
    </div>
  );
}

export default Projects;
