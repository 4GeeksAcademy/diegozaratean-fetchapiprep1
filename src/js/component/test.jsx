import React from "react";

//create your first component
const Test = () => {

    function leerTareas(){
        console.log('leerTareas')
        fetch('https://playground.4geeks.com/apis/fake/todos/user/david82')
        .then( (response)=> response.json() )
        .then( (cualquiera)=> console.log(cualquiera) )
    }

    function crearUsuario(){
        console.log('crearUsuario')
        
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify([])
        };
        fetch('https://playground.4geeks.com/apis/fake/todos/user/david83', requestOptions)
            .then(response => response.json())
            .then(data =>  console.log(data));

    }
	return (
		<div className="text-center">
			<h1 className="text-center mt-5">Test</h1>			
            <button onClick={leerTareas}>Leer tareas</button>
            <button onClick={crearUsuario}>Crear usuario</button>
		</div>
	);
};

export default Test;
