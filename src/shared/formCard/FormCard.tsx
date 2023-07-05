import { Card } from "react-bootstrap";

const FormCard = ({ backgroundColor ,children }:any) => {
    return (
          <Card style={{ backgroundColor }}>
              <Card.Body>
                <Card.Text>{children}</Card.Text>
              </Card.Body>
          </Card>
    );
  };
  
  export default FormCard;