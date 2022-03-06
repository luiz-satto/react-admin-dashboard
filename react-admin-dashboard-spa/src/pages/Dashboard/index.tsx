import React from 'react'
import Chart from 'react-apexcharts'

import StatusCard from '../../components/StatusCard'
import statusCard from '../../assets/JsonData/status-card-data.json'
import { ApexOptions } from 'apexcharts'

const chartSeries = [
  {
    name: 'Store Customers',
    data: [40, 30, 70, 80, 40, 16, 40, 20, 51]
  },
  {
    name: 'Online Customers',
    data: [40, 70, 20, 90, 36, 80, 30, 91, 60]
  }
]

const chartOptions: ApexOptions = {
  colors: ['#6ab04c', '#2980b9'],
  chart: {
    background: 'transparent'
  },
  dataLabels: {
    enabled: false
  },
  stroke: {
    curve: 'smooth'
  },
  xaxis: {
    categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep']
  },
  legend: {
    position: 'top'
  },
  grid: {
    show: false
  }
}

const Dashboard: React.FC = () => {
  return (
    <div>
      <h2 className='page-header'>Dashboard</h2>
      <div className='row'>
        <div className='col-6'>
          <div className='row'>
            {
              statusCard.map((item, index) => (
                <div className='col-6'>
                  <StatusCard
                    icon={item.icon}
                    count={item.count}
                    title={item.title}
                  />
                </div>
              ))
            }
          </div>
        </div>
        <div className='col-6'>
          <div className="card full-height">
            <Chart
              options={chartOptions}
              series={chartSeries}
              type='line'
              height='100%'
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Dashboard
