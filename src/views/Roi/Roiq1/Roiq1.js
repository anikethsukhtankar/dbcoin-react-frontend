import React, { Component } from 'react';
import { HorizontalBar, Doughnut, Line, Pie, Polar, Radar, Bar } from 'react-chartjs-2';
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
  
class Roiq1 extends Component{

    constructor(){
        super();
        this.state = {
          startdate:"2012-07-17",
          enddate:"2015-07-17",
          roidata:[],
          startpricedata:[],
          endpricedata:[],
          companydata:[],
        };
    }

      handleSubmit = (event) => {
        this.setState({roidata: []});
        this.setState({companydata: []});
        this.setState({startpricedata: []});
        this.setState({endpricedata: []});
        const request = async () => {
            const response = await fetch('http://localhost:8080/ROI', {
                method: 'post',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify({
                    startDate: this.state.startdate,
                    endDate:this.state.enddate,
                })
            });
            const json = await response.json();
            if(json.length < 1){
                alert('Data not available for this time period');
            }
            for(var i=0; i < json.length; i++){
                if(json[i] != undefined){
                    this.setState({
                        roidata: [...this.state.roidata, json[i].roi],
                        companydata: [...this.state.companydata, json[i].company.substring(0,10)],
                        startpricedata: [...this.state.startpricedata, json[i].startprice],
                        endpricedata: [...this.state.endpricedata, json[i].endprice]
                    })
                }
                else{
                    alert('Data not available for this time period');
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


    render(){

        const chartData = {
            labels:this.state.companydata,
            datasets:[
              {
                label:'ROI percentage',
                stack:  'Stack 0' ,
                data:this.state.roidata,
                backgroundColor: '#63c2de',
              },
              {
                label:'Buy Price',
                stack:  'Stack 1' ,
                data:this.state.startpricedata,
                backgroundColor: '#ffc107'
              },
              {
                label:'Sell Price',
                stack:  'Stack 1' ,
                data:this.state.endpricedata,
                backgroundColor:'#4dbd74'
                }
            ]
          };

        return (
            <div>
                <Card>
                <CardBody>
                <Form onSubmit={this.handleSubmit}>
                <Row>
                    <Col md="5">
                      <Label>Enter Start Date</Label>
                      {/*<Input type="text" id="startdate" placeholder="Enter Start Date" onChange={this.handleStartDateChange}/>*/}
                      <Input type="date" id="startDate" placeholder="Enter Start Date" onChange={this.handleStartDateChange}/>
                    </Col>
                    <Col md="5" >
                       <Label>Enter End Date</Label>            
                      <Input type="date" id="enddate" placeholder="Enter End Date" onChange={this.handleEndDateChange}/>
                    </Col>
                    <Col md="2">
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
                                <Col md="6">
                                    <div className="callout callout-danger">
                                    <h4 className="text-muted">From </h4>
                                    <div >
                                        <strong className="h3">{this.state.startdate}</strong>
                                        </div>
                                    </div>
                                </Col>
                                <Col md="6">
                                    <div className="callout callout-success">
                                    <h4 className="text-muted">To</h4>
                                    <strong className="h3">{this.state.enddate}</strong>
                                    </div>
                                </Col>
                                </Row>
                                <hr className="mt-0" /> 
                                <Bar data={chartData} height={70} options={{ maintainAspectRatio: true,
                                                                                        scales: { 
                                                                                            xAxes: [{
                                                                                                ticks: { beginAtZero: true } 
                                                                                            }],
                                                                                            yAxes: [{ 
                                                                                                ticks: { beginAtZero: true }, 
                                                                                                
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

export default Roiq1;