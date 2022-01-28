function authScriptTest (uid) {
    let url = `https://data.mongodb-api.com/app/atlasconfigurator-xyznk/endpoint/authScriptTest`

    const params = {
        method: "get",
        headers: {
            "Content-Type": "application/json;charset=utf-8",
            ...(uid && { Authorization: uid })
        }
    }

    //return fetchHelper(url, uid, data);
    return fetch(url, params)
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