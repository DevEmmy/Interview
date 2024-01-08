import React from 'react'
import Table from './Table';

import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
  } from 'chart.js';
  import { Line } from 'react-chartjs-2';
  // import faker from 'faker';
  
  ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
  );
  
  export const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top' as const,
      },
      title: {
        display: true,
        text: 'Chart.js Line Chart',
      },
    },
  };
  
  const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
  
   const data = {
    labels,
    datasets: [
      {
        label: 'Dataset 1',
        data: labels.map(() => -100),
        borderColor: 'rgb(255, 99, 132)',
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
      },
      {
        label: 'Dataset 2',
        data: labels.map(() => 10200),
        borderColor: 'rgb(53, 162, 235)',
        backgroundColor: 'rgba(53, 162, 235, 0.5)',
      },
    ],
  };
  

const Overview = () => {
    const users: any = [
        {
            name: "Emmanuel Olaosebikan",
            email: "eolaosebikan60@gmail.com"
        },
        {
            name: "Emmanuel Olaosebikan",
            email: "eolaosebikan60@gmail.com"
        },
        {
          name: "Emmanuel Olaosebikan",
          email: "eolaosebikan60@gmail.com"
        }
    ]

    
  return (
    <div className='w-4/5 px-10'>
        <div className="profile flex items-center justify-end p-5">
            <img src="https://img.freepik.com/premium-vector/user-profile-icon-flat-style-member-avatar-vector-illustration-isolated-background-human-permission-sign-business-concept_157943-15752.jpg" className='w-[50px] h-[50px]' alt="" />
            <h2>Hi, Admin.</h2>
        </div>

        <div className=''>
          <Line options={options} data={data} />
        </div>

        <div className='my-10'>
          <h2 className='py-5'>Latest Users</h2>
          <Table users={users}/>
        </div>
      
    </div>
  )
}

export default Overview