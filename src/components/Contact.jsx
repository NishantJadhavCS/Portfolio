function Contact() {
  return (
    <section id="contact">
      <div className="background">
        <div className="container glass">
          <h2>Contact Me</h2>
          <form action="https://formsubmit.co/nishantjadhav.cs@gmail.com" method="POST" target="_blank">
            <input type="hidden" name="_captcha" value="false" />

            <label htmlFor="name">Your Name</label>
            <input type="text" id="name" name="name" placeholder="Enter your name" required />

            <label htmlFor="email">Your Email</label>
            <input type="email" id="email" name="email" placeholder="Enter your email" required />

            <label htmlFor="message">Your Message</label>
            <textarea id="message" name="message" placeholder="Write your message here..." rows="5" required></textarea>

            <button type="submit" className="create-btn">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}

export default Contact
