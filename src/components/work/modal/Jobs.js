

import React, { useState, useEffect } from 'react';
import '../work.scss'
import ServiceTitan from '../../../images/icons/sr.jpeg'
import FieldRoutes from '../../../images/icons/fr.jpeg'
const Jobs = () => {
    return (
        <div className="jobs">
            <div className='job-title' >
                <h3>Work Experience</h3>
            </div>
            <div className='job'>
                <img src={ServiceTitan} />
                <div className='job-descrpition'>
                    <h4>
                        ServiceTitan
                    </h4>
                    <p>Front End Developer</p>
                    <p>Feb 2022 - Dec 2023 · 1 yr 11 months · Full-Time</p>
                    <p>Remote</p>
                    <p>- helped migrate existing CMS from Kentico to Strapi whilst optimizing and
                        updating all components within our software.</p>
                    <p>Performed debugging and troubleshooting of applications using JIRA.</p>
                    <p>- Wrote detailed technical documentation outlining system architecture,
                        coding conventions and best practices.</p>
                    <p>- Implemented agile development practices across multiple projects,
                        ensuring timely delivery of high-quality solutions.</p>
                    <p>- Developed pixel perfect components using Javascript, SCSS, and HTML,
                        on the React framework with GatsbyJS.</p>
                    <h4>Skills:</h4>
                    <p> GatsbyJS · Agile Methodologies · TypeScript · SCSS · SASS · Content Management Systems (CMS) · Adobe XD · GraphQL · JavaScript · HTML5 · Cascading Style Sheets (CSS) · Node.js · React.js · Redux.js · React Hooks</p>
                </div>
            </div>
            <div className='job'>
                <img src={FieldRoutes} />
                <div className='job-descrpition'>
                    <h4>
                        FieldRoutes
                    </h4>
                    <p>Front End Developer</p>
                    <p>May 2021 - Feb 2022 · 10 mos · Full-Time</p>
                    <p>Remote</p>
                    <p>- Transferred over legacy code base to a modern framework using React,
                        Gatsby, and Kentico as one of the first developers on the team with React
                        and Javascript experience.</p>
                    <p>- Developed a scalable templating software for our companies clients to
                        quickly deploy fully customizable websites.</p>
                    <p>- Executed software build and release processes.</p>
                    <p>- Wrote technical documentation for users and colleagues regarding
                        system architecture and development process.</p>
                    <p>- Researched and implemented emerging technologies and best practices
                        in software engineering.</p>
                    <p> Analyzed user needs to determine necessary improvements to existing
                        software.</p>
                    <p>- Participated in Agile sprint planning meetings to discuss development
                        tasks.</p>
                    <p>- Debugged issues in existing codebase to identify root cause of problems.</p>
                    <p>- Integrated third-party APIs into existing applications for additional
                        functionality.</p>
                    <h4>Skills:</h4>
                    <p> GatsbyJS · Kentico · Agile Methodologies · TypeScript · SCSS · SASS · Content Management Systems (CMS) · Adobe XD · GraphQL · JavaScript · HTML5 · Node.js · React.js · React Hooks</p>

                </div>
            </div>
        </div>
    );
};


export default Jobs;