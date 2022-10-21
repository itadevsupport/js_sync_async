const idPersona = 1001;

const btn1 = document.querySelector('#uno');
const btn2 = document.querySelector('#due');
const btn3 = document.querySelector('#tre');
const btn4 = document.querySelector('#quattro');
const btn5 = document.querySelector('#cinque');
const btn6 = document.querySelector('#sei');
const btn7 = document.querySelector('#sette');
const btn8 = document.querySelector('#otto');

// eventi
btn1.addEventListener('click', () => {
    for (let i = 0; i < 20000000; i++) {
        let d = new Date();
    }
    console.log('uno');
});

btn2.addEventListener('click', () => {
    console.log('due');
});

btn3.addEventListener('click', () => {
    setTimeout(function () {
        console.log('log che compare dopo 3 secondi');
    }, 3000);
    console.log('tre');
});

btn4.addEventListener('click', () => {
    let persone = fetch('../persone.json')
        .then(res => res.json())
        .then(data => {
            //console.log(data);
        });

    console.log(persone);
});

btn5.addEventListener('click', () => {
    // debugger;
    getPersone(stampaDati);
});

btn6.addEventListener('click', () => {
    getPersonaById(idPersona, alertOK, alertKO);
});

btn7.addEventListener('click', () => {

    const isMantenuta = true;
    let promessa = new Promise((resolve, reject) => {
        // qui è possibile inserire chiamate asincrone  
        if (isMantenuta)
            resolve('ho mantenuto la promessa');
        else
            reject('non ho mantenuto la promessa');
    });

    promessa.then(value => {
        console.log(value);
    }).catch(error => {
        console.log(error);
    })
    console.log(promessa);

});

btn8.addEventListener('click', () => {
    
    eseguiPromessa("itadevsupport")
        .then(value => {
            console.log(value);
        }).catch(error => {
            console.log(error);
        });
        
});


// funzioni

function eseguiPromessa(nome) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (nome === 'itadevsupport')
                resolve('ok, hai inserito: ' + nome);
            else
                reject('errore: hai inserito: ' + nome);
        }, 3000);
    });
}

function getPersone(callback) {
    fetch('../persone.json')
        .then(res => res.json())
        .then(data => {
            console.log(data);
            callback(data);
        });
}

function getPersonaById(id, callback, errorCallback) {
    fetch('../persone.json')
        .then(res => res.json())
        .then(data => {
            //console.log(data);
            elementoTrovato = false;
            data.forEach(p => {
                if (p.id === id) {
                    callback(p);
                    elementoTrovato = true;
                }
            });
            if (!elementoTrovato)
                errorCallback(id);
        });
}

function stampaDati(persone) {
    const lista = document.querySelector('#lista');
    lista.style.opacity = 1;
    lista.innerHTML = ''; // svuoto lista in modo che a successivi click non vada in aggiunta
    persone.forEach(persona => {
        lista.innerHTML += `
        <li>
            ${persona.nome}
            <b>${persona.cognome.toUpperCase()}</b>
            (id: ${persona.id})
        </li>
        `;
    });
}

function alertOK(persona) {
    alert(`persona con id ${persona.id} trovata :) ${persona.nome} ${persona.cognome}.`);
}

function alertKO(id) {
    alert(`persona con id ${id} non trovata :(`);
}