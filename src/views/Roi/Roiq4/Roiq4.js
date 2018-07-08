import React, { Component } from 'react';
import { HorizontalBar, Doughnut, Line, Pie, Polar, Radar } from 'react-chartjs-2';
import {
    Button,
    ButtonDropdown,
    Card,
    CardBody,
    CardFooter,
    CardHeader,
    Col,
    Collapse,
    DropdownItem,
    DropdownMenu,
    DropdownToggle,
    Form,
    FormGroup,
    FormText,
    FormFeedback,
    Input,
    InputGroup,
    InputGroupAddon,
    InputGroupText,
    Label,
    Row,
  } from 'reactstrap';
  
class Roiq4 extends Component{

    constructor(){
        super();
        this.state = {
          startdate:"2012-07-17",
          enddate:"2015-07-17",
          price:"50",
          roidata:[],
          companydata:[],
        };
    }

      handleSubmit = (event) => {
        this.setState({roidata: []});
        this.setState({companydata: []});
        const request = async () => {
            const response = await fetch('http://localhost:8080/BestPerformingStock', {
                method: 'post',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify({
                    startDate: this.state.startdate,
                    endDate:this.state.enddate,
                    price:this.state.price
                })
            });
            const json = await response.json();
            if(json.length < 5){
                alert('Data not available for this year');
            }
            else{
                for(var i=0; i < 5; i++){
                    if(json[i] != undefined){
                        this.setState({
                            roidata: [...this.state.roidata, json[i].roi],
                            companydata: [...this.state.companydata, json[i].name]
                        })
                    }
                    else{
                        alert('Data not available for this year');
                    }
                }
            }
        }
        
        request();

        
      };

    handleStartDateChange = (e) => {
        this.setState({startdate: e.target.value});
     }
     handleEndDateChange = (e) => {
        this.setState({enddate: e.target.value});
     }
     handlePriceChange = (e) => {
        this.setState({price: e.target.value});
     }


    render(){

        const chartData = {
            labels: this.state.companydata,
            datasets:[
              {
                label:'Price',
                data:this.state.roidata,
                backgroundColor:[
                    '#20a8d8',
                    '#4dbd74',
                    '#63c2de',
                    '#f8cb00',
                    '#f86c6b'
                ]
              }
            ]
          };

        return (
            <div>
                <Card>
                <CardBody>
                <Form onSubmit={this.handleSubmit}>
                <Row>
                    <Col md="3">
                      <Label>Enter Start Date</Label>
                      {/*<Input type="text" id="startdate" placeholder="Enter Start Date" onChange={this.handleStartDateChange}/>*/}
                      <Input type="date" id="startDate" placeholder="Enter Start Date" onChange={this.handleStartDateChange}/>
                    </Col>
                    <Col md="3" >
                       <Label>Enter End Date</Label>            
                      <Input type="date" id="enddate" placeholder="Enter End Date" onChange={this.handleEndDateChange}/>
                    </Col>
                    <Col md="3" >
                    <Label>Enter Price</Label>            
                      <Input type="text" id="price" placeholder="Enter Price" onChange={this.handlePriceChange}/>
                    </Col>
                    <Col md="3">
                        <Label></Label>
                        <Button block color="primary" type="submit">Submit</Button>
                    </Col>
                    </Row>
                    </Form>
                    </CardBody>
                    </Card>
                
                    <div className="animated fadeIn">
                    <Card>
                        <CardBody>
                            <Row>
                            <Col xs="12" md="12" xl="12">
                                <Row>
                                <Col md="4">
                                    <div className="callout callout-info">
                                    <h4 className="text-muted">Price Under</h4>
                                    <strong className="h3">{this.state.price}</strong> 
                                    </div>
                                </Col>
                                <Col md="4">
                                    <div className="callout callout-danger">
                                    <h4 className="text-muted">From </h4>
                                    <div >
                                        <strong className="h3">{this.state.startdate}</strong>
                                        </div>
                                    </div>
                                </Col>
                                <Col md="4">
                                    <div className="callout callout-success">
                                    <h4 className="text-muted">To</h4>
                                    <strong className="h3">{this.state.enddate}</strong>
                                    </div>
                                </Col>
                                </Row>
                                <hr className="mt-0" /> 
                                <HorizontalBar data={chartData} height={70} options={{ maintainAspectRatio: true,
                                                                                        scales: { 
                                                                                            xAxes: [{
                                                                                                barPercentage: 0.5,
                                                                                                gridLines: {display:false},
                                                                                                ticks: { beginAtZero: true } 
                                                                                            }],
                                                                                            yAxes: [{ 
                                                                                                ticks: { beginAtZero: true }, 
                                                                                                barPercentage: 0.2, 
                                                                                                categoryPercentage: 0.8,
                                                                                                gridLines: {display:false}   
                                                                                                }] } }} />                   
                            </Col>
                            </Row>
                            <br />
                        </CardBody>
                    </Card>
                </div>
           </div>
        );
    }
}

export default Roiq4;