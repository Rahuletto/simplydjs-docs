import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import styles from './index.module.css';
import HomepageFeatures from '../components/HomepageFeatures';
import { Tooltip } from '@material-ui/core';

function HomepageHeader() {

  return (
    <>
    <div className={styles.dots}></div>
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className={clsx('container', styles.container)}>

        <h1 className={styles.subtitle}>The <span className={styles.simplest}>simplest</span> way to build complex Discord bots.</h1>

        <p className={styles.about}>SimplyDJS is a "third party" module which uses Discord.JS to implement some of the complex systems in <span className={styles.simplest}>few-lines</span></p>
        <button onClick={() => { navigator.clipboard.writeText("npm i simply-djs@latest") }}>
          <Tooltip title="Copy to clipboard" arrow>
            <code className={styles.import}>npm i simply-djs@latest</code>
          </Tooltip>
        </button>

        <h3 className={styles.madefor}>Made for Discord.JS v14</h3>

      </div>

    </header>

    <div>
      <span className={styles.halo1}></span>
      <span className={styles.halo2}></span>
    </div>


  </>
  );
}

export default function Home() {
  return (
    <Layout
      title={`SimplyDJS`}
      description={`The easiest way to build sophisticated systems in your Discord bots.`}>
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
