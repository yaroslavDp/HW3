
export class Character {
  constructor(id, name, birth_year, gender, height, mass, homeworld) {
    this.id = id;
    this.name = name;
    this.birthYear = birth_year;
    this.gender = gender;
    this.height = height;
    this.mass = mass;
    this.homeworld = homeworld.includes('1', 30) ? 'Tatooine' : 'Naboo';
  }

  render(saberColor) {
    const characterDiv = document.createElement("div");
    const characterListContainer = document.querySelector('.characters__list .container');
    characterDiv.classList.add('character__item');
    const pJedi = `<p class='character__item-descr'>Occupation: JEDI</p>
                   <p class='character__item-descr'>Light Saber: ${saberColor}</p>`;

    characterDiv.innerHTML = `
      <h2 class='character__item-subtitle'>${this.name}</h2>
      <p class='character__item-descr'>Height: ${this.height} cm</p>
      <p class='character__item-descr'>Mass: ${this.mass} kg</p>
      <p class='character__item-descr'>Birth Year: ${this.birthYear}</p>
      <p class='character__item-descr'>Homeworld: ${this.homeworld}</p>
    `;
    if(saberColor){
      characterDiv.innerHTML = characterDiv.innerHTML + pJedi;
    }

    characterListContainer.append(characterDiv);
  }
}
export class Jedi extends Character {
  constructor(id, name, birth_year, gender, height, mass, homeworld, lightsaberColor) {
    super(id, name, birth_year, gender, height, mass, homeworld, homeworld);
    this.lightsaberColor = lightsaberColor;
  }

  render(saberColor) {
    super.render(saberColor);
  }
}