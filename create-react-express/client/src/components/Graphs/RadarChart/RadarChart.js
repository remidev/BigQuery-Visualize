import React from "react";
import "semantic-ui-css/semantic.min.css";
import{Radar, RadarChart, PolarGrid, Legend,
    PolarAngleAxis, PolarRadiusAxis} from "recharts";

const data = [
    // { subject: 'Strength', A: 120, B: 110, fullMark: 150 },
    // { subject: 'Dexerity', A: 98, B: 130, fullMark: 150 },
    // { subject: 'Intelligence', A: 86, B: 130, fullMark: 150 },
    // { subject: 'Luck', A: 99, B: 100, fullMark: 150 },
    // { subject: 'Wisdom', A: 85, B: 90, fullMark: 150 },
    // { subject: 'Charisma', A: 65, B: 85, fullMark: 150 },
    // { subject: "Fire Power", A: 30, B: 150, fullMark: 150 },
    // { subject: "Water Power", A: 130, B: 30, fullMark: 150 },
    // { subject: "Earth Power", A: 100, B: 90, fullMark: 150 },
    // { subject: "Air Power", A: 10, B: 40, fullMark: 150 },

];

class RadarChartN extends React.Component {
  constructor(props) {
    super(props);
    console.log(props);
    this.state = {
      data: data
    };
    console.log(data);
  }
  render () {
      console.log(this.props);
    return (
      <RadarChart cx={300} cy={250} outerRadius={150} width={600} height={500} data={data}>
        <PolarGrid />
        <PolarAngleAxis dataKey="subject" />
        <PolarRadiusAxis angle={30} domain={[0, 150]}/>
        <Radar name="Kevin" dataKey="A" stroke="#8884d8" fill="#8884d8" fillOpacity={0.6}/>
        <Radar name="Theo" dataKey="B" stroke="#82ca9d" fill="#82ca9d" fillOpacity={0.6}/>
        <Legend />
        
      </RadarChart>
  );
}
}

export default RadarChartN;
