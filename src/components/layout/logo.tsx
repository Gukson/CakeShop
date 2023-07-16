import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

const Logo = () => {
    const navigate = useNavigate();
    const navigateToOffer = () => {
        navigate('/offer');
    }
    return (
        <>
            <div
                style={{
                    marginTop: "30px",
                    fontSize: "200px",
                    fontWeight: "bold",
                    textAlign: "center",
                    fontFamily: "Pacifico, cursive",
                }}
            >
                Gurgul's
            </div>

            <div
                style={{
                    fontSize: "35px",
                    fontWeight: "bold",
                    textAlign: "center",
                    fontFamily: "Pacifico, cursive",
                    color: "#e079d3"
                }}
            >
                <p style={{
                    transform: "translate(230px, -80px)"
                }}>torty, ciasta i nie tylko</p>
            </div>
            <div style={{ textAlign: "center" }}>
                <Button onClick={navigateToOffer} variant="contained" sx={{ color: "white", fontSize: "20pt", borderRadius: "25px", marginBottom: "30px", transform:"translateY(-30px)" }}>Oferta</Button>
            </div>
        </>
    )
}
export default Logo;
