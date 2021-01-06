type Props = {
    message : string;
}

function Hello({message} : Props){
    return (
        <h1>Componente {message}!</h1>
    )
}

export default Hello;