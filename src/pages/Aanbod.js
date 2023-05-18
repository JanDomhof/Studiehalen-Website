import React from "react";
import { Link } from "react-router-dom";
import lesvormCursus from "../images/lesvorm-cursus.png";
import lesvormPrivé from "../images/lesvorm-prive.png";
import lesvormGroepsles from "../images/lesvorm-groepsles.png";

const Aanbod = () => {
  return (
    <div>
      <div class="aanbod">
        <h1 class="page-title">Ons Aanbod</h1>
        <p class="content">
          Bij Studiehalen.nl bieden wij bijles aan in verschillende vormen om
          aan de behoeften van alle studenten te voldoen. Onze ervaren
          student-docenten helpen studenten om te begrijpen wat er wordt
          verwacht op de tentamens en om hun academische doelen te bereiken.
          Hieronder vindt u meer informatie over onze drie verschillende
          bijlesvormen.
        </p>
        <p class="content">
          We bieden momenteel bijles aan voor alle vakken van de studie
          Werktuigbouwkunde. Doe je een andere studie en wil jij ook bijles?
          Stuur ons dan een bericht, dan gaan we op zoek naar een student-docent
          voor jou!
        </p>
      </div>
      <div class="lesvormen">
        <div class="lesvorm">
          <div class="columns">
            <div class="column">
              <h1>Privé Bijles</h1>
              <div class="price">
                <h4 class="price-crossed">€25</h4>
                <h4>{"->"}</h4>
                <h4>€17,5 P/U</h4>
              </div>
              <p>
                Onze privé-bijlessen zijn de perfecte optie voor studenten die
                individuele aandacht nodig hebben. We passen de bijlessen aan op
                de individuele leerstijl en behoeften van de student. Dit
                betekent dat onze docenten kunnen focussen op de specifieke
                onderwerpen waar de student het meest mee worstelt, waardoor ze
                hun kennis sneller kunnen opbouwen en meer zelfvertrouwen
                krijgen. Onze privé-bijlessen kunnen zowel online als offline
                worden gevolgd en zijn beschikbaar voor verschillende vakken.
              </p>
              <h4>Voordelen</h4>
              <ul class="voordelen">
                <li>Aangepast op jouw behoeftes</li>
                <li>Beste manier om de stof echt goed te begrijpen</li>
              </ul>
              <Link to="/contact" class="aanvragen">
                Contact
              </Link>
            </div>
            <div class="column">
              <img src={lesvormPrivé} alt="lesvorm" class="lesvorm-img" />
            </div>
          </div>
          <div class="columns">
            <div class="column">
              <img src={lesvormGroepsles} alt="lesvorm" class="lesvorm-img" />
            </div>
            <div class="column right">
              <h1>Groepsles</h1>
              <div class="price">
                <h4 class="price-crossed">€17.50</h4>
                <h4>{"->"}</h4>
                <h4>€12.50 P/U</h4>
              </div>
              <p>
                Onze groepslessen zijn de ideale optie voor studenten die graag
                willen leren met andere studenten. Dit is niet alleen een leuke
                en interactieve manier van leren, maar het kan ook helpen om de
                kosten van bijles te verlagen. Onze groepslessen worden geleid
                door ervaren student-docenten die de groepen klein houden om
                ervoor te zorgen dat alle studenten de aandacht krijgen die ze
                nodig hebben.
              </p>
              <h4>Voordelen</h4>
              <ul class="voordelen">
                <li>Studeren met andere studenten</li>
                <li>Interactief</li>
                <li>Kleine groepjes</li>
              </ul>
              <Link to="/contact" class="aanvragen">
                Contact
              </Link>
            </div>
          </div>
          <div class="columns">
            <div class="column">
              <h1>Cursus</h1>
              <div class="price">
                <h4>€60-120</h4>
              </div>
              <p>
                Onze tentamentrainingen zijn ontworpen om studenten te helpen
                zich voor te bereiden op tentamens. Tijdens deze trainingen
                zullen onze ervaren student-docenten de belangrijkste
                onderwerpen en concepten van het vak doornemen en uitleggen hoe
                deze op tentamens kunnen worden toegepast. Onze
                tentamentrainingen zijn beschikbaar voor verschillende vakken en
                niveaus en zijn een geweldige manier om de stof snel en
                effectief te leren. Onze tentamentrainingen worden meestal
                gegeven in de weken voorafgaand aan het tentamen en kunnen zowel
                online als offline worden gevolgd.
              </p>
              <h4>Voordelen</h4>
              <ul class="voordelen">
                <li>Beste prijs/kwaliteit verhouding</li>
                <li>
                  Je leert precies wat je nodig hebt om het tentamen te halen
                </li>
              </ul>
              <Link to="/contact" class="aanvragen">
                Contact
              </Link>
            </div>
            <div class="column">
              <img src={lesvormCursus} alt="lesvorm" class="lesvorm-img" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Aanbod;
