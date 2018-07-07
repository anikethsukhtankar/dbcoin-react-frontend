export default {
  items: [
    {
      name: 'Dashboard',
      url: '/dashboard',
      icon: 'icon-speedometer',
      badge: {
        variant: 'info',
        text: 'Welcome',
      },
    },
    {
      title: true,
      name: 'Choose an option',
      wrapper: {            // optional wrapper object
        element: '',        // required valid HTML5 element tag
        attributes: {}        // optional valid JS object with JS API naming ex: { className: "my-class", style: { fontFamily: "Verdana" }, id: "my-id"}
      },
      class: ''             // optional class names space delimited list for title item ex: "text-center"
    },
    {
      name: 'Stock',
      url: '/stock',
      icon: 'icon-graph',
      children: [
        {
          name: 'Price Trend of Stocks',
          url: '/stock/stockq1',
          icon: 'icon-eye',
        },
        {
          name: 'Gain/Loss Analysis',
          url: '/stock/stockq2',
          icon: 'icon-loop',
        },
        {
          name: 'Regression Analysis',
          url: '/stock/stockq3',
          icon: 'icon-globe',
        },
      ],
    },
    {
      name: 'Return on Investment',
      url: '/roi',
      icon: 'icon-pie-chart',
      children: [
        {
          name: 'Top 5 Highest Return',
          url: '/roi/roiq1',
          icon: 'icon-diamond',
        },
        {
          name: 'Undervalued Stocks',
          url: '/roi/roiq2',
          icon: 'icon-cloud-upload',
        },
        {
          name: 'Overvalued Stocks',
          url: '/roi/roiq3',
          icon: 'icon-cloud-upload',
        },
        {
          name: 'Best Performing Stock',
          url: '/roi/roiq4',
          icon: 'icon-like',
        },
      ],
    },
    {
      name: 'Industry',
      url: '/industry',
      icon: 'icon-chart',
      children: [
        {
          name: 'Average Monthly Growth Rate',
          url: '/industry/industryq1',
          icon: 'icon-hourglass',
        },
        {
          name: 'Most Profitable Industry',
          url: '/industry/industryq2',
          icon: 'icon-fire',
        },
        {
          name: 'Sector/Subsector Distribution',
          url: '/industry/industryq3',
          icon: 'icon-grid',
        },
      ],
    },
    {
      name: 'Company',
      url: '/company',
      icon: 'icon-briefcase',
      children: [
        {
          name: 'Fundamentals',
          url: '/company/companymain',
          icon: 'icon-rocket',
        },
      ],
    },
  ],
};
