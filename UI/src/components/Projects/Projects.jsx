import React from 'react';
import Title from '../shared-components/Title';
import styles from './Projects.module.css';
import ReactPlayer from 'react-player';
import GitHubButton from '../shared-components/GitHubButton';
import Palindrome from './Palindrome';

function Projects() {
  return (
    <div className={styles.Projects}>
      <div className={styles.titleContainer}>
        <Title className={styles.title} title="This Web Page!" />
      </div>

      <h4 className={styles.text}>
        {' '}
        I made this page in React and am hosting it on S3. It goes through AWS
        Route 53/Cloudfront with a TLS cert. I have setup a serverless backend
        api-gateway lambda deployed using Terraform to show proof of general
        backend knowledge. It checks if a word is a palindrome, i.e. if it’s the
        same forward and reverse. Try it out!{' '}
      </h4>

      <Palindrome />

      <GitHubButton />

      <div className={styles.titleContainer}>
        <Title className={styles.title} title="CS50 Course Capstone" />
      </div>

      <h4 className={styles.text}>
        {' '}
        This is a very old CRUD project that utilized React and Django with jwts
        to make an app that keeps track of manufacturing scrap and displays cost
        data to the user. It's also on my github. I’ve learned a lot since
        making this, but I think it still holds merit.
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
