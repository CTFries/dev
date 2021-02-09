import styles from '../styles/Footer.module.css'
import React, {Component} from 'react'

export default class Footer extends React.Component {
  render() {
    return (
      <footer className={styles.footer}>
        <a href="https://twitter.com/ctfries">Twitter</a>
        <a href="https://linkedin.com/in/ctfries">LinkedIn</a>
        <a href="https://github.com/ctfries">Github</a>
        <a href="https://blog.ctfries.dev/">Blog</a>
        <p></p>
    </footer>
    );
}
}