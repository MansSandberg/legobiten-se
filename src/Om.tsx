import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import "./Om.css";

const WorkIcon = () => (
  <span aria-label="work icon" role="img" style={{ fontSize: "1.2rem" }}>
    💼
  </span>
);

const SchoolIcon = () => (
  <span aria-label="school icon" role="img" style={{ fontSize: "1.2rem" }}>
    🎓
  </span>
);

const StarIcon = () => (
  <span aria-label="star icon" role="img" style={{ fontSize: "1.2rem" }}>
    ⭐
  </span>
);

const CodeIcon = () => (
  <span aria-label="code icon" role="img" style={{ fontSize: "1.2rem" }}>
    💻
  </span>
);

function Om() {
  return (
    <section>
      <h2>Om</h2>
      <p>
        Jag heter Måns Sandberg och arbetar idag som systemutvecklare på
        Jordbruksverket. Jag har programmerat sedan tonåren och tycker om att
        bygga lösningar på problem jag stöter på i vardagen. Ofta börjar ett
        projekt med en enkel idé eller ett konkret behov och blir samtidigt ett
        sätt att lära mig något nytt.
        </p>
        <br />
        <p>
        På den här sidan har jag samlat några av de projekt som följt mig genom
        åren och som tillsammans berättar hur ett intresse för LEGO och
        webbutveckling så småningom ledde till ett yrke som systemutvecklare.
      </p>
      <h3>Min utvecklar-resa</h3>
      <p>
        Mitt intresse för LEGO har jag haft så länge jag kan minnas. Datorer
        fascinerade mig också tidigt och jag ville lära mig programmera, men jag
        visste inte riktigt var jag skulle börja. <br />
        Vändpunkten kom när jag köpte en datortidning under en resa till Örebro.
        På den medföljande CD-skivan fanns olika gratisprogram som jag började
        experimentera med. <br />
        Min pappa, som själv hade en egen hemsida och fotografering som hobby,
        hjälpte mig att komma igång. Vi kom på idén att använda en hemsida för
        att visa upp min växande LEGO-samling.
      </p>
      <p>
        Under en period lånade jag nästan alla programmeringsböcker som fanns på
        biblioteket. Jag försökte lära mig flera olika språk, men fastnade ofta
        redan innan jag hade skrivit första raden kod. Många böcker utgick från
        att man redan visste vilken utvecklingsmiljö man skulle använda och hur
        man installerade den. För mig blev det en onödigt hög tröskel. <br />
        Webbutveckling blev därför den naturliga vägen in i programmeringen.
        Allt jag behövde var en webbläsare och en enkel textredigerare. Det
        gjorde att jag kunde fokusera på att lära mig HTML, CSS och senare
        JavaScript, innan jag så småningom gick vidare till PHP, databaser och
        modern webbutveckling.
      </p>
      <VerticalTimeline layout="1-column-left" lineColor="rgb(33, 150, 243)">
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="2008"
          iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
          icon={<CodeIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Mittlego.dinstudio.se
          </h3>
          <h4 className="vertical-timeline-element-subtitle">Dinstudio</h4>
          <p>
            Jag började med DinStudio eftersom det var enkelt att komma igång
            med. Där fanns möjlighet att lägga in lite egen HTML, och det blev
            mina första steg mot att förstå hur webbsidor fungerade. <br />
            Det gick att skriva lite HTML också, minns att jag testade att
            skriva &lt;p&gt;-taggar och lärde mig skriva &amp;aring; för att få
            bokstaven å att visas.
          </p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="2009-2014"
          iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
          icon={<CodeIcon />}
        >
          <h3 className="vertical-timeline-element-title">Legobiten.se</h3>
          <h4 className="vertical-timeline-element-subtitle">Hemsida24</h4>
          <p>
            När jag hade laddat upp bilder på alla mina LEGO-set flyttade jag
            vidare till Hemsida24, där jag fick större frihet att utveckla
            sidan. Det var då jag skaffade domännamnet legobiten.se. <br />
            Hemsida24 erbjöd färdiga komponenter för bildvisning med galleri,
            som jag använde för att visa mina legobilder. De hade även
            komponenter där man kunde skriva egen HTML, vilket jag
            experimenterade mycket med.
          </p>
          <p>
            Jag skapade egna bildspel, lade till en funktion för att skicka
            e-kort via e-post och implementerade andra funktioner jag hittade
            när jag surfade runt på internet. Jag minns att jag även lade till
            en Google-sökruta på sidan.
            <img
              src="/bilder/hemsida24.jpg"
              alt="Skärmdump från min Hemsida24-sida."
              style={{ width: "100%", marginTop: "10px" }}
            />
          </p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="2010 - 2014"
          iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
          icon={<CodeIcon />}
        >
          <h3 className="vertical-timeline-element-title">Legoforever.com</h3>
          <h4 className="vertical-timeline-element-subtitle">
            Byggde allt från grunden
          </h4>
          <p>
            Hemsida24 var ett jättebra verktyg för att bygga snygga hemsidor,
            men jag ville lära mig mer om hur man gjorde det själv från grunden.{" "}
            <br />
            Därför skapade jag en parallell hemsida, på engelska, som jag skrev
            helt från grunden med HTML, CSS och lite JavaScript. Jag använde mig
            av One.com som webbhotell och FTP för att ladda upp filerna. Den
            första versionen av hemsidan bestod av HTML-tabeller.
          </p>
          <img
            src="/bilder/2010.png"
            alt="Skärmdump från min Legoforever-sida."
            style={{ width: "100%", marginTop: "10px" }}
          />
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="2013 - 2016"
          iconStyle={{ background: "rgb(16, 204, 82)", color: "#fff" }}
          icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title">Brinellgymnasiet</h3>
          <h4 className="vertical-timeline-element-subtitle">
            På gymnasiet gick jag Teknikprogrammet med inriktning
            Informationsteknik
          </h4>
          <p>
            Jag lärde mig grunderna i programmering, databaser och
            webbutveckling.Jag läste kurser inom HTML, CSS, JavaScript, PHP,
            MySQL och C#. <br />
            Jag tog med mig de kunskaperna och byggde om Legoforever.com med en
            modernare layout baserad på div-element och CSS i stället för
            HTML-tabeller.
          </p>
          <p>
            En annan grej som jag tog med mig från gymnasiet var att vi fick
            testa på lite Linux på en Raspberry Pi.
            <br />
            Det tyckte jag var roligt och köpte sen en egen Raspberry Pi som jag
            har använt till flera projekt.
          </p>
          <img
            src="/bilder/2014.png"
            alt="Brinellgymnasiet"
            style={{ width: "100%", marginTop: "10px" }}
          />
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="2014 - 2018"
          iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
          icon={<CodeIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Legobiten och Legoforever blir ett
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            Från statiska sidor till PHP och databaser
          </h4>
          <p>
            Några år senare kände jag mig så bekväm med att koda hemsidan själv
            att jag avvecklade Legoforever.com och flyttade Legobiten till en
            egen-kodad sida, också den på One.com. <br />
            Här tog jag mina kunskaper från gymnasiet och skrev om hela hemsidan
            med PHP och skapade en databas med MySQL som gick att filtrera på
            hemsidan.
          </p>
          <img
            src="/bilder/2018.png"
            alt="Bild på egendesignad hemisda. Vyn visar sidan Min LEGO-samling. Där syns en tabell över mina LEGO.set."
            style={{ width: "100%", marginTop: "10px" }}
          />
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2016 - 2019"
          iconStyle={{ background: "rgb(16, 204, 82)", color: "#fff" }}
          icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Jönköpings Tekniska Högskola
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            Datateknik, Mjukvaruutveckling och Mobila Plattformar
          </h4>
          <p>
            På högskolan byggde jag vidare på grunden från gymnasiet och fick en
            bredare förståelse för mjukvaruutveckling. <br />
            Jag läste bland annat kurser inom objektorienterad programmering,
            databaser, nätverk, mobilutveckling och webbutveckling.
          </p>
          <p>
            Det var här jag först kom i kontakt med Node.js, Express och Python.{" "}
            <br />
            Node.js och Express använde jag senare när jag byggde den första
            versionen av DesignBySandberg.se, medan Python har blivit ett språk
            jag återvänt till i flera senare hobbyprojekt, bland annat för
            automatisering och AI.
          </p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2017"
          iconStyle={{ background: "rgb(16, 204, 82)", color: "#fff" }}
          icon={<CodeIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Mitt första automatiseringsprojekt
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            Praktisk nytta av mina kunskaper
          </h4>
          <p>
            Jag hade sparat ihop pengar för att köpa Lego Star Wars UCS
            Millenium Falcon #75192. Det var Legos då största set någonsin och
            den var svår att få tag på. Det var inte alltid den gick att
            beställa på hemsidan. Den sålde slut väldigt fort när den kom in i
            lager, så det gällde att ha koll. <br />
            Detta löste jag genom att skriva ett skript som kontrollerade
            hemsidan var femte minut och skickade e-post när produktstatusen
            förändrades.
          </p>

          <p>
            Jag använde mina kunskaper om PHP som jag fått från gymnasiet och
            läste på hur schemaläggning med cronjob i Linux funkade och körde
            det på min Raspberry Pi.
          </p>

          <p>
            Jag minns fortfarande när jag satt på en föreläsning och någon i
            Facebook-gruppen skrev att Millennium Falcon hade kommit in i lager.
            Jag hade inte fått något mejl. När jag kom hem visade det sig att
            vår router tappat internetuppkopplingen och att Raspberry Pi:n
            därför inte kunnat köra skriptet. Det blev min första riktiga lärdom
            om att även infrastrukturen måste fungera.
          </p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2019"
          iconStyle={{ background: "rgb(16, 204, 82)", color: "#fff" }}
          icon={<CodeIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            DesignBySandberg.se
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            Från idé till webbplats
          </h4>
          <p>
            Min syster som tycker om att skapa och har designat egna
            ”Bingolotter” för barn. Hon har delat dem i Facebook-grupper och
            ville ha en hemsida där folk kunde ladda ner lotterna. Hon ville
            också ha en egen dragning för barn som inte orkar sitta uppe på
            nyårsbingo-dragningen i TV. <br />
            De första åren skapade min syster bakgrundsbilder med knappar och
            ikoner, och jag ritade in knapparna med SVG för att göra dem
            klickbara.
          </p>
          <p>
            Jag hade nyligen gått en kurs i Server-side Web Development på
            Högskolan och använde mig av den kunskapen för att bygga en backend
            i Node.js med Express. Jag skapade unika adresser som dirigerade
            användarna till Google Drive-mapparna där lotterna fanns.
            HTML-filerna lade jag också bakom egna routes. Jag hostade hemsidan
            på AWS Elastic Beanstalk.
          </p>

          <img
            src="/bilder/designbysandberg2019.png"
            alt="Skärmdump från designbysandberg.se som den såg ut 2019."
            style={{ width: "100%", marginTop: "10px" }}
          />
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="September 2019 - nu"
          iconStyle={{ background: "rgb(244, 67, 54)", color: "#fff" }}
          icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">Jordbruksverket</h3>
          <h4 className="vertical-timeline-element-subtitle">
            Idag jobbar jag som Systemutvecklare på Jordbruksverket
          </h4>
          <p>
            Jag jobbar med Java (Jakarta EE), Angular, PostgreSQL, Kubernetes,
            Git, Jenkins. <br />
            Kunskaparna om Angular har jag använt för att skriva om
            designbysandberg.se för att få den enklare att underhålla och
            utveckla.
          </p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2024 - nu"
          iconStyle={{ background: "rgb(244, 67, 54)", color: "#fff" }}
          icon={<CodeIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            DesignBySandberg skrivs om
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            En omskrivning för att bli enklare att underhålla
          </h4>
          <p>
            Första versionen fungerade bra, men efter några år blev den svår att
            underhålla. Varje ny säsong krävde nya bakgrundsbilder, nya SVG-ytor
            och fler routes.
          </p>

          <p>
            Jag har genom mitt jobb på Jordbruksverket lärt mig koda Angular för
            frontend och tänkte att det skulle passa att bygga hemsidan i det.
            Då skulle vi kunna få återanvändbara komponenter som vi kan använda
            för att lägga till nya lotter nästkommande år. <br />
            Deployen blev också lite smidigare. Den ligger fortfarande på AWS,
            men nu i en S3-Bucket.
          </p>

          <p>
            Genom åren har vi fått feedback från användarna i Facebook-grupperna
            där de efterfrågat möjligheten att skriva ut flera lotter med olika
            siffror, så att varje barn kan få en unik lott. Det implementerade
            jag i den nya versionen som fyller i siffror och vinster dynamiskt.{" "}
            <br />
            Ett år implementerade jag en funktion för att skicka lotterna via
            e-post. Den möjligheten finns inte kvar, men det kanske jag lägger
            till igen i framtiden. <br />
            Jag har utifrån feedbacken förstått att PDF-nedladdningen fungerar
            olika på olika enheter. De flesta användarna verkar komma in på
            sidan via Facebook-appen på telefonen.
          </p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
          icon={<CodeIcon />}
        >
          <h3 className="vertical-timeline-element-title">Privata projekt</h3>
          <h4 className="vertical-timeline-element-subtitle">
            På min fritid har jag de senaste åren fortsatt att utveckla egna
            projekt, både för att lära mig nya tekniker och för att det är
            roligt.
            <br />
            Några exempel på projekt jag har arbetat med är:
          </h4>
          <ul>
            <li>Promenad-app för att dokumentera och dela en prommenad</li>
            <li>Podcast-transkribering med OpenAI Whisper</li>
            <li>
              Automatiserad Speedtest för att få ut statistik över hastigheten
              på bredbandet hemma
            </li>
          </ul>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </section>
  );
}

export default Om;
