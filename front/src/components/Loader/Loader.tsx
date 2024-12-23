import Spinner from 'react-bootstrap/Spinner';
import {Stack} from "react-bootstrap";

function SizesExample() {
    return (
        <Stack direction="horizontal" gap={2} className="justify-content-center gap-3 align-items-center">
            <Spinner animation="grow" size="sm" />
            <Spinner animation="grow" />
            <Spinner animation="grow" />
            <Spinner animation="grow" />
            <Spinner animation="grow" size="sm" />
        </Stack>
    );
}

export default SizesExample;