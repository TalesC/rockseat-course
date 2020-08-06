import axios from 'axios';

const minhaPromise = () => new Promise((resolve, reject) => {
    setTimeout(()=> {resolve('OK')}, 2000);
});

//método convencional
minhaPromise().then(response => {
    console.log(response);
}).catch(err => {
    console.log(err);
});

/*ES8
essa função async precisa das dependencias 
    @babel/plugin-transform-async-to-generator
    @babel/polyfill
*/
async function executaMinhaPromise() {
    const response = await minhaPromise();

    console.log(response);
}

executaMinhaPromise();


async function executaPromise() {
    console.log(await minhaPromise());
    console.log(await minhaPromise());
    console.log(await minhaPromise());
}
executaPromise();

//requição usando axios
class Api {
    static async getUserInfo(username) {
        try {
            const response = await axios.get(`https://api.github.com/users/${username}`);
            
            console.log(response);
        } catch (err) {
            console.warn('Erro na APi');
        }        
    }
}

Api.getUserInfo('diego3g');
Api.getUserInfo('dsada2s4da5sd12as1d5as1d5asd4a4s');
