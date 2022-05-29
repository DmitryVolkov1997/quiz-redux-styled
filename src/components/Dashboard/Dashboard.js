import styled from 'styled-components';
import "./Dashboard.css"
import {useEffect, useState} from 'react';
import axios from 'axios';

const Dashboard = () => {
    const [userData, setUserData] = useState([])

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
    }, [])

    let headings = userData.length && Object.keys(userData[0])

    return (
      <div>
          <table className="iksweb">
              <thead>
              <tr>
                  {
                      headings.length ? headings.map((heading, i) => <th key={i}>{heading}</th>) : null
                  }
              </tr>
              </thead>
              <tbody>
              {
                  userData.map(item =>
                    <tr>
                        {
                            headings.length ? headings.map((heading, i) => <td key={i}>{item[heading]}</td>) : null
                        }
                    </tr>
                  )
              }
              </tbody>
          </table>
      </div>
    );
};

export default Dashboard;
