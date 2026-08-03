import './Erfarenhet.css';
import './components/TagList';
import TagList from './components/TagList';

function Erfarenhet() {
  return (
    <section>
      <h2>Erfarenhet</h2>
      
      <p>
        Under de senaste åren har jag arbetat med både frontend- och backendutveckling, främst inom Java
        och Angular. Jag tycker om att förstå hela lösningen - från användargränssnittet till databasen och
        driften - och har därför gärna arbetat genom flera delar av teknikstacken.
      </p>
      
      <p>
        Parallellt med mitt arbete har jag fortsatt utveckla egna projekt på fritiden. Där testar jag ny teknik,
        bygger verktyg som löser verkliga problem och omsätter idéer till fungerande lösningar.
      </p>

      <section>
        <h3>Arbetslivserfarenhet</h3>        
        <article>
          <h4>Jordbruksverket - Systemutvecklare</h4>
          <p>
            <time dateTime="2020-06">Juni 2020</time> - nu
          </p>
          
          <p>
            Jag arbetar med utveckling och förvaltning av interna system inom Jordbruksverket.
            Mitt första projekt var utvecklingen av ett GIS-system för hantering av Sveriges jordbruksmark, där
            jag huvudsakligen arbetade med frontendutveckling i Angular.
          </p>
          
          <p>
            Sedan 2022 arbetar jag i ett team som utvecklar ett datadrivet system för analys av satellitdata. Där
            arbetar jag genom hela teknikstacken med bland annat Java, Angular, PostgreSQL och Python.
          </p>
          
          <div>
            <strong>Teknik:</strong>
            <TagList tags={['Java', 'Jakarta EE', 'Angular', 'TypeScript', 'PostgreSQL', 'Python' ,'Kubernetes', 'Jenkins', 'Git']} />
          </div>
        </article>

        <article>
          <h4>Jordbruksverket - IT-trainee</h4>
          <p>
            <time dateTime="2019">2019</time> - <time dateTime="2020">2020</time>
          </p>
          
          <p>
            Jag började på Jordbruksverket genom ett traineeprogram med fokus på Javautveckling.
            Programmet kombinerade utbildning med praktik i olika utvecklingsteam och gav en bred
            introduktion till myndighetens arbetssätt och tekniska plattform.
          </p>
        </article>
      </section>

      <section>
        <h3>Utbildning</h3>
        
        <article>
          <h4>Tekniska Högskolan i Jönköping</h4>
          <p>
            <strong>Datateknik - Mjukvaruutveckling och mobila plattformar</strong> <br />
            <time dateTime="2016">2016</time> - <time dateTime="2019">2019</time>
          </p>
          
          <p>
            Utbildningen gav mig en bred grund inom mjukvaruutveckling. Här fördjupade jag mina kunskaper
            inom objektorienterad programmering, databaser och webbutveckling och kom i kontakt med
            tekniker som Node.js, Express och Python, vilka jag senare byggt vidare på i flera egna projekt.
          </p>
        </article>

        <article>
          <h4>Brinellgymnasiet</h4>
          <p>
            <strong>Teknikprogrammet - Informationsteknik</strong> <br />
            <time dateTime="2013">2013</time> - <time dateTime="2016">2016</time>
          </p>
          
          <p>
            Här fick jag mina första mer strukturerade programmeringskunskaper inom bland annat HTML,
            CSS, JavaScript, PHP, MySQL och C#. Det var också under gymnasiet som jag började använda
            Linux och Raspberry Pi, något som senare blivit en naturlig del av flera egna projekt.
          </p>
        </article>
      </section>

      <section>
        <h3>Tekniker</h3>
        
          <h4>Språk</h4>
            <TagList tags={['Java', 'TypeScript', 'JavaScript', 'Python', 'PHP', 'SQL', 'C#']} />
          
          <h4>Frontend</h4>
          <TagList tags={['Angular', 'React', 'HTML', 'CSS']} />


          <h4>Backend</h4>
          <TagList tags={['Jakarta EE', 'Node.js', 'Express', 'REST API']} />

          <h4>Databaser</h4>
          <TagList tags={['PostgreSQL', 'MySQL', 'SQLite']} />

          <h4>DevOps & Verktyg</h4>
          <TagList tags={['Git', 'Jenkins', 'Docker', 'Kubernetes', 'AWS', 'Linux']} />
      </section>

      <section>
        <h3>Kurser och certifikat</h3>
        
        <article>
          <h4>Kubernetes - Zero to Hero Developer</h4>
          <p>
            <em>Intern utbildning på Jordbruksverket</em> <br />
            <time dateTime="2023">2023</time>
          </p>
          
          <p>
            En fördjupningsutbildning inom Kubernetes med fokus på containerteknik, deployments, nätverk,
            ConfigMaps, Secrets och felsökning i Kubernetes-miljöer.
          </p>
        </article>
      </section>

      <aside>
        <h3>Vill du se hur jag använder de här teknikerna i praktiken?</h3>
        <p>
          På <strong>projektsidan</strong> beskriver jag hur jag har byggt bland annat en bingolottsgenerator i Angular, ett
          automatiserat övervakningsverktyg för LEGO:s webbplats, en React-applikation för kartbaserade
          promenader och flera andra projekt - tillsammans med de erfarenheter jag tog med mig från varje
          projekt.
        </p>
      </aside>
    </section>
  )
}

export default Erfarenhet
