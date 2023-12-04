

let dipendenti = [
     {
          nome: "wanye barnett",
          ruolo: "CEO",
          immagine: ".jpg"
     },
     {
          nome: "Angela",
          ruolo: "chief editor",
          immagine: ".jpg"
     },
     {
          nome: "walter",
          ruolo: "office manager",
          immagine: ".jpg"
     },
     {
          nome: "Angela",
          ruolo: "S.M.M",
          immagine: ".jpg"
     },
     {
          nome: "scott",
          ruolo: "dev",
          immagine: ".jpg"
     },
     {
          nome: "barbara",
          ruolo: "graph",
          immagine: ".jpg"
     }
]

for (let i = 0;i<dipendenti.length;i++) {
     for (let key in dipendenti[i]) {
          document.getElementById('dipendenti').innerHTML += `<li>${[key]} = ${dipendenti[i][key]}</li> `
          console.log(dipendenti[key])
     }
}

