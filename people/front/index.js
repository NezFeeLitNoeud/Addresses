const btnAll = window.document.getElementById("show-all");

const createDivision = function (person) {
    const divPrincipal = document.createElement('div');
    divPrincipal.className = "max-w-sm mx-10 my-8 h-32 bg-white shadow-lg rounded-lg overflow-hidden border inline-block principale" + person[i].id
    divPrincipal.id = person[i].id
    const deuxiemeDiv = document.createElement('div');
    deuxiemeDiv.className = "sm:flex sm:items-center px-6 py-4"
    deuxiemeDiv.id = "div" + i;
    const troisiemeDiv = document.createElement('div');
    troisiemeDiv.className = "rounded-full h-16 w-16 flex items-center justify-center border-black border"
    troisiemeDiv.id = "d" + i;
    const pID = document.createElement('p');
    pID.id = "id-address";
    pID.className = "text-sm leading-tight id-address";
    pID.innerHTML = person[i].id;
    const quatriemeDiv = document.createElement('div');
    quatriemeDiv.className = " w-24 sm:mt-0 sm:ml-4 text-center sm:text-left"
    quatriemeDiv.id = "lastDiv" + i;
    const cinquiemeiv = document.createElement('div');
    cinquiemeiv.className = "mt-5 sm:mt-0 sm:ml-32 text-center sm:text-left";
    cinquiemeiv.id = "cinq" + i;
    const pCountry = document.createElement('p');
    pCountry.id = "country";
    pCountry.className = "text-xl leading-tight"
    pCountry.innerHTML = person[i].country;
    const pCity = document.createElement('p');
    pCity.id = "city";
    pCity.className = "text-sm leading-tight text-gray-600"
    pCity.innerHTML = person[i].city;
    const pStreet = document.createElement('p');
    pStreet.id = "street";
    pStreet.className = "text-sm leading-tight text-gray-600"
    pStreet.innerHTML = person[i].street;
    const pZip = document.createElement('p');
    pZip.id = "zip";
    pZip.className = "text-sm leading-tight text-gray-600"
    pZip.innerHTML = person[i].zipCode;
    const del = document.createElement('a');
    del.id = "delete";
    //del.href ="index.html";
    del.className = "text-base text-red-600 font-extrabold leading-tight cursor-pointer delete";
    del.innerHTML = "X";
    document.getElementById("wrapper").appendChild(divPrincipal).appendChild(deuxiemeDiv).appendChild(troisiemeDiv)
    document.getElementById("div" + i).appendChild(quatriemeDiv);
    document.getElementById("div" + i).appendChild(cinquiemeiv);
    document.getElementById("d" + i).appendChild(pID);
    document.getElementById("lastDiv" + i).appendChild(pCountry).append(pStreet);
    document.getElementById("lastDiv" + i).appendChild(pCity).append(pZip);
    document.getElementById("lastDiv" + i).appendChild(pCity).append(pZip);
    document.getElementById("cinq" + i).appendChild(del);
}

window.addEventListener("DOMContentLoaded", function () {
    const executeur = new Promise(function (resolve, reject) {
        const url = `http://localhost:8082/addresses/all`;
        const xhr = new XMLHttpRequest();
        xhr.open("GET", url);
        xhr.addEventListener("load", function () {
            if (200 === xhr.status) {
                resolve(xhr);
            } else {
                reject(xhr);
            }
        });
        console.log("Envoi de la requêteG GET");
        xhr.send();

    });

    executeur.then(function (xhr) {
        const person = JSON.parse(xhr.responseText);
        for (i = 0; i < person.length; i++) {
            createDivision(person);
        }
            const getID = window.document.getElementsByClassName("id-address");
            const getCross = window.document.getElementsByClassName("delete");
            for (let j = 0; j < getCross.length; j++) {
                getCross[j].addEventListener("click", function () {
                    const exec = new Promise(function (resolve, reject) {
                        const urlDelete = `http://localhost:8082/addresses/${getID[j].innerHTML}`;
                        const xhrDelete = new XMLHttpRequest();
                        xhrDelete.open("DELETE", urlDelete);
                        xhrDelete.addEventListener("load", function () {
                            if (200 === xhrDelete.status) {
                                resolve(xhrDelete);
                            } else {
                                reject(xhrDelete);
                            }
                        })
                        console.log("Envoi de la requête DELETE");
                        xhrDelete.send();
                    })
                    exec.then(function (xhr) {
                        const toDelete = window.document.getElementById(xhr.responseText)
                        console.log("Element with ID : " + toDelete + " Has been deleted");
                        document.getElementById("wrapper").removeChild(toDelete);
                    })
                    exec.catch(function(xhr){
                        console.log("Something went wrong");
                    })
                })
        }
    })

    const HTMLForm = window.document.getElementsByTagName("form")[0];
    HTMLForm.addEventListener("submit", function(submitEvent){
        //submitEvent.preventDefault();
        const HTMLInput = window.document.getElementsByTagName("input");  
        const country = HTMLInput[0].value;
        const street = HTMLInput[1].value;
        const city = HTMLInput[2].value;
        const zip = HTMLInput[3].value;

        const url = "http://localhost:8082/addresses/";
        const body = {
            country: country,
            street: street,
            city: city,
            zipCode: zip
        }
        const xhrPost = new XMLHttpRequest();
        xhrPost.open("POST", url);
        xhrPost.setRequestHeader("Content-type", "application/json")
        xhrPost.onload = function(){
            if(200 === this.status){
                const data = JSON.parse(this.responseText);
                console.log("this.status is 200")
                console.log(data)
                createDivision(data.street)
                if("OK" === data.status){
                    console.log("Status is OK")
                    
                }
            }
        }
        console.log("Envoi de la requête POST");
        xhrPost.send(JSON.stringify(body));
    })
});