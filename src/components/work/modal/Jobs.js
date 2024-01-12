

import React from 'react';
import '../work.scss'
import ServiceTitan from '../../../images/icons/sr.jpeg'
import FieldRoutes from '../../../images/icons/fr.jpeg'
import Action from '../../../images/icons/action.jpeg'
const Jobs = () => {
    return (
        <div className="jobs">
            <div className='job-title' >
                <h3>Work Experience</h3>
            </div>
            <div className='job'>
                <img className='action' src={Action} />
                <div className='job-descrpition'>
                    <h4>
                        The Action Network
                    </h4>
                    <p>Front End Developer</p>
                    <p>12/2023 - Present · Part-Time</p>
                    <p>Remote</p>
                    <p>- Architected UI/UX for an AI tool: Built the front-end of an AI tool using React, Javascript, Typescript, Node, NextJS,
                        Tailwind, SCSS and SASS.</p>
                    <p>- Overhauled front-end architecture to use best practices for scaleability and modularity: Lead the design and overhaul of the existing front-end code base to a more clean and scaleable front-end architecture.</p>
                    <p>- Researched and Implemented new technologies: Implemented new technologies into the codebase to optimize performance and UI/UX.</p>
                    <h4>Skills:</h4>
                    <p> ReactJS · NextJS · TypeScript · SCSS · SASS · Tailwind · JavaScript · HTML5 · Cascading Style Sheets (CSS) · Node.js · React Hooks · LangChain</p>
                </div>
            </div>
            <div className='job'>
                <img src={ServiceTitan} />
                <div className='job-descrpition'>
                    <h4>
                        ServiceTitan
                    </h4>
                    <p>Front End Developer</p>
                    <p>01/2022 - 12/2023 · Full-Time</p>
                    <p>Remote</p>
                    <p>- Pixel-Perfect and Responsive Component Development: Produced pixel-perfect and responsive React components based on Adobe XD designs, achieving a 100% match rate over the course of multiple sprints.</p>
                    <p>- Migrated CMS from Kentico to Strapi: Led the successful migration of over 2000 client websites from Kentico (A paid CMS) to Strapi (A free open source CMS), resulting in a 100% reduction in content management system costs and a substantial improvement in content editing efficiency.</p>
                    <p>- Developed a clean and scaleable GraphQL API architecture: Developed scaleable GraphQL queries in conjunction with a headless CMS (Strapi).</p>
                    <p>- Automated Manual Processes: Developed and implemented scripts that automated manual processes, saving an estimated 100 work hours per month. The scripts handled the migration of clients content from one CMS to another.</p>
                    <p>- Debugged Issues in Existing Codebase: Resolved 800+ bugs in the existing codebase while maintaining a 24 hour turnaround on tickets.</p>
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
                    <p>06/2021 - 01/2022 · Full-Time</p>
                    <p>Remote</p>
                    <div>
                        <p>- Developed Scalable Templating Software: Engineered a templating software with over 50 different themes resulting in a 30% decrease in website deployment time, enabling clients to launch fully customized websites within 48 hours. This included the development of hundreds of scaleable and responsive React Components - This software led to our company eventually being acquired by ServiceTitan; A leader in CRM software.</p>
                        <p>- Overhauled Legacy Code Base: Led the migration of a 10-year-old legacy code base to a modern stack - React, Gatsby, GraphQL, Node, and SASS, reducing load times by 40% and improving overall site performance.</p>
                        <p>- Researched and Implemented Emerging Technologies: Introduced and implemented Typescript, SASS, and Custom React Hooks into our existing codebase resulting in a 30% improvement in application performance and user experience.</p>
                        <p>- Developed a clean and scaleable GraphQL API architecture: Developed scaleable GraphQL queries in conjunction with a headless CMS (Kentico).</p>
                    </div>
                    <h4>Skills:</h4>
                    <p> GatsbyJS · Kentico · Agile Methodologies · TypeScript · SCSS · SASS · Content Management Systems (CMS) · Adobe XD · GraphQL · JavaScript · HTML5 · Node.js · React.js · React Hooks</p>

                </div>
            </div>
            <div className='job'>
                <img src={FieldRoutes} />
                <div className='job-descrpition'>
                    <h4>
                        FieldRoutes
                    </h4>
                    <p>Junior Front End Developer</p>
                    <p>01/2021 - 06/2021 · Full-Time</p>
                    <p>Remote</p>
                    <div>
                        <p>- Debugged Issues in Existing Codebase: Resolved 300+ bugs in the existing codebase while maintaining a 48 hour turnaround on tickets.</p>
                        <p>- Wrote Technical Documentation: Authored comprehensive technical documentation covering system architecture and development processes.</p>
                    </div>
                    <h4>Skills:</h4>
                    <p> GatsbyJS · Kentico · Agile Methodologies · TypeScript · SCSS · SASS · Content Management Systems (CMS) · Adobe XD · GraphQL · JavaScript · HTML5 · Node.js · React.js · React Hooks</p>

                </div>
            </div>
        </div>
    );
};


export default Jobs;