import React, { Component } from 'react';
import { Bar, Doughnut, Line, Pie, Polar, Radar } from 'react-chartjs-2';
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


class Industryq1 extends Component{

    constructor(){
        super();
        this.state = {
          sector:"Information Technology",
          year:"2010",
          monthwisedata:[],
        };

    }

      handleSubmit = (event) => {
        this.setState({monthwisedata: []});
        const request = async () => {
            const response = await fetch('http://localhost:8080/MonthwiseIndustryGrowth', {
                method: 'post',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify({
                    sector: this.state.sector,
                    year:this.state.year
                })
            });
            const json = await response.json();
            if(json.length === 12){
                for(var i=0; i < 12; i++){
                    if(json[i] != undefined){
                        this.setState({
                            monthwisedata: [...this.state.monthwisedata, json[i].avgClosePrice]
                        })
                    }
                    else{
                        alert('Data not available for this year');
                    }
                }
            }
            else{
                alert('Data not available for this year');
            }
        }
        
        request();

        
      };

    handleSectorChange = (e) => {
        this.setState({sector: e.target.value});
    }
    
    handleYearChange = (e) => {
        this.setState({year: e.target.value});
    }

    makeOption = (x) => {
        return <option>{x}</option>;
    };

    render(){

        const sectorlist = ["Information Technology",
            "Energy",
            "Utilities",
            "Telecommunications Services",
            "Materials",
            "Consumer Staples",
            "Real Estate",
            "Industrials",
            "Health Care",
            "Consumer Discretionary",
            "Financials"];
        const yearlist = [2010,2011,2012,2013,2014,2015,2016];


        const chartData = {
            labels: ['January', 'Febraury', 'March', 'April', 'May', 'June', 'July', 
                    'August', 'September', 'October', 'November', 'December'],
            datasets:[
              {
                label:'Average Stock Price',
                data:this.state.monthwisedata,
                backgroundColor:[
                  'rgba(255, 99, 132, 0.6)',
                  'rgba(54, 162, 235, 0.6)',
                  'rgba(255, 206, 86, 0.6)',
                  'rgba(75, 192, 192, 0.6)',
                  'rgba(153, 102, 255, 0.6)',
                  'rgba(255, 159, 64, 0.6)',
                  'rgba(255, 99, 132, 0.6)',
                  'rgba(54, 162, 235, 0.6)',
                  'rgba(255, 206, 86, 0.6)',
                  'rgba(75, 192, 192, 0.6)',
                  'rgba(153, 102, 255, 0.6)',
                  'rgba(255, 159, 64, 0.6)',
                  'rgba(255, 99, 132, 0.6)'
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
                    <Col md="6">
                      <Label>Select Sector</Label>
                      <Input type="select" id="sector" placeholder="Select Sector" onChange={this.handleSectorChange}>
                        {sectorlist.map(this.makeOption)}
                      </Input>
                    </Col>
                    <Col md="4" >  
                    <Label>Enter Year</Label>          
                      <Input type="select" id="year" placeholder="Enter Year" onChange={this.handleYearChange}>
                        {yearlist.map(this.makeOption)}
                      </Input>
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
                            <div className="chart-wrapper">
                                <Line data={chartData} height={100} options={{ maintainAspectRatio: true,   
                                                                            scales: { yAxes: [{ ticks: { beginAtZero: true }}] } }} />
                            </div>
                            </CardBody>
                        </Card>
                    
                    </div>
           </div>
        );
    }
}

export default Industryq1;