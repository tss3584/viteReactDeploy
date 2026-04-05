
// https://solace.ist.rit.edu/~dsbics/proxy/
// https://people.rit.edu/~dsbics/proxy/http://ischool.gccis.rid.edu/api/

//set up the proxy of  - Switch between whenever laggy
const proxyServer = "https://people.rit.edu/~dsbics/proxy/https://ischool.gccis.rit.edu/api/";
//const proxyServer = "https://solace.ist.rit.edu/~dsbics/proxy/https://ischool.gccis.rit.edu/api/"


//endpoint is something like '/about' or '/degrees/grad'
async function GetData(endpoint){
    const result = await fetch(`${proxyServer}${endpoint}`);
    return await result.json();
}

export default GetData;