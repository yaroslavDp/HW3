import { Character } from "./character";
import { Jedi } from "./character";
import { myCustomError } from "./error";
import { getAllCharacters, getCharacter, updateCharacter } from "./api";

export class App {

    async charGetAll(){
        const characterListContainer = document.querySelector('.characters__list .container');
        characterListContainer.innerHTML = '';
        characterListContainer.innerHTML = '<p class="loading-text">Loading....</p>'
        getAllCharacters().then((data)=>{
            characterListContainer.innerHTML = '';
            data.results.forEach(({id, name, birth_year, gender, height, mass, homeworld}) => {
                if(name == 'Luke Skywalker' || name == 'Obi-Wan Kenobi'){
                    new Jedi(id, name, birth_year, gender, height, mass, homeworld, 'blue').render('blue')
                   
                } else {
                    new Character(id, name, birth_year, gender, height, mass, homeworld).render();
                }
                
            });
        }).catch((err) => {
            characterListContainer.innerHTML = '';
            characterListContainer.appendChild(err.display());
        });
    }

    async charSearchById(){
        const characterListContainer = document.querySelector('.characters__list .container');
        const searchInput = document.querySelector('.search-input');
        const searchForm = document.querySelector('.search-form');
        searchForm.addEventListener('submit', async event => {
            event.preventDefault();
            if(!searchInput.value.trim()){
                characterListContainer.innerHTML = '';
                characterListContainer.appendChild(new myCustomError('Error not valid input').display());
                return null;
            }
            if(isNaN(searchInput.value)){
                characterListContainer.innerHTML = '';
                characterListContainer.appendChild(new myCustomError('Error input must be a number').display());
                return null;
            }
            const id = +searchInput.value;
            getCharacter(id).then(data => {
                characterListContainer.innerHTML = '';
                
                const {id, name, birth_year, gender, height, mass, homeworld} = data;
                if(name == 'Luke Skywalker' || name == 'Obi-Wan Kenobi'){
                    new Jedi(id, name, birth_year, gender, height, mass, homeworld, 'blue').render('blue')
                } else {
                    new Character(id, name, birth_year, gender, height, mass, homeworld).render();
                }
            }).catch((err) => {
                characterListContainer.innerHTML = '';
                characterListContainer.appendChild(err.display());
             });
    
             searchInput.value = ''
        
        });
    }
    

        async updCharacter(){
            const updResult = document.querySelector('.character-details__result');
            const updInput = document.querySelector('.update-form__input');
            const updForm = document.querySelector('.update-form');
            updForm.addEventListener('submit', async function (event){
                event.preventDefault()
                updResult.classList.remove('success')
                if(!updInput.value.trim()){
                    updResult.innerText = '';
                    updResult.appendChild(new myCustomError('Error not valid input').display());
                    return null;
                }
                if(isNaN(updInput.value)){
                    updResult.innerText = 'Loading...'
                    await updateCharacter(1, updInput.value).then((data)=>{
                        updResult.innerText = '';
                        updResult.classList.add('success')
                        updResult.innerText = data 
                    })
                } else {
                    updResult.innerText = '';
                    updResult.appendChild(new myCustomError('Error input must be a string').display());
                }
                updInput.value = ''
    
            });
        }
}