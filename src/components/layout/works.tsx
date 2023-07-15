const ImageStyle = {
  borderRadius: "10px",
  marginBlock: "20px",
};

const Works = () => {
  return (
    <>
      {" "}
      <div style={{}}>
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
        <div style={{
            width:"500%",
            marginLeft:"-200%",
        }}>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              gap: "30px",
              justifyContent: "center",
              borderRadius: "10px",
              // borderWidth: "3px",
              // borderColor: "#000000",
              // border: "2px solid white",
              background: "#9381ff",
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
