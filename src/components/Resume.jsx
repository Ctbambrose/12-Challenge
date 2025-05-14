
function Resume() {
    return (
        <div className="resume">
            <h2>Resume</h2>
            
            <div className="proficiencies">
            <h3>Front-end Proficiencies</h3>
            <ul>
                <li>HTML</li>
                <li>CSS</li>
                <li>JavaScript</li>
                <li>TypeScript</li>
                <li>JQuery</li>
                <li>React</li>
                <li>Responsive Design</li>
            </ul>
            </div>

            <div className="proficiencies">
            <h3>Back-end Proficiencies</h3>
            <ul>
                <li>API</li>
                <li>Node</li>
                <li>Express</li>
                <li>PostgreSQL, Sequelize</li>
                <li>MongoDB, Mongoose</li>
                <li>REST</li>
            </ul>
            </div>
            <div className="download">
            <h3>Dowload my <a href="assets/Colton_Ambrose_RESUME-NCI.pdf">resume</a></h3>
            </div>
        </div>

    );
};

export default Resume;