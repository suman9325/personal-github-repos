import Urls from '../externaljs/Urls';

export default function GetData(url) {
   // const API = "https://myrelo.us/relotechApi/public/Api/";
    //const API = "http://localhost:7777/Relotech/relotechApi/public/Api/";
    // const API = "https://myrelo.us/relotechApi/public/Api/";

    let headers = new Headers();
    headers.append('Content-type', 'application/json');
    headers.append('token', localStorage.getItem('userToken'));

    return fetch(Urls.api+ url, {
        method: 'GET',
        headers: headers
    })
    .then(res => res.json())
}

