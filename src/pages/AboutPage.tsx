import React from "react"
import ContactForm from "../components/ContactForm"

const AboutPage = () => {
    return (
        <>
            <h2>About User Story Generator</h2>
            <p>This is a simple React app that can be used to create and save/share user stories.</p>
            <h2>Contact</h2>
            <p>You can contact me at the project repo: <a href="https://github.com/pattonwebz/react-user-story-generator/">https://github.com/pattonwebz/react-user-story-generator/</a></p>
            <p>Or send me a message with the form below</p>
            <ContactForm mailto="will@pattonwebz.com"></ContactForm>
        </>
    )
}

export default AboutPage;
