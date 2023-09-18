import React, {useEffect, useState} from "react";

//create your first component
const Getdata = () => {

    const [characters,setCharacters] = useState([])

    function getCharacters(){
        console.log('getCharacters()')
        fetch('https://rickandmortyapi.com/api/character')
        .then( (response) => response.json() )
        .then( (data) => setCharacters(data.results) )
    }

    useEffect( ()=>{
        console.log('se cargo la pagina')
        getCharacters()
    },[])

	return (
		<div className="text-center">
			<h1 className="text-center mt-5">Personajes Rick y morty</h1>			
            {characters.map( (personaje) => <li key={personaje.id}>{personaje.name}. <img src={personaje.image} alt="" /></li>  )}
		</div>
	);
};

export default Getdata;

