import Urls from '../externaljs/Urls';
export default function PostDataFile(url, fd) {
   // const API = "https://myrelo.us/relotechApi/public/Api/";
    //const API = "http://localhost/Relotech/relotechApi/public/Api/";
    // const API = "https://myrelo.us/relotechApi/public/Api/";


    let headers = new Headers();
    headers.append('enctype', 'multipart/form-data')
    headers.append('Access-Control-Allow-Origin', '*')
    headers.append('token', localStorage.getItem('userToken'));

    return fetch(Urls.api + url, {
        method: 'post',
        headers: headers,
        body: fd
    })
    .then(res => res.json())
}
