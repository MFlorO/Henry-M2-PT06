

$("#boton").click(function(){

    $("#lista").empty(); //Hago esto para vaciar la lista y que no se me acumulen los nombres

    $.get("http://localhost:5000/amigos" , function(data){ //llamo o invoca al metodo get donde le paso la url y el cb

        data.forEach(element => { //Tengo que recorrer todo el objeto amigos para obtener los nombres
            //Una vez que obtengo los nombre los tengo que agregar a un elemento li y este a dentro del ul del HTML

            let ul = document.querySelector("#lista"); // o let ul = $("#lista");
            let li = document.createElement("li");
            li.innerText = element.name;
            ul.appendChild(li);
            // $("#lista").append(li);
       
        });

    });  

});



$("#search").click(function(){
    
    let inputId = document.querySelector("#input").value
    if (inputId){
    $.get(`http://localhost:5000/amigos/${inputId}`, function(data){ 
        //Agrego el "inputID" para que el valor de input que nosotros coloquemos directamente se agrege a la URL.
        
        let amigo2 = document.querySelector("#amigo")
        amigo2.innerText = data.name;
        
    })
  } else{ //Esto es por si no ingresamos un id en el imput!!
      $("#amigo").empty()
   let amigoSinId = document.querySelector("#amigo")
   amigoSinId.innerText = "TENES QUE AGREGAR UN ID"
  }
})