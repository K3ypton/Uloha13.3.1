
let filmy =[];

function addFilmy(event){
    event.preventDefault();

    let menoFilmu = document.getElementById("meno").value;
    let rokFilmu = document.getElementById("rok").value;
    let herec = document.getElementById("herec").value;

    let zobraz = document.getElementById("demo");

    filmy.push({menoFilmu, rokFilmu, herec});

    vypisFilmov();

    createZoznam();
    function createZoznam(){
        

        if(filmy.length==0){
        }
        else{
            for(let j = 0; j < filmy.length-1; j++){
                document.getElementById("p").remove();
            }
        }
        for(let i =0; i < filmy.length; i++){
            let p = document.createElement("p");

            p.innerText = "Meno filmu: " + filmy[i].menoFilmu + " Rok vydania: " + filmy[i].rokFilmu + " Herci: " + filmy[i].herec;
            
            zobraz.append(p);
            p.setAttribute("id","p")
        }
    }
}

function delPoslednyFilm(event){
    event.preventDefault();

    filmy.pop();
    
    let zobraz = document.getElementById("demo");

    
    for(let j = 0; j < filmy.length+1; j++){
        document.getElementById("p").remove();
    }

    for(let i =0; i < filmy.length; i++){
        let p = document.createElement("p");

        p.innerText = "Meno filmu: " + filmy[i].menoFilmu + " Rok vydania: " + filmy[i].rokFilmu + " Herci: " + filmy[i].herec;
        
        zobraz.append(p);
        p.setAttribute("id","p")
    }


    vypisFilmov();

}

function delVsetkyFilmy(event){
    event.preventDefault();

    for(let j = 0; j < filmy.length; j++){
        document.getElementById("p").remove();
    }
    filmy = [];  
    vypisFilmov();
}

function vypisFilmov(){
    console.log( "******* Aktuálny zoznam filmov *******");
    for(let i = 0; i < filmy.length; i++){
        console.log(filmy[i]);
    }
    console.log("");
}