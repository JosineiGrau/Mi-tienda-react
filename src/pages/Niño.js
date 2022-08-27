import ItemListContainer from "../components/ItemListContainer/ItemListContainer";

const Niño = ({greeting}) => {
    return (
        <section>
            <h1>{greeting}</h1>
            <ItemListContainer genero="Niño"/>
        </section>
    )
}

export default Niño