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


class Industryq2 extends Component{

    constructor(){
        super();
        this.state = {
          year:"2010",
          monthwisedata:[],
          sectordata:[],
        };
    }

      handleSubmit = (event) => {
        this.setState({monthwisedata: []});
        this.setState({sectordata: []});
        const request = async () => {
            const response = await fetch('http://localhost:8080/YearWiseMostProfit', {
                method: 'post',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify({
                    year:this.state.year
                })
            });
            const json = await response.json();
            for(var i=0; i < json.length; i++){
                if(json[i] != undefined){
                    this.setState({
                        monthwisedata: [...this.state.monthwisedata, json[i].profit],
                        sectordata: [...this.state.sectordata, json[i].sector]
                    })
                }
                else{
                    alert('Data not available for this year');
                }
            }
        }
        
        request();

        
      };

     handleYearChange = (e) => {
        this.setState({year: e.target.value});
     }

     makeOption = (x) => {
        return <option>{x}</option>;
    };

    render(){
          const yearlist = [2010,2011,2012,2013,2014,2015,2016];

          const chartData = {
            labels: ['Utilities','Telecom','Real Estate','Materials','Info Tech','Industrials','Health Care',
                    'Financials','Energy','Staples','Discretionary'], 
            datasets:[
              {
                label:'Profit',
                data: this.state.monthwisedata,
                backgroundColor:[
                  'rgba(255, 99, 132, 0.6)',
                  'rgba(54, 162, 235, 0.6)',
                  'rgba(255, 206, 86, 0.6)',
                  'rgba(75, 192, 192, 0.6)',
                  'rgba(153, 102, 255, 0.6)',
                  'rgba(255, 99, 132, 0.6)',
                  'rgba(54, 162, 235, 0.6)',
                  'rgba(255, 206, 86, 0.6)',
                  'rgba(75, 192, 192, 0.6)',
                  'rgba(153, 102, 255, 0.6)',
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
                    <Col md="8" >            
                    <Label>Enter Year</Label>          
                      <Input type="select" id="year" placeholder="Enter Year" onChange={this.handleYearChange}>
                        {yearlist.map(this.makeOption)}
                      </Input> 
                    </Col>
                    <Col md="4">
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
                                <Bar data={chartData} height={120} options={{ maintainAspectRatio: true,   
                                                                            scales: { yAxes: [{ ticks: { beginAtZero: true }}] } }} />
                            </div>
                            </CardBody>
                        </Card>
                    
                    </div>
           </div>
        );
    }
}

export default Industryq2;