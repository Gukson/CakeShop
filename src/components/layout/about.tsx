import { Grid } from "@mui/material";

const About = () => {
    return (
    <Grid container>
      <Grid item xs={4}>
            <img src="photos/kuba.jpg" width="100%"></img> 
      </Grid>
      <Grid item xs={8}></Grid>
    </Grid>
  );
};

export default About;