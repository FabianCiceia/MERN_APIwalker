
import { useParams } from 'react-router'

function Number(props) {
    const { number } = useParams();
    return (
        <h1>Tu numero es {number}</h1>
    );
}

export default Number
