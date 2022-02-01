async function ignite (uid) {

     // Get the JWT token
     //jwt = localStorage.getItem("jwt");


    let url = `https://data.mongodb-api.com/app/realmauthexamples-vpkor/endpoint/darksaber/ignite`

    const params = {
        //mode: "no-cors",
        method: "post",
        headers: {
            "Content-Type": "application/json;charset=utf-8",
            //"jwtTokenString": jwt
           "Authorization": uid
        }
    }

    return await fetch(url, params)
        .then(handleErrors)
        .then(response => response.json())
        .catch(error => console.log(error));

};

/// Helper Functions
function handleErrors(response) {
    if (!response.ok) {
        throw Error(response.statusText);
    }
    return response;
}