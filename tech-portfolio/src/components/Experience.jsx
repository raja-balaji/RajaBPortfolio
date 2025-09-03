export default function Experience() {
  return (
    <section className="section">
      <div className="container">
        <h2>Experience</h2>

        {/* Software Engineer Intern */}
        <div className="card">
          <h3>Software Engineer Intern</h3>
          <p><strong>Pragmatrix Technology · Internship</strong></p>
          <p><em>Sep 2024 – Present · 1 yr 1 mo</em></p>
          <p>Greater Chicago Area · Remote</p>
          <ul style={{ marginTop: "1rem", paddingLeft: "1.5rem" }}>
            <li>Developed React applications using TypeScript and JavaScript, with rigorous testing procedures to ensure application quality.</li>
            <li>Translated complex client requirements into clear and effective wireframes, facilitating efficient development and alignment with client vision.</li>
            <li>Collaborated with senior developers to champion best practices in front-end development, contributing to code quality and team efficiency.</li>
          </ul>
        </div>

        {/* Lead Technical Specialist */}
        <div className="card">
          <h3>Lead Technical Specialist</h3>
          <p><strong>TKDevOrgs · Freelance</strong></p>
          <p><em>May 2024 – Present · 1 yr 5 mos</em></p>
          <p>Naperville, Illinois · Hybrid</p>
          <ul style={{ marginTop: "1rem", paddingLeft: "1.5rem" }}>
            <li>Led in building affordable, custom websites that help small businesses grow their online presence.</li>
            <li>Managed client relationships, project strategy, and end-to-end web development from design to launch.</li>
            <li>Delivered professional, user-friendly websites tailored to each client’s brand and goals.</li>
          </ul>
        </div>

        {/* Co-Founder & Director of Photography */}
        <div className="card">
          <h3>Co-Founder & Director of Photography</h3>
          <p><strong>ZR Studios · Self-employed</strong></p>
          <p><em>Feb 2022 – Present · 3 yrs 8 mos</em></p>
          <p>Naperville Township, Illinois · Hybrid</p>
          <ul style={{ marginTop: "1rem", paddingLeft: "1.5rem" }}>
            <li>Founded and successfully scaled a party services company, demonstrating strong entrepreneurial and operational skills.</li>
            <li>Leveraged expertise in audio engineering, video production, lighting, and photography to deliver high-quality services.</li>
            <li>Drove customer satisfaction and growth through effective service delivery and strategic marketing initiatives.</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
