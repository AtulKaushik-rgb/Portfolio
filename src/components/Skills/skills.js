import React from "react";
import { HorizontalBar } from "react-chartjs-2";
import styles from './skills.module.css'

const skills = () => {
  
    var options = {
        // responsive:true,
     
        scales: {
            animations:"easeInQuint",
            xAxes: [{
                gridLines: {
                    color: "rgba(0, 0, 0, 0)",
                },
                display:false
            }],
            yAxes: [{
                gridLines: {
                    color: "rgba(0, 0, 0, 0)",
                }   
            }],
            display:false
        }
    }
    const data = {
    labels: ["React", "C#", "Node", "MongoDB","MySql"],

    datasets: [
      {
        backgroundColor: "#66FCF1",
        
        borderWidth: 1,
        width:"100%",
        data: [75, 70, 50, 50, 40,60],
        
      },
    ],
  };

  return (
    <>
      {/* <HorizontalBar className={styles.bar} data={data} options={options}/> */}
    </>
  );
};

export default skills;

// const data = {
//   labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
//   datasets: [
//     {
//       label: 'My First dataset',
//       backgroundColor: 'rgba(255,99,132,0.2)',
//       borderColor: 'rgba(255,99,132,1)',
//       borderWidth: 1,
//       hoverBackgroundColor: 'rgba(255,99,132,0.4)',
//       hoverBorderColor: 'rgba(255,99,132,1)',
//       data: [65, 59, 80, 81, 56, 55, 40]
//     }
//   ]
// };

// export default React.createClass({
//   displayName: 'BarExample',

//   render() {
//     return (
//       <div>
//         <h2>Horizontal Bar Example</h2>
//         <HorizontalBar data={data} />
//       </div>
//     );
//   }
// });
