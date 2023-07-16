import { CakeOutlined } from "@mui/icons-material";

const Cakes = () => {
  return (
    <>
    {Array.apply(null,Array(5)).map(()=>(
        <div style={{position:"absolute", left:`${Math.floor(30*Math.random())}%`, top:`${Math.floor(50*Math.random())}%`}}>     
        <CakeOutlined style={{fontSize:"40px"}}/>
        </div>
  ))}
  </>
  )
}

export default Cakes