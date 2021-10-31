import { useState } from 'react';// desestruturando o react importando o useState [vem com um array com uma variavel e uma função]
import Button from '../Button';//para acessar o arquivo .. para voltar

const Card = () => {
    
    const [valor, setValor] = useState(0)//seta o inicio do valor

    function Incremento (){
        setValor(valor + 1)
    }
    function Decremento (){
        setValor(valor - 1)
    }

    return(
        <div class="card">
            <div className="card-header">
                Meu primeiro card
            </div>
            
            <div className="card-body">
                <Button
                    className="btn btn-success" 
                    onClick={Incremento}
                >
                    Adicionar
                </Button>
                <Button  
                    className="btn btn-danger" 
                    onClick={Decremento}
                >
                    Decrementar
                </Button>

                <p>{valor}</p>

            </div>
        </div>
    )
}

export default Card;