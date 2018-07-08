import React, { Component } from 'react';
import { Bar, Doughnut, Line, Pie, Polar, Radar, Bubble } from 'react-chartjs-2';
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


class Roiq3 extends Component{

    constructor(){
        super();
        this.state = {
          year:"2012",
          vratiodata:[],
          companydata:[],
        };
    }

      handleSubmit = (event) => {
        this.setState({vratiodata: []});
        this.setState({companydata: []});
        const request = async () => {
            const response = await fetch('http://localhost:8080/OVStock', {
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
                        vratiodata: [...this.state.vratiodata, json[i].vRatio],
                        companydata: [...this.state.companydata, json[i].name]
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

    populateDataSet = () => {
        const { companydata, vratiodata } = this.state;
        const dataset = [];
        const colordata = [
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
          ];
        const ycoor = [3,2,5,1,3,5,4,2,6,5,2,4,1];
        for(var i=0; i < companydata.length; i++){
            dataset.push(
                {
                    label: [companydata[i]],
                    backgroundColor: colordata[i],
                    borderColor: colordata[i],
                    data: [{
                      x: i+1 ,
                      y: ycoor[i],
                      r: vratiodata[i] * 0.5
                    }] 
                }
            );
        }
        dataset.push(
            {
                label: [""],
                backgroundColor: 'rgba(0, 0, 0, 0)',
                borderColor: 'rgba(0, 0, 0, 0)',
                data: [{
                  x: companydata.length+1 ,
                  y: 7,
                  r: 0
                }] 
            }
        );
        return dataset;
    };

    render(){
          const yearlist = [2012,2013,2014,2015,2016];

          const chartData = {
            labels: "Over Valued Stock",
            datasets: this.populateDataSet(),
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
                                <Bubble data={chartData} height={120} options={{ maintainAspectRatio: true,   
                                                                            scales: { xAxes: [{ ticks: { display: false , beginAtZero: true }}],
                                                                             yAxes: [{ ticks: { display: false , beginAtZero: true }}] },
                                                                             tooltips: {
                                                                                mode: 'nearest',
                                                                                callbacks: {
                                                                                    // Use the footer callback to display the sum of the items showing in the tooltip
                                                                                    label: function(tooltipItem, data) {  
                                                                                        var label = chartData.datasets[tooltipItem.datasetIndex].label || '';
                                                                                            if (label) {
                                                                                                label += ': ';
                                                                                            }
                                                                                            label += chartData.datasets[tooltipItem.datasetIndex].data[0].r;
                                                                                            return label;
                                                                                    },
                                                                                },
                                                                            },
                                                                             }} />
                            </div>
                            </CardBody>
                        </Card>
                    </div>
           </div>
        );
    }
}

export default Roiq3;