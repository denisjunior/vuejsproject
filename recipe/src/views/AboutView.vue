<template>
  <div class="about">
    <v-carousel>
      <v-carousel-item
        src="https://cdn-elle.ladmedia.fr/var/plain_site/storage/images/elle-a-table/fiches-cuisine/tous-les-themes/cuisine-du-monde/788572-22-fre-FR/Recettes-de-cuisine-du-monde.jpg"
        cover
      ></v-carousel-item>

      <v-carousel-item
        src="https://img-3.journaldesfemmes.fr/ADkK8WwqpEmzBbCsG23CDVRiOjU=/1240x/smart/d8b1369b6a5e4c0a88bfeeb334b453f0/ccmcms-jdf/36362482.jpg"
        cover
      ></v-carousel-item>

      <v-carousel-item
        src="https://fac.img.pmdstatic.net/fit/https.3A.2F.2Fi.2Epmdstatic.2Enet.2Ffac.2F2021.2F02.2F03.2F67ce2749-cee5-4de0-9bcd-5bb965372851.2Ejpeg/750x562/quality/80/crop-from/center/cr/wqkgSVNUT0NLL0dFVFRZIElNQUdFUyAvIEZlbW1lIEFjdHVlbGxl/recette-crepe-1-personne.jpeg"
        cover
      ></v-carousel-item>
      <v-carousel-item
        src="https://empreintesucree.fr/wp-content/uploads/2022/11/1-buche-roulee-chocolat-lait-framboise-recette-patisserie-empreinte-sucree-585x390.jpg"
        cover
      ></v-carousel-item>
    </v-carousel>
  </div>

  <div class="bloc">
    <h1>Tommy le Chat</h1><h2>Chef étoilé aux délices du paradi</h2>

    <p>Je m'en souviens comme mon dernier repas...</p>

    <p>
      Dit Tommy le Chat en jetant la tête en arrière pour dégager ce corps
      étranger qui s'était niché au fond de sa redoutable gueule. Beaucoup de
      rats bien gras trépassèrent dans la ruelle en regardant l'étoile brillant
      au fond du canon de cet extraordinaire rôdeur en quête de proie. Un
      véritable miracle de la nature ce prédateur urbain — Tommy le Chat avait
      beaucoup d'histoires à raconter. Mais il ne le faisait qu'en de rares
      occasions, comme maintenant.
    </p>
    <p>
      Contrary to popular belief, Lorem Ipsum is not simply random text. It has
      roots in a piece of classical Latin literature from 45 BC, making it over
      2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney
      College in Virginia, looked up one of the more obscure Latin words,
      consectetur, from a Lorem Ipsum passage, and going through the cites of
      the word in classical literature, discovered the undoubtable source. Lorem
      Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et
      Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This
      book is a treatise on the theory of ethics, very popular during the
      Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit
      amet..", comes from a line in section 1.10.32. The standard chunk of Lorem
      Ipsum used since the 1500s is reproduced below for those interested.
      Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by
      Cicero are also reproduced in their exact original form, accompanied by
      English versions from the 1914 translation by H. Rackham.
    </p>
  </div>
</template>

<style>
@media (min-width: 1024px) {
  .about {
    display: flex;
    margin: 200px;
    margin-top: 10px;
  }

  .bloc {
    margin: 0 auto;
    width: 1000px;
    
  }
  .about-text p {
    font-family: arial;
  }

  @media screen and (max-width: 899px) {
    .bloc{
      width: 90%;
    }
    
  }
}
</style>
