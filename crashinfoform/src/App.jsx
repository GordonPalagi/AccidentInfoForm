import "./App.css";
import WitnessInfo from "./components/WitnessInfo";
import PoliceInfo from "./components/PoliceInfo";
import DriverInfo from "./components/DriverInfo";
import { PDFDownloadLink } from "@react-pdf/renderer";
import MyDocument from "./components/MyDocument";
import { useState } from "react";

function App() {

  const buttonStyle = {
    padding: '20px 0px',
    display: 'block',
    textAlign: 'center',
    backgroundColor: '#4CAF50', // Green color
    color: 'white', // Text color
    border: 'none', // Removes the default border
    borderRadius: '4px', // Rounded corners
    cursor: 'pointer', // Hand cursor on hover
    textDecoration: 'none', // Removes underline from the link
    fontSize: '16px' // Font size
  };
  

  const [policeInfo, setPoliceInfo] = useState({
    badgeNumber: "",
    phone: "",
    policeDepartment: "",
    officerName: "",
    incidentReportNumber: "",
  });

  const [witnesses, setWitnesses] = useState([{ name: "", phone: "" }]);

  const [driverInfo, setDriverInfo] = useState({
    name: "",
    phone: "",
    licensePlate: "",
    vinNumber: "",
    make: "",
    model: "",
    year: "",
    insuranceProvider: "",
    policyNumber: "",
    address: "",
    city: "",
    state: "",
    zip: "",
  });

  return (
    <div style={{paddingBottom: '50px', display: 'flex', flexDirection: 'column'}}>
      <h1>Crash Info Form</h1>
      <p style={{textAlign: 'justify'}}>
        If an ambulance comes it's best practice to go to the hospital, even if
        you think you don't need to. You may be in shock and not realize the
        extent of your injuries. If you don't go to the hospital, you should
        still see a doctor as soon as possible.
      </p>
      <p style={{textAlign: 'justify'}}>You can fill out this form, and then download it as a pdf.</p>
      <p style={{textAlign: 'justify', paddingBottom: '20px'}}>REMEBER: Take pictures of the scene and the damage to your car.</p>

      <WitnessInfo witnesses={witnesses} setWitnesses={setWitnesses} />
      <DriverInfo driverInfo={driverInfo} setDriverInfo={setDriverInfo} />
      <PoliceInfo policeInfo={policeInfo} setPoliceInfo={setPoliceInfo} />

      {/* Add a download link for the PDF */}
      <PDFDownloadLink
        style={buttonStyle}
        document={
          <MyDocument
            witnesses={witnesses}
            driverInfo={driverInfo}
            policeInfo={policeInfo}
          />
        }
        fileName="CrashReport.pdf"
      >
        {({ loading }) => (loading ? "Loading document..." : "Download as PDF")}
      </PDFDownloadLink>
    </div>
  );
}

export default App;
