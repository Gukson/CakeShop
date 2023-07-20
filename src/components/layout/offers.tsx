import offer from "../offer.json";
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Box } from "@mui/material";
import {useState, useEffect} from "react";
import {FetchOffers} from "../../API/fetchOffers.ts";

const Offers = () => {
    const [offers, setOffers] = useState({});

    useEffect(() => {
        const GetData = async () => {
            const fetchedOffers = await FetchOffers();
            console.log(fetchedOffers);
            console.log(offers);
            setOffers(fetchedOffers as { [key: string]: string });
        }
        void GetData();
    },[])

    return (
        <Box>
            {offer.map((item) => {
                return (
                    <div style={{ width: "70%", padding: "10px", margin: "auto" }}>
                        <Accordion>
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon />}
                                aria-controls="panel1a-content"
                                id="panel1a-header"
                            >
                                <Typography style={{
                                    height: "100px",
                                    color: "#e079d3", margin: "auto", textAlign: "center",
                                    fontSize: "60px",
                                }}>{item.title}</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography style={{ color: "black" }}>
                                    {item.description}n
                                </Typography>
                            </AccordionDetails>
                        </Accordion>
                    </div>
                );
            })}
        </Box>
    );
};

export default Offers;