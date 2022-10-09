import 'bootstrap/dist/css/bootstrap.min.css'
import {Button, Card} from 'react-bootstrap'

export const Product = ({title, price, pic}) => {
    return (
        <div className="col-sm-4">
            <Card className='mb-3'>
                
                <Card.Img src = {pic} />
                
                <Card.Body>

                    <Card.Title>
                        <h4>{price}</h4>
                    </Card.Title>

                    <Card.Text class="text-muted">
                        <b>{title}</b> 
                    </Card.Text>

                    <Button variant="primary">Купить</Button>

                </Card.Body>
            </Card>
        </div>
    )
}