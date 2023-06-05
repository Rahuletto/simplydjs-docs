import React from 'react';
import styles from './HomepageFeatures.module.css';
import { BsFillStarFill, BsPeopleFill  } from 'react-icons/bs'
import { SiNpm } from 'react-icons/si'
import CodeBlock from '@theme/CodeBlock';


import { Tooltip } from '@material-ui/core';

function AboutMe() {

  return (
    <div className="text--center padding-horiz--md">

      <h4 className={styles.abtme} style={{ fontWeight: '500', fontSize: '30px' }}>Developed by <span className={styles.dev}>Rahuletto#0243</span></h4>


      <div className={styles.boxes}>
        <div>
          <a className="shield"  target='_blank'  href="https://www.npmjs.com/package/simply-djs"><img alt="npm version" src="https://img.shields.io/npm/v/simply-djs.svg?style=for-the-badge" /></a>
          <a className="shield"  target='_blank'  href="https://www.npmjs.com/package/simply-djs"><img alt="npm downloads" src="https://img.shields.io/npm/dt/simply-djs?style=for-the-badge" /></a>
        </div>
        <div>
          <a className="shield"  href="https://simplyd.js.org"><img alt="documentation" src="https://img.shields.io/badge/Simply--DJS-Documentation-406DBC?style=for-the-badge" /></a>
          <a className="shield"  target='_blank'  href="https://discord.gg/3JzDV9T5Fn"><img alt="discord support" src="https://img.shields.io/badge/Discord-Support-5865F2?style=for-the-badge&logo=discord" /></a>
        </div>

        <a href="https://discord.gg/3JzDV9T5Fn" target='_blank'><img alt="discord invite" src="https://invidget.switchblade.xyz/3JzDV9T5Fn" /></a>
      </div>


      <p className={styles.warning}>Note: This package is not a part of Discord.js and its completely a separate third party package.</p>


    </div>
  );
}


export default function HomepageFeatures() {
  return (
    <div className="container">
      <AboutMe></AboutMe>
      <section className={styles.features}>

        <div className="container">
          <h1>Why us ?</h1>
          <div className={styles.row}>

            <div className={styles.split}>
              <div>
                <h4>Designed for Developers</h4>
                <h2>Ship more quickly with powerful and easy-to-use functions.</h2>
                <p>Why waste your time coding the system by yourself when you can implement our solutions with one-line of code</p>

                <a href="/docs/intro" className={styles.linkBtn}>Get Started {">"}</a>
              </div>
              <div className={styles.code}>
                
              <CodeBlock language="js" style={{ minWidth: "-webkit-fill-available", maxWidth: "450px", height: "155px", overflow: "hidden", border: 0 }}>
              {`const simplydjs = require('simply-djs');\nsimplydjs.giveaway(interaction)`}</CodeBlock>

                <img className={styles.preview} alt="giveaway one-line" src="https://user-images.githubusercontent.com/71836991/173193328-d524dc59-c24f-487e-aeab-8148435d76d6.png"></img>
              </div>
            </div>

            <div style={{marginBottom: "100px"}} className={styles.split}>
              <div>
                <h4>Transparent by default.</h4>
                <h2>An Open-Source and Transparent Project that you can bet.</h2>
                <p>Do you think it's some shady code ? Don't worry, Our code is published in github. You can look into the code and bet on it.</p>
              </div>
              <div className={styles.code}>
                <a className={styles.repo} href="https://github.com/Rahuletto/simply-djs"><img alt="repository" src="https://gh-card.dev/repos/Rahuletto/simply-djs.svg?fullname=" /></a>
              </div>
            </div>

            <div style={{ marginBottom: "100px" }} className={styles.split}>
              <div>
                <h4>Bug-free<span className={styles.legal} >*</span> environment</h4>
                <h2>Code that is Rigorously tested and very stable</h2>
                <p>How do you think this package has nearly 400k+ downloads ? We maintain a strict testing to find bugs as idiotic as possible</p>

                <p className={styles.legal}>* This doesn{"'"}t apply to <pre>dev</pre>/<pre>beta</pre> versions</p>

                <a href="https://discord.gg/3JzDV9T5Fn" target='_blank' className={styles.linkBtn}>Stuck ? Get Help {">"}</a>
              </div>
              <div className={styles.code}>
                <h1 className={styles.bug}>🐞</h1>
              </div>
            </div>

            <div className={styles.split}>
              <div>
                <h4>Versatile Development.</h4>
                <h2>Don{"'"}t adapt. Let our systems adapt for you.</h2>
                <p>You saw us showcasing our one-line codes. But what about making it your own ? Worry no more, Make it yours with few tweaks.</p>
              </div>
              <div className={styles.code}>

              <CodeBlock language="js" style={{ minWidth: "-webkit-fill-available", maxWidth: "450px", height: "155px", overflow: "hidden", border: 0 }}>
              {`const simplydjs = require('simply-djs');\n\nsimplydjs.giveaway(interaction, {\n embed: {\n    title: "Giveaways",\n   description: "Are ya winnin son ?",\n   color: simplydjs.toRgb('#075FFF')\n }\n});`}</CodeBlock>
                
                <img alt="customization" className={styles.preview} src="https://user-images.githubusercontent.com/71836991/173193328-d524dc59-c24f-487e-aeab-8148435d76d6.png"></img>

              </div>
            </div>

          </div>
        </div>

        
      </section >

      <section className={styles.features}>
        <div className="container">
          <h1>Most trusted 3rd party module<span className={styles.legal} >**</span></h1>
          <div className={styles.statsHolder}>
            <div className={styles.stat}>
              <BsFillStarFill className={styles.icons} />

              <h2>69+ Github stars</h2>

            </div>
          
            <div className={styles.stat}>
              <SiNpm className={styles.icons} />

              <h2>400k+ Downloads</h2>

            </div>
          
            <div className={styles.stat}>
              <BsPeopleFill className={styles.icons} />

              <h2>404+ Server members</h2>

            </div>
          </div>

        </div>
        
      </section>
      <p className={styles.legal}>** As of <pre>1st May 2023</pre></p>

      
      <section className={styles.tryNow}>
        <h1>Try now !</h1>
        <p>The simplest way to build complex Discord bots.</p>
        <div>
        <button onClick={() => { navigator.clipboard.writeText("npm i simply-djs@latest") }}>
          <Tooltip title="Copy to clipboard" arrow>
            <code className={styles.import}>npm i simply-djs@latest</code>
          </Tooltip>
        </button></div>
      </section>

    </div >

  );
}


