import Card from "../card";

export default function CardList(props) {
    return (
        <div>
            <Card name={props.name} />
            <Card name={props.name} />
        </div>
    );
}
