import './App.css';
import BoxContent from './components/BoxContent/BoxContent';
import NameHeader from './components/NameHeader/NameHeader';

function App() {
  return (
    <>
    <div className="App">
      <div className="container p-5 rounded main">
          
          <NameHeader name="Zephaniah G. Donato" imageURL="https://scontent.fmnl17-2.fna.fbcdn.net/v/t1.6435-9/74416389_2082183011881786_8403084101371822080_n.jpg?_nc_cat=109&ccb=1-5&_nc_sid=09cbfe&_nc_eui2=AeFj0YYMQ8ySy6T9xtlfAdez7E0m7vB2kjnsTSbu8HaSOaWE9MOFuoH7tLjqM1frbasjeHSqzCnrsUfB5reeHWp1&_nc_ohc=Aw_D1uNiryIAX8PMB0G&_nc_ht=scontent.fmnl17-2.fna&oh=00_AT_8c0YO20KC6K_Blp68unFNRYSTHZiXjVfEcR5mzr11Gg&oe=62362090"/>

        <hr/>

        <div className="row">

          <div className="col-md center"> 
              <h2 class="title">INFORMATION</h2>
          </div>

          <div className="col-md info">
          <BoxContent content={["","Phone: 0912 722 4389","Email: zephaniahdonato029@gmail.com","LinkedIn: linkedin.com/in/zephaniah-donato-307428225/","Address: 55 Moses St., Goodwill Homes II, Bagbag, Novaliches, Quezon City"]}/>
          </div>

        </div>

        <hr/>

        <div className="row">

          <div className="col-md center"> 
              <h2 class="title">EDUCATION</h2>
          </div>

          <div className="col-md">
          <BoxContent content={["University of Santo Tomas","BS in Information Technology, 2018-2022","1.9 GWA","Dean's Lister"]}/>
          <hr/>
          <BoxContent content={["STI College Novaliches","Senior High School - Information Technology : Mobile App & Web Development, 2017-2018","Maintained a 90 General Average ","Dean's Lister"]}/>
          </div>

        </div>
        <hr/>
        <div className="row ">

          <div className="col-md center">
            <h2>CERTIFICATION</h2>
          </div>

          <div className="col-md">
            
            <BoxContent content={["CompTIA IT Fundamentals+", "2019 - Present"]}/>
            <hr/>
            <BoxContent content={["PhilNits IT Passport", "2022 - Present"]}/>

          </div>
        </div>

        <hr/>

        <div className="row">

          <div className="col-md center"> 
              <h2 class="title">INTERNSHIP<br/>EXPERIENCE</h2>
          </div>

          <div className="col-md">
          <BoxContent content={["Poseidon IT Solutions","System Analyst","2022 - Present"]}/>
          </div>

        </div>

        <hr/>

        <div className="row">

          <div className="col-md center"> 
              <h2 class="title">AFFILIATIONS</h2>
          </div>

          <div className="col-md">
          <BoxContent content={["Society of Information Technology Enthusiasts - CICS","Organization Member","2018 - 2020"]}/>
          </div>

        </div>

      </div>

    </div>
    </>
  );
}

export default App;
