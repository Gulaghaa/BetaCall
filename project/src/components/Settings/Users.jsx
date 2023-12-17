import React, { useEffect, useState, useRef } from "react";
import settBtn from "../../assets/settBtn.svg";
import { fetchJsonData } from "../../services/api";
import contactImage from "../../assets/contact.svg";
import actions from "../../assets/Actions.svg";
import trashbutton from '../../assets/trashbutton.svg'


export default function Users() {
  const [userType, setUserType] = useState("All");
  const [userInfo, setUserInfo] = useState([]);
  const [filteredData, setFilteredData] = useState([]);


  useEffect(() => {
    fetchJsonData("http://localhost:3003/contacts")
      .then((data) => {
        setUserInfo(data);
        setFilteredData(filterByCategory(userType, data));

      })
      .catch((error) => {
        console.error("Error fetching JSON data:", error);
      });
  }, []);


  const filterByCategory = (category, data) => {
    return data.filter(user => category === 'All' || user.category === category);
  };

  useEffect(() => {
    setFilteredData(filterByCategory(userType, userInfo));
  }, [userInfo, userType])

  console.log(filteredData)



  return (
    <div
      style={{
        height: "100%",
        padding: "32px 28px 0 33px",
        overflow: "scroll",
        height: "650px",
      }}
      className="UserSetting"
    >
      <div
        className="flex justify-between items-center"
        
      >
        <span>Teams & Users</span>
        <div className="flex">
          <button
            onClick={() => {
              setUserType("All");
            }}
            className={userType === "All" ? "actvUserBtn" : "nonActvUserBtn"}
          >
            All
          </button>
          <button
            onClick={() => {
              setUserType("Business");
            }}
            className={
              userType === "Business" ? "actvUserBtn" : "nonActvUserBtn"
            }
          >
            Business
          </button>
          <button
            onClick={() => {
              setUserType("Private");
            }}
            className={
              userType === "Private" ? "actvUserBtn" : "nonActvUserBtn"
            }
            style={{ marginRight: "12px" }}
          >
            Private
          </button>
          <img src={settBtn} alt="description" />
        </div>
      </div>
      <div className="userContainer flex flex-col gap-[10px] mt-[30px]">

        {filteredData != []
          ? filteredData.map((e) => {
            return (
              <div key={e.id} className="flex justify-between h-[68px] items-center">
                <div className="flex gap-[18px] items-center">
                  <div
                    className="relative w-[38px] h-[38px]"
                    style={{
                      backgroundImage: `url(${contactImage})`,
                      backgroundRepeat: "no-repeat",
                    }}
                  >
                    <div
                      className="absolute bottom-[-4px] right-[-4px] w-[12px] h-[12px] aspect-square rounded-full flex justify-center items-center"
                      style={{ backgroundColor: "#FFFF" }}
                    >
                      <div
                        className="w-[8px] h-[8px]  aspect-square rounded-full"
                        style={{ backgroundColor: "#28C345 " }}
                      ></div>
                    </div>
                  </div>
                  <span>{e.fullName}</span>
                </div>
                <div className="flex gap-[6px]">
                  <select name="manage" style={{marginRight: "34px"}}>
                    <option value="CanManage">Can Manage</option>
                    <option value="CanUseOnly">Can Use Only</option>
                    <option value="AssignRole">Assign Role</option>
                  </select>
                  <button className={e.category === 'Private' ? 'orangeBtn' : 'purpleBtn'}>{e.category}</button>
                  <img src={actions} alt="" />
                </div>
              </div>
            );
          })
          : null}
      </div>
      <div className='buttonPart'>
        <div>
          <button >Update Settings</button>
          <button>Cancel</button>
        </div>
        <button>
          <img src = {trashbutton} alt="description" />
          Deactivate Button

          
        </button>


      </div>
    </div>
  );
}







