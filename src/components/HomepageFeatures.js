import React from 'react';
import clsx from 'clsx';
import styles from './HomepageFeatures.module.css';

const FeatureList = [
  {
    title: 'Why ?',
    description: (
      <>
        <li>Simplifies things in discord.js</li>
        <li>Fastest Support ever</li>
        <li>Ultra Customizable</li>
        <li>Beginner Friendly</li>
        <li>Easier than other packages</li>
        <li>Auto Slash Recognition</li>
      </>
    ),
  },
  {
    title: '',
    description: (
      <>
      </>
    ),
  },
  {
    title: 'Stats',
    description: (
      <>
        <li>48k+ Downloads</li>
        <li>30+ github Stars</li>
        <li>20 Functions</li>
      </>
    ),
  },
];

function AboutMe(){
  return(
<div className="text--center padding-horiz--md">

<h4 className={styles.abtme} style={{fontWeight: '500', fontSize: '30px'}}>Developed by Rahuletto#0243</h4>
<br></br>
<p style={{textAlign: 'center'}}>
   <a href="https://www.npmjs.com/package/simply-djs"><img src="https://img.shields.io/npm/v/simply-djs.svg?style=flat-square" /></a>
 <a href="https://www.npmjs.com/package/simply-djs"><img src="https://img.shields.io/npm/dt/simply-djs?style=flat-square" /></a><br></br>
   <a href="https://www.npmjs.com/package/simply-djs"><img src="https://nodei.co/npm/simply-djs.png?downloadRank=true&downloads=true&downloadRank=true&stars=true" /></a><br></br>
   <a href="https://discord.gg/3JzDV9T5Fn"><img src="https://media.discordapp.net/attachments/867344514943156254/891314222837936168/9sG4YFfuxxvPzCfcJO6XXnuAAAAAElFTkSuQmCC.png" /></a>
</p>
<br></br>
<span className={styles.divider}></span>
        <h3 className={styles.abtme}>About</h3>
        <p>This is a Package which simplifies things used in discord.js so you can <b>Simply Develop</b>.
        <br></br>Uses <i>discord.js v13</i>. Works with many packages like aoi.js, etc..<br></br><br></br>
        <i><span className={styles.warning}>Note: This package is not a part of Discord.js and its completely a separate third party package.. </span><br></br>This is not a package like discord.js which uses discord api.</i></p>
      </div>
  );
}

function Feature({title, description}) {
  return (
    
    <div className={clsx('col col--4')}>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <div className="container">
      <AboutMe></AboutMe>
<section className={styles.features}>

      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>

    </div>
    
  );
}