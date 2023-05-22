let bundeslaender = [
    {
        "name": "Baden-Württemberg",
        "population": 11.1,
        "url": "https://www.baden-wuerttemberg.de/de/startseite/"
    },
    {
        "name": "Bayern",
        "population": 13.1,
        "url": "https://www.bayern.de/"
    },
    {
        "name": "Berlin",
        "population": 3.7,
        "url": "https://www.berlin.de/"
    },
    {
        "name": "Brandenburg",
        "population": 2.5,
        "url": "https://www.brandenburg.de/"
    },
    {
        "name": "Bremen",
        "population": 0.7,
        "url": "https://www.bremen.de/"
    },
    {
        "name": "Hamburg",
        "population": 1.8,
        "url": "https://www.hamburg.de/"
    },
    {
        "name": "Hessen",
        "population": 6.3,
        "url": "https://www.hessen.de/"
    },
    {
        "name": "Mecklenburg-Vorpommern",
        "population": 1.6,
        "url": "https://www.mecklenburg-vorpommern.de/startseite/"
    },
    {
        "name": "Niedersachsen",
        "population": 8,
        "url": "https://www.niedersachsen.de/startseite/"
    },
    {
        "name": "Nordrhein-Westfalen",
        "population": 17.9,
        "url": "https://www.land.nrw/"
    },
    {
        "name": "Rheinland-Pfalz",
        "population": 4.1,
        "url": "https://www.rlp.de/de/startseite/"
    },
    {
        "name": "Saarland",
        "population": 1,
        "url": "https://www.saarland.de/DE/home/home_node.html"
    },
    {
        "name": "Sachsen",
        "population": 4.1,
        "url": "https://www.sachsen.de/"
    },
    {
        "name": "Sachsen-Anhalt",
        "population": 2.2,
        "url": "https://www.sachsen-anhalt.de/startseite/"
    },
    {
        "name": "Schleswig-Holstein",
        "population": 2.9,
        "url": "https://www.schleswig-holstein.de/DE/Home/home_node.html"
    },
    {
        "name": "Thüringen",
        "population": 2.1,
        "url": "https://thueringen.de/"
    }
];



window.addEventListener('DOMContentLoaded', (event) => {
    let filterButtons = document.getElementById('filter-buttons');
    let alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
    alphabet.forEach(letter => {
      let filteredList = bundeslaender.filter(bundesland => bundesland.name[0] === letter);
      if (filteredList.length > 0) {
        let button = document.createElement('button');
        button.innerText = letter;
        button.addEventListener('click', () => {
          filterList(letter);
        });
        filterButtons.appendChild(button);
      }
    });
  
    render(bundeslaender);
  });

function filterList(letter) {
  let filteredList = bundeslaender.filter(bundesland => bundesland.name[0] === letter);
  render(filteredList);
}

function render(list) {
  let container = document.getElementById('container');
  container.innerHTML = '';
  for (let i = 0; i < list.length; i++) {
    let bundesland = list[i];
    container.innerHTML += /*html*/ `
      <div class="bundesland-container"><a href=${bundesland['url']} target="_blank"><b>${bundesland['name']}</b>
      <div>${bundesland['population']} Millionen</div>
      </a></div>
    `;
  }
}