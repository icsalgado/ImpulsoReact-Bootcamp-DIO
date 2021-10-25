//usar PascalCase no nome
const Item = ( {children} ) => { //desestruturando para acessar diretamente o objeto filho
    return(
        //No react usa className no lugar de class
        <a href="#" className="list-group-item list-group-item-action list-group-item-dark">
            {children}
        </a>
        /*o objeto props vai ter um atributo texto que vai ser usado no app.js */
    )
}

export default Item;