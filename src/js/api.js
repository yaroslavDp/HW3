import { myCustomError } from "./error";
const API_URL = 'https://swapi.dev/api';

    async function getAllCharacters() {
        const response = await fetch(`${API_URL}/people/`);
        if(!response.ok){
            throw new myCustomError('Error getting all characters');
        }
        return await response.json()
    }
    async function getCharacter(id) {
          const response = await fetch(`${API_URL}/people/${id}`);
          if(!response.ok){
            throw new myCustomError('Error getting one character');
        }
        return await response.json()
        
    }
    
      async function updateCharacter(id, data) {
        return await new Promise(function(resolve, reject) {
            setTimeout(() => resolve(`Charachter with ID: ${id} successfully updated with data ${data}`), 2000);
        });
    }

export {getAllCharacters, getCharacter, updateCharacter};