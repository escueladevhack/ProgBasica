$(()=>{

	Materialize.toast(`Bienvenido`, 2000);

	$("#btnSumar").click(sumar);
	$("#btnRestar").click(restar);
	$("#btnMayor").click(mayor);
	$("#btnMenor").click(menor);	

	function sumar(){

		Materialize.toast(`La suma: es `, 4000);
	}

	function restar(){

		Materialize.toast(`La resta: es `, 4000);		
	}	

	function mayor(){

		Materialize.toast(`El número mayor es `, 4000);		
	}

	function menor(){
		
		Materialize.toast(`El número menor: es `, 4000);
	}

});