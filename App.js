import React from 'react';
import {
Jumbotron,
Container,
Row,
Col
} from 'reactstrap';
import './App.css';
import Kartica from './Kartica.js';


export default class App extends React.Component{
  
 

  constructor() {
    super();
    this.state = {
      filmovi: [
        {
          naslov: "The Shawshank Redemption",
          sadrzaj: "Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency."
        },
        {
          naslov: "The Godfather",
          sadrzaj: "The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his reluctant son."
        },
        {
          naslov: "The Dark Knight",
          sadrzaj: "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological and physical tests of his ability to fight injustice."
        },
        {
          naslov: "Pulp Fiction",
          sadrzaj: "The lives of two mob hitmen, a boxer, a gangster and his wife, and a pair of diner bandits intertwine in four tales of violence and redemption.!"
        },
        {
          naslov: "Fight Club",
          sadrzaj: "An insomniac office worker and a devil-may-care soapmaker form an underground fight club that evolves into something much, much more."
        },
        {
          naslov: "Forrest Gump",
          sadrzaj: "The presidencies of Kennedy and Johnson, the events of Vietnam, Watergate, and other history unfold through the perspective of an Alabama man with an IQ of 75."
        },
       {
        naslov: "Inception",
        sadrzaj: "A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O."
       } ,
       {
         naslov:"Parasite",
         sadrzaj: "A poor family, the Kims, con their way into becoming the servants of a rich family, the Parks. But their easy life gets complicated when their deception is threatened with exposure."
       }

      ]
    }
  };

  
  render(){
    const JumbotronStyle ={
      color: "white",
      backgroundColor: "DodgerBlue",
      padding: "10px",
      fontFamily: "Arial",
    }
    let filmKartica = this.state.filmovi.map(filmovi => {
      return (
        <Col className="p-3" sm="3">
            <Kartica filmovi={filmovi} />
        </Col>
      )
    });
    return(
     <div>
        <Jumbotron style={JumbotronStyle}>
        <h1 className="display-3">Online filmovi</h1>
          <p className="lead">Pronađite sve podatke o vašim najdražim filmovima</p>
          <hr className="my-2" />
          <p>#defintlynot kopija IMDb</p>
          <p className="lead">
          </p>
        
        </Jumbotron>
        <Container fluid>
          <Row >
           {filmKartica}
          </Row>
        </Container>
        </div>
      
    )
  };

}
