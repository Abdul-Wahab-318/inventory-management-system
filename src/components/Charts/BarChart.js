// import React, { Component } from "react";
// import Chart from "react-apexcharts";

// class BarChart extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       chartData: [],
//       chartOptions: {},
//     };
//   }

//   componentDidMount() {
//     this.setState({
//       chartData: this.props.chartData,
//       chartOptions: this.props.chartOptions,
//     });
//   }

//   render() {
//     return (
//         <Chart
//           options={this.state.chartOptions}
//           series={this.state.chartData}
//           type="bar"
//           width="100%"
//           height="100%"
//         />
//     );
//   }
// }

// export default BarChart;

import React, { useEffect, useState } from "react";
import Chart from "react-apexcharts";
import axios from "axios";
import { API_URL } from "api";
import { barChartData } from "variables/charts";

const BarChart = ({ chartData, chartOptions }) => {

  const [chartOptionsData, setChartOptionsData] = useState(chartOptions);
  let [ data , setData ] = useState(chartData)

  let fetchGraphData = async () => {

    try{
      let { data } = await axios.get(API_URL + "/graphStats") 
      console.log(data.data)
      let monthWiseOrders = data.data.monthWiseOrders

      let newData = [ {
        name : "Sales" ,
        data : monthWiseOrders.slice(0,6)
      } ]
    
      setData( newData )

    }
    catch(err) {
      console.log(err)
    }
    
  }

  useEffect(() => {
    fetchGraphData()
  }, []);

  return (
    <Chart
      options={chartOptionsData}
      series={data}
      type="bar"
      width="100%"
      height="100%"
    />
  );
};

export default BarChart;