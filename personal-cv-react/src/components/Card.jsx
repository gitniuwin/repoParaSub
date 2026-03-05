function Card({ title, children }) {
  return (
    <section className="card">
      <h2>{title}</h2>
      <p>Still doing my best till now.</p>

      <img
        src="images/profile.jpg"
        alt="Profile"
        width="300"
        height="300"
      />

      <p>
        Email:{" "}
        <a href="mailto:buhian.owen0515@gmail.com">
          buhian.owen0515@gmail.com
        </a>
        <br />
        GitHub:{" "}
        <a
          href="https://github.com/gitniuwin"
          target="_blank"
          rel="noreferrer"
        >
          github.com/gitniuwin
        </a>
      </p>

      {children}
    </section>
  );
}

export default Card;
