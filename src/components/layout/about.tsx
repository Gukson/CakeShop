import { Grid } from "@mui/material";

const About = () => {
  return (
    <Grid container>
      <Grid item xs={4}>

        <img src="photos/kuba.jpg" width="100%" style={{ marginBlock: "40px"}}></img>
      </Grid>
      <Grid item xs={8}>
        <div
          style={{
            marginBlock: "30px",
            fontSize: "72px",
            fontWeight: "bold",
            textAlign: "center",
            fontFamily: "Pacifico, cursive",
          }}
        >
          O mnie
        </div>
        <div
          style={{
            marginLeft: "30px",
            textAlign: "justify",
          }}
        >
          Cześć, nazywam się Kuba i uwielbiam piec torty, ciasta i inne słodkości. na codzień jestem studentem Informatyki na Politechnice Wrocławskiej, ale gdy mam wolną chwile to prawie zawsze siadam w kuchni i szukam co by tu nowego upiec. Planuję w przyszłości otworzyć własną cukiernię, ale najpierw trzeba zacząć od czegoś mniejszego. Chciałbym móc się dzielić moimi wypiekami z większą ilością ludzi i dlatego stworzyłem ta stronę. Poszukaj, może znajdziesz coś dla siebie, a ja z wielką przyjemnością to dla Ciebie przygotuję!
        </div>
      </Grid>
    </Grid>
  );
};

export default About;