import React from 'react'
import Cta from '../assets/Cta.svg'


export default function Home() {
  return (
    <div className="Dashboard">
          <div className="rightDashboard">
            <img src={Cta} alt="description" style={{ width: '100%' }} />
            <div className="rightBelowDashboard">
              <div className="rightBelowDashboardleft">
                <div>
                    <div>
                        <span>Upcoming events</span>
                        <div>
                            
                        </div>
                    </div>
                </div>
                
              </div>
              <div className="rightBelowDashboardright"></div>
            </div>



          </div>
          <div className='leftDashboard'>

          </div>
        </div>
  )
}
