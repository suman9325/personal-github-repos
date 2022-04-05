// for live server

// export default {
//     api: "https://myrelo.us/relotechApi/public/Api/",
//     edcBaseURL:"http://103.230.103.93/EDC/api/",
//     firebase: window.firebase.initializeApp({
//             apiKey: "AIzaSyDJo97zI6dJSSohIROgH8Sm0R-e7h5R3CM",
//             authDomain: "myrelo-387e5.firebaseapp.com",
//             databaseURL: "https://myrelo-387e5.firebaseio.com",
//             projectId: "myrelo-387e5",
//             storageBucket: "myrelo-387e5.appspot.com",
//             messagingSenderId: "760939756162",
//             appId: "1:760939756162:web:9ae16129b17ee1c2b5529b",
//             measurementId: "G-QM4L3M639X"
//         }
//     )
// }

//for staging server

export default {
    api: "https://myrelo.us/stagingRelotechApi/public/Api/",
    edcBaseURL:"http://103.230.103.93/EDC/api/",
    firebase: window.firebase.initializeApp({
        apiKey: "AIzaSyCi0Jb8xw0fYfON2HrmTGBUWWxd0c4FnGA",
        authDomain: "relotech-20063.firebaseapp.com",
        databaseURL: "https://relotech-20063.firebaseio.com",
        projectId: "relotech-20063",
        storageBucket: "relotech-20063.appspot.com",
        messagingSenderId: "34517605456",
        appId: "1:34517605456:web:127a0b4506c76bc42ac555",
        measurementId: "G-Y3BHRJDHE6"
      }
    ),
    paypal: {
      env: 'sandbox',  // production
      currency: 'USD',
      client: {
          sandbox: 'AfimwhKCg4Gom37CBaITDbtEP3RT4wvDPo9X4mSZa7gCG8Zdlwww2Wea7EPhSEqtRCgNAQIueLc0-a7c',
          production: 'YOUR-PRODUCTION-APP-ID',
      }
  }
}
