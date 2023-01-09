import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './index.css';


const Numbers = () => {

  const [result, setResult] = useState("");

  const handleClick = (e) => {

  }

  return (
    <div className="numbers">
      <form>
        <input type="text" value={result}></input>
      </form>

      <Container>

        <Row className='row'>
          <Col>
            {/* <Button id='Clear' className={`buttons btn${toggleClassCheck}`} onMouseDown={changeStyle} onMouseUp={changeStyle}>C</Button> */}
            <Button className="buttons">C</Button>
          </Col>
          <Col>
            <Button className="buttons">+/-</Button>
          </Col>
          <Col>
            <Button className="buttons">%</Button>
          </Col>
          <Col>
            <Button className="buttons">/</Button>
          </Col>
        </Row>

        <Row className='row'>
          <Col>
            <Button className="buttons">7</Button>
          </Col>
          <Col>
            <Button className="buttons">8</Button>
          </Col>
          <Col>
            <Button className="buttons">9</Button>
          </Col>
          <Col>
            <Button className="buttons">x</Button>
          </Col>
        </Row>

        <Row className='row'>
          <Col>
            <Button className="buttons">4</Button>
          </Col>
          <Col>
            <Button className="buttons">5</Button>
          </Col>
          <Col>
            <Button className="buttons">6</Button>
          </Col>
          <Col>
            <Button className="buttons">-</Button>
          </Col>
        </Row>

        <Row className='row'>
          <Col>
            <Button className="buttons">1</Button>
          </Col>
          <Col>
            <Button className="buttons">2</Button>
          </Col>
          <Col>
            <Button className="buttons">3</Button>
          </Col>
          <Col>
            <Button className="buttons">+</Button>
          </Col>
        </Row>

        <Row className='row'>
          <Col>
            <Button className="buttons">0</Button>
          </Col>
          <Col>
            <Button className="buttons">.</Button>
          </Col>
          <Col sm={'6'}>
            <Button className="buttons">=</Button>
          </Col>
        </Row>

      </Container>
    </div>
  );
};

export default Numbers;