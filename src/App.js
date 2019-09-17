import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Menu from './Components/menu';
import TweesList from './Components/tweetList';
import Search from './Components/search';
import Footer from './Components/footer';
import TrendList from './Components/trendList';
import ToFollow from './Components/toFollow';
import './App.css';
import axios from 'axios';


class App extends React.Component{
  
  state = {
    datos:{}
  };
  
  componentDidMount() {
    axios.get('https://gist.githubusercontent.com/josejbocanegra/36d259fe4a9908c2bda367b5ee9f4ed6/raw/63f9d7c460d09cb22f4299b879b1b868159efff3/tweets.json')
      .then(res => {
        const d = res.data;
        this.setState({d});
      })
  }

  render(){
    return(
    <div>

      {this.state.value}

     <Container>
        <Row>
          <Col>
            <Menu>
                
            </Menu>
          </Col>
          <Col>
            <TweesList>
               
            </TweesList>
          </Col>
          <Col>
            <Row>
              <Search>
              
              </Search>
            </Row>
            <br></br>
            <Row>
            <TrendList>

            </TrendList>
            </Row>
            <br></br>
            <Row>
            <ToFollow>

            </ToFollow>
            
            </Row>
            <br></br>
            <Row>
            <Footer>

            </Footer>
            </Row>
            

          
          </Col>
        </Row>


      </Container>

    </div>
    );
  };
}



export default App;
