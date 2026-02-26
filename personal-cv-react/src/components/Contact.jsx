function Contact() {
  return (
    <section className="card">
      <h2>Contact Me!</h2>

      <form>
        <input type="text" placeholder="Name" />
        <br />

        <input type="text" placeholder="Email" />
        <br />

        <textarea placeholder="Message"></textarea>
        <br />

        <button type="submit">Send</button>
      </form>
    </section>
  );
}

export default Contact;