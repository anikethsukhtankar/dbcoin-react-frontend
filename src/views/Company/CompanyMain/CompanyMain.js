import React, { Component } from 'react';
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
    Form,
    Label,
    Input,
  } from 'reactstrap';

class CompanyMain extends Component{

    constructor(){
        super();
        this.state = {
          company:"Broadcom",
          ts:'',
          lastprice:'',
          change:'',
          percchange:'',
          vol:'',
          yh:'',
          yhd:'',
          yl:'',
          yld:'',
          gp:'',
          ni:'',
          ta:'',
          tl:'',
          te:'',
          tr:'',
          eps:'',
          gw:'',
        };

    }

    handleSubmit = (event) => {
        this.setState({
            ts:'',
            lastprice:'',
            change:'',
            percchange:'',
            vol:'',
            yh:'',
            yhd:'',
            yl:'',
            yld:'',
            gp:'',
            ni:'',
            ta:'',
            tl:'',
            te:'',
            tr:'',
            eps:'',
            gw:'',
          });
        const request = async () => {
            const response = await fetch('http://localhost:8080/CompanyProfileData', {
                method: 'post',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify({
                    company: this.state.company
                })
            });
            const json = await response.json();
            
            if(json != undefined){
                this.setState({
                    ts:json.ticketSymbol,
                    lastprice:json.lastPrice,
                    change:json.priceChange,
                    percchange:json.change,
                    vol:json.volTraded,
                    yh:json.weekHigh,
                    yhd:json.highDate,
                    yl:json.weekLow,
                    yld:json.lowDate,
                    gp:json.gProfit,
                    ni:json.netIncome,
                    ta:json.totAsset,
                    tl:json.totLiabilities,
                    te:json.cashRatio,
                    tr:json.totRevenue,
                    eps:json.eps,
                    gw:json.goodwill,
                  })
            }
            else{
                alert('Data not available for this company');
            }
                
        }
        
        request();

        
      };

    handleCompanyChange = (e) => {
        this.setState({company: e.target.value});
    }

    makeOption = (x) => {
        return <option>{x}</option>;
    };

