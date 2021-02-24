
import './App.css';
import { Container } from 'react-bootstrap';
import React  from 'react'


function App() {
  return (
    <div>
      <Container>
        <table style={{
          backgroundColor: "#F9F6F5",
          display: "block",
          color: "#000",
          paddingLeft: 16
        }}>
          <tbody>
            <tr>
              <td>
                <img alt="app icon" width="50" src="logo.svg" />
              </td>
              <td width="8" />
              <td>
                <h1>KoktailDb Search</h1>
              </td>
            </tr>
          </tbody>
        </table>
        <input style={{
          fontSize: 24,
          display: "block",
          width: "99%",
          paddingTop: 8,
          paddingBottom: 8,
          paddingLeft: 16,

        }} placeholder="Enter Search" />
        {this.state.rows}
      </Container>
    </div>

  );

}

export default App

