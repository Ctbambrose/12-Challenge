
function Contact() {
    return (
        <div className="contact">
            <h2>Contact Me</h2>
            <form action="/submit-form" method="POST">
                <label for="name">Name:</label>
                <br/>
                <input type="text" id="name" name="name" required />
                <br/>
                <label for="email">Email Address:</label>
                <br/>
                <input type="email" id="email" name="email" required />
                <br/>
                <label for="message">Message:</label>
                <br/>
                <textarea id="message" name="message" rows="6" required></textarea>
                <br/>
                <button type="submit">Send Message</button>
            </form>
        </div>
    );
};

export default Contact;