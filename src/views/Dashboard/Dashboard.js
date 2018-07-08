import React, { Component } from 'react';
import { Bar, Line } from 'react-chartjs-2';
import Odometer from 'react-odometerjs';
import {
  Badge,
  Button,
  ButtonDropdown,
  ButtonGroup,
  ButtonToolbar,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  CardTitle,
  Col,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  Progress,
  Row,
  Table,
} from 'reactstrap';


const brandPrimary = '#20a8d8';
const brandSuccess = '#4dbd74';
const brandInfo = '#63c2de';
const brandWarning = '#f8cb00';
const brandDanger = '#f86c6b';

var elements = 27;
var data1 = [
  98.42,
  95.75,
  104.27,
  106.73,
  94.97,
  96.62,
  98.55,
  107.67,
  110.86,
  115.72,
  110.15,
  114.33
  ];
var data2 = [
  307.11,
  308.27,
  333.69,
  351.32,
  356.16,
  346.96,
  354.07,
  370.05,
  366.4,
  350.42,
  364.2,
  385.6
  ];
var data3 = [
  152.75,
  148.91,
  152.99,
  152.61,
  146.54,
  154.97,
  165.16,
  166.77,
  152.55,
  150.1,
  149.01,
  158.87
  ];

const mainChart = {
  labels: ["January", "February", "March","April","May", "June", "July", "August",
  "September","October","November","December"],
  datasets: [
    {
      label: 'Apple Inc.',
      backgroundColor: 'transparent',
      borderColor: brandInfo,
      pointHoverBackgroundColor: '#fff',
      borderWidth: 2,
      data: data1,
    },
    {
      label: 'BlackRock',
      backgroundColor: 'transparent',
      borderColor: brandSuccess,
      pointHoverBackgroundColor: '#fff',
      borderWidth: 2,
      data: data2,
    },
    {
      label: 'Costco Co.',
      backgroundColor: 'transparent',
      borderColor: brandDanger,
      pointHoverBackgroundColor: '#fff',
      borderWidth: 2,
      data: data3,
    },
  ],
};

const mainChartOpts = {
  maintainAspectRatio: false,
  legend: {
    display: false,
  },
  scales: {
    xAxes: [
      {
        gridLines: {
          drawOnChartArea: false,
        },
      }],
    yAxes: [
      {
        ticks: {
          beginAtZero: true,
        },
      }],
  },
  elements: {
    point: {
      radius: 0,
      hitRadius: 10,
      hoverRadius: 4,
      hoverBorderWidth: 3,
    },
  },
};

class Dashboard extends Component {
  constructor(props) {
    super(props);
      
    this.state = {
      odometerValue: 0,
      c:'',
      cp:'',
      s:'',
      sa:'',
      tot:'',
  };
  }

  handleSubmit = (event) => {
    this.setState({
      c:'',
      cp:'',
      s:'',
      sa:'',
      tot:'',
  });
    const request = async () => {
        const response = await fetch('http://localhost:8080/Datastats', {
            method: 'get',
            headers: {'Content-Type': 'application/json'},
        });
        const json = await response.json();
        
        if(json[0] != undefined){
            this.setState({
                s: json[0].tuples,
                sa: json[1].tuples,
                c: json[4].tuples,
                cp: json[3].tuples,
                tot: json[6].tuples,
            })
        }   
    }
    
    request();

    
  };


  render() {

    const { c,cp,s,sa,tot } = this.state;
    return (
      <div className="animated fadeIn">
        <Row>
          <Col xs="12" sm="6"  md="4">
            <Card className="text-white bg-primary color-opacity">
              <CardBody className="pb-1">
                <Row class="mb-0">
                <Col>
                  <h3>Apple Inc</h3>
                </Col>
                </Row>
                <Row>
                <Col class="right-text">
                  <h2>115.8</h2>
                </Col>
                </Row>
              </CardBody>
            </Card>
          </Col>

          <Col xs="12" sm="6"  md="4">
            <Card className="text-white bg-success color-opacity">
            <CardBody className="pb-1">
                <Row class="mb-0">
                <Col>
                  <h3>BlackRock</h3>
                </Col>
                </Row>
                <Row>
                <Col class="right-text">
                  <h2>380.5</h2>
                </Col>
                </Row>
              </CardBody>
            </Card>
          </Col>

          <Col xs="12" sm="6"  md="4">
            <Card className="text-white bg-danger color-opacity">
            <CardBody className="pb-1">
                <Row class="mb-0">
                <Col>
                  <h3>Costco</h3>
                </Col>
                </Row>
                <Row>
                <Col class="right-text">
                  <h2>160.1</h2>
                </Col>
                </Row>
              </CardBody>

            </Card>
          </Col>
        </Row>
        <Row>
          <Col>
            <Card>
              <CardBody>
                <Row>
                  <Col sm="6">
                    <CardTitle className="mb-0">Favorite Stocks</CardTitle>
                  </Col>
                </Row>
                <div className="chart-wrapper" style={{ height: 300 + 'px', marginTop: 40 + 'px' }}>
                  <Line data={mainChart} options={mainChartOpts} height={300} />
                </div>
              </CardBody>
              </Card>
          </Col>
        </Row>
        <Row>
            <Col>
                <Card className="tuple-card">
                    <CardBody>
                      <Row>
                        <Col md="2"/>
                        <Col md="8">
                        <button type="button" className="btn btn-pill btn-block btn-danger" onClick={this.handleSubmit}>Click to Discover Number of Tuples!</button>
                        </Col>
                        <Col md="2"/>
                      </Row>
                      <br class="m-2"/>
                      <Row>
                      <Col md="3"/>
                      <Col md="3" className="mt-2">
                        <h2 align="right">Company</h2>
                      </Col>
                      <Col md="6">
                        <Odometer class="odometer" format="d" duration={ 500 } theme="minimal" value={ c } />
                      </Col> 
                      </Row>
                      <Row> 
                      <Col md="2"/>
                      <Col md="4" className="mt-2">
                        <h2 align="right">Company Profile</h2>
                      </Col>
                      <Col md="6">
                        <Odometer class="odometer" format="d" duration={ 500 } theme="minimal" value={ cp } />
                      </Col>
                      </Row>
                      <Row>
                      <Col md="3"/>
                      <Col md="3" className="mt-2">
                      <h2 align="right">Stock Price</h2>
                      </Col>
                        <Col md="6">
                        <Odometer class="odometer" format="d" duration={ 500 } theme="minimal" value={ s } />
                        </Col>
                      </Row>  
                      <Row>
                        <Col md="1"/>
                        <Col md="5" className="mt-2">
                        <h2 align="right">Split Adjusted Stock Price</h2>
                        </Col>
                        <Col md="6">
                        <Odometer class="odometer" format="d" duration={ 500 } theme="minimal" value={ sa } />
                        </Col>
                      </Row>
                      <Row>
                      <Col md="3"/>
                      <Col md="3" className="mt-2">
                      <h2 align="right">Total Tuples</h2>
                      </Col>
                        <Col md="6" >
                        <Odometer class="odometer" format="d" duration={ 500 } theme="minimal" value={ tot } />
                        </Col>
                      </Row>
                    </CardBody>
                </Card>
            </Col>
        </Row>
        
         </div>
    );
  }
}

export default Dashboard;
