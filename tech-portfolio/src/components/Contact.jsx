export default function Contact() {
  return (
    <section className="section">
      <div className="container">
        <h2>Contact</h2>
        <form style={{ display: "flex", flexDirection: "column", gap: "1rem", maxWidth: "500px" }}>
          <input type="text" placeholder="Your Name" style={{ padding: "12px", borderRadius: "4px", border: "1px solid #333", background: "#111", color: "#fff" }} />
          <input type="email" placeholder="Your Email" style={{ padding: "12px", borderRadius: "4px", border: "1px solid #333", background: "#111", color: "#fff" }} />
          <textarea placeholder="Message" rows="4" style={{ padding: "12px", borderRadius: "4px", border: "1px solid #333", background: "#111", color: "#fff" }} />
          <button type="submit">Send</button>
        </form>
      </div>
    </section>
  );
}
