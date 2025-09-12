const data = [
  "Angel",
  "Ayoub",
  "caitlin",
  "Emre",
  "Gijs",
  "Ilias",
  "Isaac",
  "Kate",
  "Kayleigh",
  "Khitam",
  "Khouloud",
  "Lester",
  "Mohamed",
  "Mouaad",
  "Oumaima",
  "Rowan",
  "Roxy",
  "Seb",
  "Semih",
  "Siyar",
  "Sven",
  "Thomas",
  "Tin",
  "Tjeerd",
];

const wrapper = document.getElementById("output");

let people;

for (let i = 0; i < data.length; i++) {
  people = `<div class="squad-profile">
          <img
            src="assets/Squad1I-${data[i]}.JPG"
            height="100"
            width="100"
            alt="foto van persoon"
          />
          <p>${data[i]}</p>
        </div>`;
}

wrapper.innerHTML = people;
