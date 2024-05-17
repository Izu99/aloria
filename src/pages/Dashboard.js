import React from 'react'
import img from '../images/dashbord.png'
import Sidebar from '../components/Sidebar'
import '../style/Dashboard.css'

const Dashboard = () => {
  return (
    <div>
      <div className="container-fluid dashboard p-0 ">
        <div className="row">
          <div className="col-2">
            <Sidebar />
          </div>
          <div className="col-10">
            <img src={img} alt="" />
          </div>
        </div>

      </div>


    </div>
  )
}

export default Dashboard