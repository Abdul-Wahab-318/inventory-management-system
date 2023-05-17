// import React from "react";
// import ReactApexChart from "react-apexcharts";
// import { lineChartData, lineChartOptions } from "variables/charts";

// class LineChart extends React.Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       chartData: [],
//       chartOptions: {},
//     };
//   }

//   componentDidMount() {
//     this.setState({
//       chartData: lineChartData,
//       chartOptions: lineChartOptions,
//     });
//   }

//   render() {
//     return (
//       <ReactApexChart
//         options={this.state.chartOptions}
//         series={this.state.chartData}
//         type="area"
//         width="100%"
//         height="100%"
//       />
//     );
//   }
// }

// export default LineChart;
import React, { useState, useEffect } from "react";
import ReactApexChart from "react-apexcharts";
import { lineChartData, lineChartOptions } from "variables/charts";
import axios from "axios";
import { API_URL } from "api";


const LineChart = () => {
  const [chartData, setChartData] = useState([]);
  const [chartOptions, setChartOptions] = useState({});

  let [ data , setData ] = useState(lineChartData)

  let fetchGraphData = async () => {

    try{
      let { data } = await axios.get(API_URL + "/graphStats" , {withCredentials:true}) 
      console.log(data.data)
      let monthWiseSales = data.data.monthWiseSales

      let newData = [ {
        name : "Sales" ,
        data : monthWiseSales
      } ]
    
      setData( newData )

    }
    catch(err) {
      console.log(err)
    }
    
  }

  useEffect(() => {
    setChartData(lineChartData);
    setChartOptions(lineChartOptions);
    fetchGraphData()
  }, []);

  return (
    <ReactApexChart
      options={chartOptions}
      series={data}
      type="area"
      width="100%"
      height="100%"
    />
  );
};

export default LineChart;
