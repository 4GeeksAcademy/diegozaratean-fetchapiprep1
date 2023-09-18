import React, { useEffect, useState} from "react";

//create your first component
const Counter = () => {

    const [count,setCount] = useState(0)
    const [count2,setCount2] = useState(20)
    
    function sumar(){
        console.log('sumar')
        setCount(count + 1)
        setCount2(count2 + 1)
    }

    //useEffect(funcion de Callback, Elemerno a ratrear)
    useEffect( ()=> {
        console.log('se cargo la pagina')
    },[])

    useEffect( ()=> {
        console.log('count cambio')
    },[count])

    useEffect( ()=> {
        console.log('count2 cambio')
    },[count2])


    function restar(){
        console.log('restar')
        setCount2(count2 - 1)
    }
	return (
		<div className="text-center">
			<h1 className="text-center mt-5">Counter</h1>	

            <button onClick={sumar}>Sumar</button>		
            <p>Resultado Counter 1: {count}</p>

            <button onClick={restar}>restar</button>		
            <p>Resultado Counter 2: {count2}</p>
		</div>
	);
};

export default Counter;