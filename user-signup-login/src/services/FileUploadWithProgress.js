import Storage from '../externaljs/Storage';
// import PostDataWithParamOptional from './PostDataWithParamOptional';
import Urls from '../externaljs/Urls';


export default function FileUploadWithProgress(url, formdata, progressHandler) {
    //Check if user is active or not...
    // PostDataWithParamOptional('UserStatus', { user_id: JSON.parse(Storage.get('myReloProThirdpartyLoginData')).id, profile_id: 13 })
    //     .then((response) => {
    //         if (response.success === 1 && response.data == 0) {
    //             Storage.remove('myReloProThirdpartyLoginToken');
    //             Storage.remove('myReloProThirdpartyLoginData');
    //             Storage.remove('myReloProThirdpartyFirstLogin');
    //             window.location.href = Urls.login
    //         }
    //     })
    //     .catch(err => {

    //     });
    //end... 
    // const API = "https://myrelo.us/relotechApi/public/Api/";

    return new Promise((resolve, reject) => {
        var ajax = new XMLHttpRequest();
        ajax.open("post", Urls.api + url);
        ajax.setRequestHeader('enctype', 'multipart/form-data');
        ajax.setRequestHeader('Access-Control-Allow-Origin', '*');
        ajax.setRequestHeader('token', localStorage.getItem('userToken'));

        if (progressHandler) {
            ajax.upload.addEventListener("progress", progressHandler, false);
        }
        ajax.addEventListener("load", (event) => {
            try {
                let response = JSON.parse(event.target.responseText);
                resolve(response)
            }
            catch (err) {
                reject(err)
            }

        },
            false);
        ajax.addEventListener("error", reject, false);
        //   ajax.addEventListener("abort", abortHandler, false);

        ajax.send(formdata);
    })

}

function progressHandler(event) {
    ("loaded_n_total").innerHTML = "Uploaded " + event.loaded + " bytes of " + event.total;
    var percent = (event.loaded / event.total) * 100;
    ("progressBar").value = Math.round(percent);
    ("status").innerHTML = Math.round(percent) + "% uploaded... please wait";
}