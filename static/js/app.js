//if(localStorage.getItem('name') !== null){
// window.location.href = 'dashboard.html';
//}

document.querySelector('#googlebutton').addEventListener('click', function () {
    console.log("hello1111111");
    var provider = new firebase.auth.GoogleAuthProvider();


    firebase.auth().signInWithPopup(provider).then(function (result) {
        var user = result.user;
        console.log(user);
    }).catch(function (error) {
        console.log(error);
        console.log(error.message)
    });


    // var provider = new firebase.auth.GoogleAuthProvider();
    // console.log(provider);
    // provider.addScope('https://www.googleapis.com/auth/contacts.readonly');
    // firebase.auth().languageCode = 'it';
    // provider.setCustomParameters({
    //     'login_hint': 'user@example.com'
    // });

    // firebase.auth()
    //     .signInWithPopup(provider)
    //     .then((result) => {
    //         /** @type {firebase.auth.OAuthCredential} */
    //         var credential = result.credential;

    //         // This gives you a Google Access Token. You can use it to access the Google API.
    //         var token = credential.accessToken;
    //         // The signed-in user info.
    //         var user = result.user;
    //         // ...
    //     }).catch((error) => {
    //         // Handle Errors here.
    //         console.log(error);

    //         // ...
    //     });
    // firebase.auth().signInWithRedirect(provider);
    // console.log("jjj");
    // firebase.auth().signInWithPopup(provider).then(function (data) {

    //     console.log("hello33333333");

    // }).catch(function (error) {
    //     console.log("hello44444");

    //     console.log(error);
    //     console.log("hello555555");

    // });



});


