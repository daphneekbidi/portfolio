import React from "react";

const Skills = () => {
    return (
        <section id='skills' className='py-16 md:py-28 bg-gradient-to-b from-85% from-blanc to-pistache'>
            <h2 className='text-4xl text-start mb-8 text-bold px-8 text-black'>SKILLS</h2>
            <div className='grid grid-cols-2 gap-5 text-black my-4 mx-8 md:px-8 md:py-8 md:grid-cols-3 md:justify-center md:border md:border-black md:border-solid'>
                <div className='flex flex-col md:w-1/3'>
                    <h3 className='text-2xl mb-4'>Frontend</h3>
                    <ul>
                        <li>HTML5</li>
                        <li>CSS3</li>
                        <li>JavaScript</li>
                        <li>React</li>
                        <li>Next.js</li>
                        <li>Shopify</li>
                    </ul>
                </div>
                <div className='flex flex-col md:w-1/3'>
                    <h3 className='text-2xl mb-4'>Backend</h3>
                    <ul>
                        <li>Node.js</li>
                        <li>PostgreSQL</li>
                        <li>GraphQL</li>
                        <li>RESTful APIs</li>
                    </ul>
                </div>
                <div className='hidden md:flex flex-col md:w-1/3'>
                    <h3 className='text-2xl mb-4'>Tools</h3>
                    <ul>
                        <li>GitHub</li>
                        <li>VSCode</li>
                        <li>Slack</li>
                        <li>Asana</li>
                        <li>Notion</li>
                        <li>Click Up</li>
                    </ul>
                </div>
            </div>
        </section>
    );
};
export default Skills;