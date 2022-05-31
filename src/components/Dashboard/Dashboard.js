import "./Dashboard.css"
import {useEffect, useState} from 'react';
import axios from 'axios';
import ReactHTMLTableToExcel from "react-html-table-to-excel";
import DashboardPagination from '../DashboardPagination/DashboardPagination';

const Dashboard = () => {
    const [userData, setUserData] = useState([])
    const [currentPage, setCurrentPage] = useState(1)
    const [dataPerPage] = useState(15)

    useEffect(() => {
        try {
            const fetchData = async () => {
                const contacts = []
                const data = await axios.get("https://contact-form-2d4a6-default-rtdb.firebaseio.com/contact.json");
                Object.keys(data.data).forEach((key, i) => {
                    contacts.push(data.data[key][0])
                    // console.log(data.data[key][0])
                })
                setUserData(contacts)
            };
            fetchData()
        } catch (e) {
            console.log(e)
        }
    }, [userData])

    const lastDataIndex = currentPage * dataPerPage
    const firstDataIndex = lastDataIndex - dataPerPage
    const currentData = userData.slice(firstDataIndex, lastDataIndex)

    const paginate = (pageNumber) => setCurrentPage(pageNumber)

    let headings = currentData.length && Object.keys(userData[0])

    return (
      <div style={{marginTop: "10rem", overflowX: "auto"}}>
          <table className="iksweb" id="emp-table">
              <thead>
              <tr>
                  {
                      headings.length ? headings.map((heading, i) => <th key={i}>{heading}</th>) : null
                  }
              </tr>
              </thead>
              <tbody>
              {
                  currentData.map((item, i) =>
                    <tr key={i}>
                        {
                            headings.length ? headings.map((heading, i) => <td key={i}>{item[heading]}</td>) : null
                        }
                    </tr>
                  )
              }
              </tbody>
          </table>
          <div style={{display: "flex", flexDirection: "column", alignItems: "center"}}>
              <DashboardPagination dataPerPage={dataPerPage} totalData={userData.length} paginate={paginate}/>
              <ReactHTMLTableToExcel
                table="emp-table"
                filename="excel file"
                sheet="Sheet"
                buttonText="Экспортировать в Excel"
                className={"button-excel"}
              />
          </div>
      </div>
    );
};

export default Dashboard;
