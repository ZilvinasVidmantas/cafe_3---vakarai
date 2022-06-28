import PersonCard from "./components/person-card";

function App() {

  return (
    <>
      <h1>Čia yra app'sas</h1>
      <div style={{ display: 'flex', gap: 20 }}>
        <PersonCard
          fullname="Serbenth Le Bordouir"
          imgSrc="https://img.draugas.lt/galerija/g/e/z/gezajupupefumurukatotacifiriga.jpg?img=11552599&type=1&width=593&height=800"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui temporibus nemo aspernatur reiciendis officia earum maxime quaerat ad beatae tempore. Vel fuga officiis aspernatur? Numquam, eligendi. Exercitationem aut odit velit eius ducimus quaerat ratione temporibus debitis eum aperiam, tenetur nostrum."
          email="serbent.le.bordouir@krumas.lt"
          number="+370 654 21458"
        />

        <PersonCard
          fullname="Margarita Beledaitė"
          imgSrc="https://lygybe.lt/data/public/uploads/2021/05/margarita_jankauskaite_vladimiro_ivanovo_nuotrauka.jpg"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui temporibus nemo aspernatur reiciendis officia earum maxime quaerat ad beatae tempore. Vel fuga officiis aspernatur? Numquam, eligendi. Exercitationem aut odit velit eius ducimus quaerat ratione temporibus debitis eum aperiam, tenetur nostrum."
          email="marga.rita@margumynai.lt"
          number="+370 654 21658"
        />

        <PersonCard
          fullname="Severas Sneipas"
          imgSrc="https://hogvartsas.lt/wp-content/uploads/mirstantis-sneipas.png"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui temporibus nemo aspernatur reiciendis officia earum maxime quaerat ad beatae tempore. Vel fuga officiis aspernatur? Numquam, eligendi. Exercitationem aut odit velit eius ducimus quaerat ratione temporibus debitis eum aperiam, tenetur nostrum."
          email="snape.die@hogwartz.hw"
          number="+370 777 77777"
        />
      </div>

    </>
  );
}

export default App;