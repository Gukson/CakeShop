export const FetchOffers = async () => {
    return fetch("http://127.0.0.1:5000",{method:"GET"}).then((res)=>res.json()).then((data)=>{return(data as {[key:string]: string})})
}
