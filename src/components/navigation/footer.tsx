import { Box, Grid } from "@mui/material";
import { HorizontalExpand } from "../general/styles";
import { Email, Phone, Place, Cake } from "@mui/icons-material";

type LeveledTextProps = {
    children: React.ReactNode
}

const LeveledText = (props: LeveledTextProps) => {
    return (
        <div style={{
            display: 'flex',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: "10px",
            justifyContent: "center",
            marginBlock: "4px",
            marginBottom: "8px"
        }}>
            {props.children}
        </div>
    )
}
const Footer = () => {
    return (
        <Box style={{ ...HorizontalExpand, backgroundColor: "#2e94a6" }}>
            <Box maxWidth="lg" margin="auto">
                <Grid container style={{ textAlign: "center" }}>
                    <Grid item xs={4}>
                        <div style={{ fontSize: "25px", paddingBlock: "10px" }}> Adres</div>
                        <LeveledText>
                            <Place />
                            ul. Karola Darwina 7
                            <br />
                            52-415 Wrocław
                        </LeveledText>
                    
                    </Grid>
                    <Grid item xs={4}>
                        <div style={{ fontSize: "25px", paddingBlock: "10px" }}>Gurgul's</div>
                        <LeveledText>
                            <Cake/>
                            Usługi pieczenia ciast.
                        </LeveledText>

                    </Grid>
                    <Grid item xs={4}>
                    <div style={{ fontSize: "25px", paddingBlock: "10px" }}> Kontakt</div>
                        <LeveledText>
                            <Email />
                            kuba@gurgul.com.pl
                        </LeveledText>
                        <LeveledText>
                            <Phone />
                            +48 693611771
                        </LeveledText>
                    </Grid>

                </Grid>
            </Box>
        </Box>
    )
}

export default Footer;