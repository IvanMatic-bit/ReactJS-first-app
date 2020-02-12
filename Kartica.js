
import React from 'react';
import {
    Card,
    CardBody,
    CardTitle,
    CardText,
    Button,
    Fade
} from 'reactstrap';
import './App.css';

export default class Joke extends React.Component {
    constructor(props) {
        super(props);
        this.state = { fadeIn: false };
        this.toggle = this.toggle.bind(this);
      }
     

      render() {
        const mystyle = {
            color: "white",
            backgroundColor: "DodgerBlue",
            padding: "10px",
            fontFamily: "Arial",
            
            
          };
        let { naslov, sadrzaj } = this.props.filmovi;
        return (
            <div>
                <Card style={mystyle}>
                    <CardBody>
                        <CardTitle>{naslov}</CardTitle>
                        <Button color="light" onClick={this.toggle}>Detalji</Button>
                        <Fade in={this.state.fadeIn} className='my-2'>
                            <CardText>{sadrzaj}</CardText>
                        </Fade>
                    </CardBody>
                </Card>
            </div>
        );
    }

    toggle() {
        this.setState({
          fadeIn: !this.state.fadeIn
        });
    }

    toggle() {
        this.setState({
          fadeIn: !this.state.fadeIn
        });
    }
};