    render(){

        const companylist = [
            "Broadcom",
            "Brown-Forman Corporation",
            "C. H. Robinson Worldwide",
            "CA, Inc.",
            "Cabot Oil & Gas",
            "Campbell Soup",
            "Capital One Financial",
            "Cardinal Health Inc.",
            "Carmax Inc",
            "Carnival Corp.",
            "Caterpillar Inc.",
            "CBRE Group",
            "CBS Corp.",
            "Celgene Corp.",
            "Centene Corporation",
            "CenterPoint Energy",
            "CenturyLink Inc",
            "Cerner",
            "CF Industries Holdings Inc",
            "Charles Schwab Corporation",
            "Charter Communications",
            "Chesapeake Energy",
            "Chevron Corp.",
            "Chipotle Mexican Grill",
            "Chubb Limited",
            "Church & Dwight",
            "CIGNA Corp.",
            "Cimarex Energy",
            "Cincinnati Financial",
            "Cintas Corporation",
            "Cisco Systems",
            "Citigroup Inc.",
            "Citizens Financial Group",
            "Citrix Systems",
            "CME Group Inc.",
            "CMS Energy",
            "Coach Inc.",
            "Coca Cola Company",
            "Cognizant Technology Solutions",
            "Colgate-Palmolive",
            "Comcast A Corp",
            "Comerica Inc.",
            "ConAgra Foods Inc.",
            "Concho Resources",
            "ConocoPhillips",
            "Consolidated Edison",
            "Constellation Brands",
            "Corning Inc.",
            "Costco Co.",
            "Coty, Inc",
            "Crown Castle International Corp.",
            "CSRA Inc.",
            "CSX Corp.",
            "Cummins Inc.",
            "CVS Health",
            "D. R. Horton",
            "Danaher Corp.",
            "Darden Restaurants",
            "DaVita Inc.",
            "Deere & Co.",
            "Delphi Automotive",
            "Delta Air Lines",
            "Dentsply Sirona",
            "Devon Energy Corp.",
            "Digital Realty Trust",
            "Discover Financial Services",
            "Discovery Communications-A",
            "Discovery Communications-C",
            "Dollar General",
            "Dollar Tree",
            "Dominion Resources",
            "Dover Corp.",
            "Dow Chemical",
            "Dr Pepper Snapple Group",
            "DTE Energy Co.",
            "Du Pont (E.I.)",
            "Duke Energy",
            "Dun & Bradstreet",
            "E*Trade",
            "Eastman Chemical",
            "Eaton Corporation",
            "eBay Inc.",
            "Ecolab Inc.",
            "Edison Int'l",
            "Edwards Lifesciences",
            "Electronic Arts",
            "Emerson Electric Company",
            "Endo International",
            "Entergy Corp.",
            "Envision Healthcare Corp",
            "EOG Resources",
            "EQT Corporation",
            "Equifax Inc.",
            "Equinix",
            "Equity Residential",
            "Essex Property Trust, Inc.",
            "Estee Lauder Cos.",
            "Eversource Energy",
            "Exelon Corp.",
            "Expedia Inc.",
            "Expeditors Int'l",
            "Express Scripts",
            "Extra Space Storage",
            "Exxon Mobil Corp.",
            "F5 Networks",
            "Facebook",
            "Fastenal Co",
            "Federal Realty Investment Trust",
            "FedEx Corporation",
            "Fidelity National Information Services",
            "Fifth Third Bancorp",
            "First Solar Inc",
            "FirstEnergy Corp",
            "Fiserv Inc",
            "FLIR Systems",
            "Flowserve Corporation",
            "Fluor Corp.",
            "FMC Corporation",
            "FMC Technologies Inc.",
            "Foot Locker Inc",
            "Ford Motor",
            "Fortive Corp",
            "Fortune Brands Home & Security",
            "Franklin Resources",
            "Freeport-McMoran Cp & Gld",
            "Frontier Communications",
            "Gap (The)",
            "Garmin Ltd.",
            "General Dynamics",
            "General Electric",
            "General Growth Properties Inc.",
            "General Mills",
            "General Motors",
            "Genuine Parts",
            "Gilead Sciences",
            "Global Payments Inc",
            "Goldman Sachs Group",
            "Goodyear Tire & Rubber",
            "Grainger (W.W.) Inc.",
            "Halliburton Co.",
            "Hanesbrands Inc",
            "Harley-Davidson",
            "Harman Int'l Industries",
            "Harris Corporation",
            "Hartford Financial Svc.Gp.",
            "Hasbro Inc.",
            "HCA Holdings",
            "HCP Inc.",
            "Helmerich & Payne",
            "Henry Schein",
            "Hess Corporation",
            "Hewlett Packard Enterprise",
            "Hologic",
            "Home Depot",
            "Honeywell Int'l Inc.",
            "Hormel Foods Corp.",
            "Host Hotels & Resorts",
            "HP Inc.",
            "Humana Inc.",
            "Huntington Bancshares",
            "IDEXX Laboratories",
            "Illinois Tool Works",
            "Illumina Inc",
            "Ingersoll-Rand PLC",
            "Intel Corp.",
            "Intercontinental Exchange",
            "International Business Machines",
            "International Paper",
            "Interpublic Group",
            "Intl Flavors & Fragrances",
            "Intuit Inc.",
            "Intuitive Surgical Inc.",
            "Invesco Ltd.",
            "Iron Mountain Incorporated",
            "News Corp. Class B",
            "NextEra Energy",
            "Nielsen Holdings",
            "Nike",
            "NiSource Inc.",
            "Noble Energy Inc",
            "Nordstrom",
            "Norfolk Southern Corp.",
            "Northern Trust Corp.",
            "Northrop Grumman Corp.",
            "NRG Energy",
            "Nucor Corp.",
            "Nvidia Corporation",
            "O'Reilly Automotive",
            "Occidental Petroleum",
            "Omnicom Group",
            "ONEOK",
            "Oracle Corp.",
            "PACCAR Inc.",
            "Parker-Hannifin",
            "Patterson Companies",
            "Paychex Inc.",
            "PayPal",
            "Pentair Ltd.",
            "People's United Financial",
            "PepsiCo Inc.",
            "PerkinElmer",
            "Perrigo",
            "Pfizer Inc.",
            "PG&E Corp.",
            "Philip Morris International",
            "Phillips 66",
            "Pinnacle West Capital",
            "Pioneer Natural Resources",
            "Pitney-Bowes",
            "PNC Financial Services",
            "Polo Ralph Lauren Corp.",
            "PPG Industries",
            "PPL Corp.",
            "Praxair Inc.",
            "Priceline.com Inc",
            "Principal Financial Group",
            "Procter & Gamble",
            "Progressive Corp.",
            "Prologis",
            "Prudential Financial",
            "Public Serv. Enterprise Inc.",
            "Public Storage",
            "Pulte Homes Inc.",
            "PVH Corp.",
            "Qorvo",
            "QUALCOMM Inc.",
            "Quanta Services Inc.",
            "Quest Diagnostics",
            "Range Resources Corp.",
            "Raytheon Co.",
            "J. B. Hunt Transport Services",
            "Jacobs Engineering Group",
            "JM Smucker",
            "Johnson & Johnson",
            "Johnson Controls International",
            "JPMorgan Chase & Co.",
            "Juniper Networks",
            "Kansas City Southern",
            "Kellogg Co.",
            "KeyCorp",
            "Kimberly-Clark",
            "Kimco Realty",
            "Kinder Morgan",
            "KLA-Tencor Corp.",
            "Kohl's Corp.",
            "Kraft Heinz Co",
            "Kroger Co.",
            "L Brands Inc.",
            "L-3 Communications Holdings",
            "Laboratory Corp. of America Holding",
            "Lam Research",
            "Leggett & Platt",
            "Lennar Corp.",
            "Leucadia National Corp.",
            "Level 3 Communications",
            "Lilly (Eli) & Co.",
            "Lincoln National",
            "Linear Technology Corp.",
            "LKQ Corporation",
            "Lockheed Martin Corp.",
            "Loews Corp.",
            "Lowe's Cos.",
            "LyondellBasell",
            "M&T Bank Corp.",
            "Macerich",
            "Macy's Inc.",
            "Mallinckrodt Plc",
            "Marathon Oil Corp.",
            "Marathon Petroleum",
            "Marriott Int'l.",
            "Marsh & McLennan",
            "Martin Marietta Materials",
            "Masco Corp.",
            "Mastercard Inc.",
            "Mattel Inc.",
            "McCormick & Co.",
            "McDonald's Corp.",
            "McKesson Corp.",
            "Mead Johnson",
            "Medtronic plc",
            "Merck & Co.",
            "MetLife Inc.",
            "Mettler Toledo",
            "Michael Kors Holdings",
            "Microchip Technology",
            "Micron Technology",
            "Microsoft Corp.",
            "Mid-America Apartments",
            "Mohawk Industries",
            "Molson Coors Brewing Company",
            "Mondelez International",
            "Monsanto Co.",
            "Monster Beverage",
            "Moody's Corp",
            "Morgan Stanley",
            "Motorola Solutions Inc.",
            "Murphy Oil",
            "Mylan N.V.",
            "NASDAQ OMX Group",
            "National Oilwell Varco Inc.",
            "Navient",
            "NetApp",
            "Netflix Inc.",
            "Newell Brands",
            "Newfield Exploration Co",
            "Newmont Mining Corp. (Hldg. Co.)",
            "News Corp. Class A",
            "3M Company",
            "Abbott Laboratories",
            "AbbVie",
            "Accenture plc",
            "Activision Blizzard",
            "Acuity Brands Inc",
            "Adobe Systems Inc",
            "Advance Auto Parts",
            "AES Corp",
            "Aetna Inc",
            "Affiliated Managers Group Inc",
            "AFLAC Inc",
            "Agilent Technologies Inc",
            "Air Products & Chemicals Inc",
            "Akamai Technologies Inc",
            "Alaska Air Group Inc",
            "Albemarle Corp",
            "Alexion Pharmaceuticals",
            "Allegion",
            "Allergan, Plc",
            "Alliance Data Systems",
            "Alliant Energy Corp",
            "Allstate Corp",
            "Alphabet Inc Class A",
            "Alphabet Inc Class C",
            "Altria Group Inc",
            "Amazon.com Inc",
            "Ameren Corp",
            "American Airlines Group",
            "American Electric Power",
            "American Express Co",
            "American International Group, Inc.",
            "American Tower Corp A",
            "American Water Works Company Inc",
            "Ameriprise Financial",
            "AmerisourceBergen Corp",
            "AMETEK Inc",
            "Amgen Inc",
            "Amphenol Corp",
            "Anadarko Petroleum Corp",
            "Analog Devices, Inc.",
            "Anthem Inc.",
            "Aon plc",
            "Apache Corporation",
            "Apartment Investment & Mgmt",
            "Apple Inc.",
            "Applied Materials Inc",
            "Archer-Daniels-Midland Co",
            "Arconic Inc",
            "Arthur J. Gallagher & Co.",
            "Assurant Inc",
            "AT&T Inc",
            "Autodesk Inc",
            "Automatic Data Processing",
            "AutoNation Inc",
            "AutoZone Inc",
            "AvalonBay Communities, Inc.",
            "Avery Dennison Corp",
            "Baker Hughes Inc",
            "Ball Corp",
            "Bank of America Corp",
            "Bard (C.R.) Inc.",
            "Baxter International Inc.",
            "BB&T Corporation",
            "Becton Dickinson",
            "Bed Bath & Beyond",
            "Berkshire Hathaway",
            "Best Buy Co. Inc.",
            "BIOGEN IDEC Inc.",
            "BlackRock",
            "Block H&R",
            "Boeing Company",
            "BorgWarner",
            "Boston Properties",
            "Boston Scientific",
            "Bristol-Myers Squibb",
            "Realty Income Corporation",
            "Red Hat Inc.",
            "Regeneron",
            "Regions Financial Corp.",
            "Republic Services Inc",
            "Reynolds American Inc.",
            "Robert Half International",
            "Rockwell Automation Inc.",
            "Rockwell Collins",
            "Roper Industries",
            "Ross Stores",
            "Royal Caribbean Cruises Ltd",
            "Ryder System",
            "S&P Global, Inc.",
            "Salesforce.com",
            "SCANA Corp",
            "Schlumberger Ltd.",
            "Scripps Networks Interactive Inc.",
            "Seagate Technology",
            "Sealed Air",
            "Sempra Energy",
            "Sherwin-Williams",
            "Signet Jewelers",
            "Simon Property Group Inc",
            "Skyworks Solutions",
            "SL Green Realty",
            "Snap-On Inc.",
            "Southern Co.",
            "Southwest Airlines",
            "Southwestern Energy",
            "Spectra Energy Corp.",
            "Stanley Black & Decker",
            "Staples Inc.",
            "Starbucks Corp.",
            "State Street Corp.",
            "Stericycle Inc",
            "Stryker Corp.",
            "SunTrust Banks",
            "Symantec Corp.",
            "Synchrony Financial",
            "Sysco Corp.",
            "T. Rowe Price Group",
            "Target Corp.",
            "TE Connectivity Ltd.",
            "Tegna, Inc.",
            "Teradata Corp.",
            "Tesoro Petroleum Co.",
            "Texas Instruments",
            "Textron Inc.",
            "The Bank of New York Mellon Corp.",
            "The Clorox Company",
            "The Cooper Companies",
            "The Hershey Company",
            "The Mosaic Company",
            "The Travelers Companies Inc.",
            "The Walt Disney Company",
            "Thermo Fisher Scientific",
            "Tiffany & Co.",
            "Time Warner Inc.",
            "TJX Companies Inc.",
            "Torchmark Corp.",
            "Total System Services",
            "Tractor Supply Company",
            "TransDigm Group",
            "Transocean",
            "TripAdvisor",
            "Twenty-First Century Fox Class A",
            "Twenty-First Century Fox Class B",
            "Tyson Foods",
            "U.S. Bancorp",
            "UDR Inc",
            "Ulta Salon Cosmetics & Fragrance Inc",
            "Under Armour",
            "Under Armour",
            "Union Pacific",
            "United Continental Holdings",
            "United Health Group Inc.",
            "United Parcel Service",
            "United Rentals, Inc.",
            "United Technologies",
            "Universal Health Services, Inc.",
            "Unum Group",
            "Urban Outfitters",
            "V.F. Corp.",
            "Valero Energy",
            "Varian Medical Systems",
            "Ventas Inc",
            "Verisign Inc.",
            "Verisk Analytics",
            "Verizon Communications",
            "Vertex Pharmaceuticals Inc",
            "Viacom Inc.",
            "Visa Inc.",
            "Vornado Realty Trust",
            "Vulcan Materials",
            "Wal-Mart Stores",
            "Walgreens Boots Alliance",
            "Waste Management Inc.",
            "Waters Corporation",
            "Wec Energy Group Inc",
            "Wells Fargo",
            "Welltower Inc.",
            "Western Digital",
            "Western Union Co",
            "WestRock Company",
            "Weyerhaeuser Corp.",
            "Whirlpool Corp.",
            "Whole Foods Market",
            "Williams Cos.",
            "Willis Towers Watson",
            "Wyndham Worldwide",
            "Wynn Resorts Ltd",
            "Xcel Energy Inc",
            "Xerox Corp.",
            "Xilinx Inc",
            "XL Capital",
            "Xylem Inc.",
            "Yahoo Inc.",
            "Yum! Brands Inc",
            "Zimmer Biomet Holdings",
            "Zions Bancorp",
            "Zoetis"
            ];

        return (
        <div>
            <Card>
                <CardBody>
                <Form onSubmit={this.handleSubmit}>
                <Row>
                    <Col md="9">
                      <Label>Enter Company Name</Label>
                      <Input type="select" id="company" placeholder="Enter Company Name" onChange={this.handleCompanyChange}>
                        {companylist.map(this.makeOption)}
                      </Input>
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
                <div class = "company-name-row">
                <span class="company-details-name">{this.state.company}</span>
                <span class="company-details-tckr">( {this.state.ts} )</span>
                <br />
                <span class="company-details-price">{this.state.lastprice}</span>
                </div>
                <Table striped>
              
                  <tbody>
                  <tr>
                    <td>
                      <span class="company-details-attr">Last Price</span><br/>
                      <span class="company-details-value">{this.state.lastprice}</span>
                    </td>
                    <td>
                      <span class="company-details-attr">Change</span><br/>
                      <span class="company-details-value">{this.state.change}</span>
                    </td>
                    <td>
                      <span class="company-details-attr">% Change</span><br/>
                      <span class="company-details-value">{this.state.percchange}</span>
                    </td>
                    <td>
                      <span class="company-details-attr">Volume</span><br/>
                      <span class="company-details-value">{this.state.vol}</span>
                    </td>
                  </tr>
                  <tr>
                    <td>
                    <span class="company-details-attr">52 Wk hi</span><br/>
                    <span class="company-details-value">{this.state.yh}</span>
                    </td>
                    <td>
                      <span class="company-details-attr">52 Wk hi date</span><br/>
                      <span class="company-details-value">{this.state.yhd}</span>
                    </td>
                    <td>
                      <span class="company-details-attr">52 Wk Lo</span><br/>
                      <span class="company-details-value">{this.state.yl}</span>
                    </td>
                    <td>
                      <span class="company-details-attr">52 Wk lw date</span><br/>
                      <span class="company-details-value">{this.state.yld}</span>
                    </td>
                    </tr>
                  <tr>
                  <td>
                    <span class="company-details-attr">Gross Profit</span><br/>
                    <span class="company-details-value">{this.state.gp}</span>
                  </td>
                  <td>
                    <span class="company-details-attr">Net Income</span><br/>
                    <span class="company-details-value">{this.state.ni}</span>
                  </td>
                  <td>
                    <span class="company-details-attr">Total Assets</span><br/>
                    <span class="company-details-value">{this.state.ta}</span>
                  </td>
                  <td>
                    <span class="company-details-attr">Total Liability</span><br/>
                    <span class="company-details-value">{this.state.tl}</span>
                  </td>
                  </tr>
                  <tr>      
                    <td>
                      <span class="company-details-attr">Total Equity</span><br/>
                      <span class="company-details-value">{this.state.te}</span>
                    </td>
                    <td>
                      <span class="company-details-attr">Total Revenue</span><br/>
                      <span class="company-details-value">{this.state.tr}</span>
                    </td>
                  <td>
                    <span class="company-details-attr">Earning/Share</span><br/>
                    <span class="company-details-value">{this.state.eps}</span>
                  </td>
                  <td>
                    <span class="company-details-attr">Goodwill</span><br/>
                    <span class="company-details-value">{this.state.gw}</span>
                  </td>
                  </tr>
                  </tbody>
                </Table>
            </Card>
      </div>
      </div>
        );
    }
}

export default CompanyMain;