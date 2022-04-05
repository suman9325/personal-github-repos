import Urls from '../externaljs/Urls';

export default function PostDataWithParam(url, params) {
    //const API = "https://myrelo.us/relotechApi/public/Api/";
    //const API = "http://localhost/Relotech/relotechApi/public/Api/";
    // const API = "https://myrelo.us/relotechApi/public/Api/";


    let headers = new Headers();
    headers.append('Content-type', 'application/json');
    headers.append('token', localStorage.getItem('userToken'));


    return fetch(Urls.api + url, {
        method: 'POST',
        headers: headers,
        body: JSON.stringify(params)
    })
    .then(res => res.json())
}