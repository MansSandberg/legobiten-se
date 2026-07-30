import "./Projekt.css";
import ProjektItem from "./ProjektItem";

function Projekt() {
  return (
    <section>
      <h2>Projekt</h2>
      <p>Här är några exempel på projekt jag har arbetat med.</p>
      <div className="projekt-grid">

        <ProjektItem
          id="designbysandberg"
          title="DesignBySandberg.se"
          background="Min syster håller på med olika former av pyssel och skapande. 2018/2019 började hon skapa bingolotter till barn inför jul och nyår som hon delade med sig av olika pyssel-grupper på Facebook."
          solution={
            "Sidan är byggd i Angular med återanvändbara komponenter för lotterna, så att det enkelt går att lägga till fler lotter i framtiden."
            + "\nJag har byggt en lottgenerator som skapar upp lotter med unika siffror och vinster som användaren själv får fylla i."
            + "\nPå siten har jag också byggt en egen bingodragning. \nBingodragaren använder HTML5-animation som jag byggt i med hjälp av Tumult Hype."
          }
          lessons="Första Angular-applikationen jag driftat själv. Jag använder AWS S3 som host."
          link="https://www.designbysandberg.se"
          tags={["Angular", "TypeScript", "AWS"]}
        />

        <ProjektItem
          id="min-promenad"
          title="Min Promenad"
          background="Min syster planerade en vandring längs Höglandsleden mellan Lövhult och Eksjö under semestern. Hon ville dela bilder, distans och antal steg med familjen utan att behöva sms:a var och en separat.  "
          solution={"Jag utvecklade en app där hon kunde ladda upp incheckningar längs vägen, som alla med länken kunde följa. "
            + "\nJag såg detta som en chans att skapa en webbsida med karta som visar incheckningarna, och dessutom testa React för frontend-utveckling, något jag velat göra ett tag då jag mest jobbat med Angular tidigare."
            + "\nJag valde att göra en backend i Node.js för att lagra de inlägg och bilder som tas under promenaden och serva dem till besökarna. Backend har också ett REST-anrop för att hämta ut koordinaterna för Höglandsleden. Jag hade lika gärna kunnat lägga det i frontend, men tänkte att det passade att ha i backend ifall jag i framtiden vill lägga till fler promenad-rutter."}
          lessons="Det här var både första gången jag byggde ett riktigt projekt i React och första gången jag byggde en Leaflet-karta."
          github="https://github.com/MansSandberg/min-promenad"
          tags={["React", "TypeScript", "Leaflet", "Node.js", "Express.js", "REST"]}
        />

        <ProjektItem
          id="legoProductStatus"
          title="Lego Product Status"
          background="Jag ville köpa LEGO 75192 UCS Millennium Falcon, men den var slut i lager rätt ofta och sålde fort slut när den kom tillbaka i lager."
          solution={
            "Därför skrev jag ett PHP-script som använde Regex för att kontrollera texten som stod på hemsidan och kontrollera om statusen hade förändrats mot förra gången den kontrollerade. Om statusen hade ändrats skickade skriptet ett mail till mig med den nya statusen."
            + "\nJag delade med mig av scriptet i en Facebook-grupp för svenska Lego-byggare och där var det flera personer som var intresserade av att köpa 75192, så de fick också vara med på mail-utskicken."
          }
          lessons="Det här var första gången jag använde PHP för att bygga något annat än webbsidor. Jag lärde mig om Cronjob när jag letade efter en lösning att schemalägga scriptet att köras automatiskt."
          github="https://github.com/MansSandberg/LegoProductStatus"
          tags={["PHP", "Cron", "Regex"]}
        />


        <ProjektItem
          id="podcastTranskriberare"
          title="Podcast-transkriberare"
          background={
            "Jag har sedan tidigt 2010-tal varit en flitig podcast-lyssnare av diverse poddar. Framförallt humor-poddar, men jag lyssnar också på teknik och programmeringspoddar, dokumentärer och intervjuer."
          }
          solution={
            +"\nDet finns humor-poddar som jag har lyssnat på i flera år som har släppt många avsnitt och genom åren har de byggt upp en egen värld av historier och karaktärer som återkommer i poddarna."
            + " Det är inte alltid lätt att komma ihåg allt eller i vilket avsnitt de pratat om ett visst ämne eller en person, så jag ville hitta ett sätt att göra poddarna sökbara."
            + "\nLösningen jag kom på var att ladda ner poddarna och transkribera dem med OpenAIs Whipser. Jag skriptade ihop en lösning som tog ett RSS-flöde som input och sedan laddar ner MP3-filerna och transkriberar dem."
          }
          github="https://github.com/MansSandberg/podcast-transkriberare"
          tags={["Python", "OpenAI Whisper"]}
        />

        <ProjektItem
          id="kafferepetStoryExtraherare"
          title="Kafferepet Story-extraherare"
          background={"En av de podcasts jag följer är Kafferepet. Varje avsnitt följer samma struktur. De läser upp 9 historier i varje avsnitt. Arkivet med avsnitt är ganska stort och vill man lyssna om en historia gäller det att veta vilket avsnitt det lästes upp i."
          }
          solution={
            "Jag såg att de i beskrivningen av varje avsnitt skrivit in vilka historier de läst med tidskoder. Perfekt, tänkte ajg och snickrade ihop ett script som hämtar ut alla avsnitts-beskrivningar via RSS-flödet och sedan använder Regex för att läsa ut rubrikerna på historierna tillsammans med deras tidskoder."
          }
          lessons="Båda mina podcast-projekt gv mig insikt i hur RSS-flöden fungerar och hur de kan användas för att samla in information."
          github="https://github.com/MansSandberg/podcast-transkriberare"
          tags={["Python", "Regex"]}
        />
      </div>
    </section>
  );
}

export default Projekt;
