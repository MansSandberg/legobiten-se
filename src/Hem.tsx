import TagList from "./components/TagList";
import "./Hem.css";
import Seo from "./seo/Seo";

function Hem() {
  return (
    <div className="hem">
      <Seo
        title="Måns Sandberg | Systemutvecklare & Portfolio"
        description="Personlig portfolio för Måns Sandberg, systemutvecklare med erfarenhet av React, Angular, Java, TypeScript och GIS. Utforska projekt, erfarenhet och kontaktuppgifter."
      />
      <section className="hem-content">
        <h2>Måns Sandberg</h2>
        <h3>Systemutvecklare</h3>
        <p>
          Jag heter <strong>Måns Sandberg</strong>. Jag är systemutvecklare med
          erfarenhet av frontend, backend och GIS-relaterade system. Den här
          webbplatsen har jag byggt från grunden med React och TypeScript. Här
          har jag samlat ett urval av mina projekt och erfarenheter.
          <br />
          Datorer har alltid fascinerat mig och jag tycker att det är kul att
          lösa praktiska problem genom programmering.
          <br />
          Ett annat stort intresse för mig är att bygga med Lego. Därav namnet
          på hemsidan, som jag har haft sedan jag var i 11-årsåldern.
          <br />
          Jag har beskrivit min resa mot att bli systemutvecklare på{" "}
          <a href="Om">Om mig-sidan</a>
          <br />
          Utöver mitt arbete som systemutvecklare programmerar jag en del på
          fritiden. Du se några av mina projekt på{" "}
          <a href="projekt">Projekt-sidan</a>
        </p>
        <div style={{ marginTop: "1rem" }}>
          <a href="projekt" className="button" style={{ marginRight: "1rem" }}>
            Se mina projekt
          </a>
          <a href="Om" className="button">
            Läs mer om mig
          </a>
        </div>
      </section>
      <div className="hem-image">
        <img src="/bilder/jag2.png" alt="Bild på mig" />
        <TagList
          tags={[
            "Java",
            "TypeScript",
            "Angular",
            "React",
            "PostgreSQL",
            "Python",
            "Jakarta EE",
            "Kubernetes",
            "Jenkins",
            "Git",
          ]}
        />
      </div>
    </div>
  );
}
export default Hem;
