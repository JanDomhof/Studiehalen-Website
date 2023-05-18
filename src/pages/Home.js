import React from "react";
import Reviews from "../components/Reviews";

const Home = () => {
  return (
    <div class="home">
      <div class="cover">
        <h1 class="cover-text">
          De beste manier om je studie ècht te begrijpen
        </h1>
        <p class="cover-text">
          Welkom bij Studiehalen.nl! Wij zijn een toegewijd team,
          gespecialiseerd in bijles voor TU Delft studenten. Ontdek hoe wij jou
          kunnen helpen om écht te excelleren in je studie!
        </p>
        <p class="cover-text">
          Een goede basis van je studie, vooral in het eerste jaar, is
          essentieel voor het behalen van succes gedurende de rest van de
          studie. Ons team van getalenteerde studenten staat klaar om je te
          ondersteunen bij het bereiken van dit doel. We werken persoonlijk en
          professioneel en zijn vastbesloten om je te helpen slagen.
        </p>
      </div>
      <Reviews />
    </div>
  );
};

export default Home;
