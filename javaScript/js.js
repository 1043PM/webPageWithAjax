
const usa = ["New York, NY", "Dallas, Tex", "Detroit, Mich", "LA, Calif"];
const mexico = ["Merida,Yuc", "Torreon,Coah", "Morelia,Mich", "Mexico City"];
const spanish = ["Solicitud de Empleo", "Negocios", "Queja/Sugerencia"]
const english = ["Job Application", "Business Inquiries", "Complaint/Suggestions"]

function loadCities(value){

	let stateSelect = document.getElementById("city");
  let purposeSelect = document.getElementById("purpose");

    if(value==="Default") {
        stateSelect.disabled=true;         
        stateSelect.selectedIndex = 0;
        purposeSelect.disabled = true;
        purposeSelect.selectedIndex = 0;

    }else{
         
        stateSelect.options.length=0; 
        stateSelect.options[0]=new Option("Selecciona una opcion", "0");
                
        const options = value === "Mexico" ? mexico : usa; 

        fillSelect(stateSelect, options);
         
        stateSelect.disabled=false;
   } 
}

function fillSelect(select, options) {
    options.forEach( (element) => {
        select.add(new Option(element));
    })
}

function loadPurpose(value) {
    var selectedCountry = document.getElementById("country").value;   
    let purposeSelect = document.getElementById("purpose");


    if(selectedCountry == "Default"){
    	purposeSelect.disabled = true;

    }else{

    	purposeSelect.options.length=0; 
        purposeSelect.options[0]=new Option("Selecciona una opcion", "0");
    	const options = selectedCountry == "Mexico" ? spanish : english; 
    	fillSelect(purposeSelect, options);
    	purposeSelect.disabled = false;
    }
}

function validarEmail(email) {

    if (/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i.test(email)){   		
   		return true;
  	} else {   		
   		return false;   		
  	}
}

function validarFormulario(){

	var campoNombre = document.getElementById('nombre').value;
	var campoCountry = document.getElementById('country').selectedIndex;
	var campoTexto = document.getElementById('subject').value;
	var campoEmail = document.getElementById('email').value;


	if(campoNombre == null || campoNombre.length == 0 || /^\s+$/.test(campoNombre)){
 		alert("El campo nombre esta vacío");
		return false;
	}

  if(campoCountry == null || campoCountry == "Default"){
 		alert("El campo pais esta vacío");
		return false;
	}

  if (campoTexto.isEmpty()) {
    	alert("Ingrese lo que quiere decirnos");
    	return false;
  }

  if(!(/\S+@\S+\.\S+/.test(campoEmail))){
  		alert("El campo email esta vacío");
  		return false;
  }
  return true;    
}

function loadDoc(url) {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      document.getElementById("demo").innerHTML =
      this.responseText;
    }
  };
  xhttp.open("GET", url, true);
  xhttp.send();
}
