import { HorizontalExpand } from "../general/styles";

const ImageStyle = {
  borderRadius: "10px",
  marginBlock: "20px",
};

const Works = () => {
  return (
    <>
      <div style={{marginBottom: "20px"}}>
        <div
          style={{
            marginBlock:"30px",
            fontSize: "72px",
            fontWeight: "bold",
            textAlign: "center",
            fontFamily: "Pacifico, cursive",
          }}
        >
          Moje Prace
        </div>
        <div style={HorizontalExpand}>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              gap: "30px",
              justifyContent: "center",
              borderRadius: "10px",
              background: "#e079d3",
            }}
          >
            <img
              src="./photos/cake1.jpg"
              height="300px"
              style={{ ...ImageStyle, objectFit: "contain" }}
            />
            <img
              src="./photos/cake2.jpg"
              height="300px"
              style={{ ...ImageStyle, objectFit: "contain" }}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Works;
