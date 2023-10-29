import { Page, Text, View, Document, StyleSheet } from "@react-pdf/renderer";


// Create styles for the PDF
const styles = StyleSheet.create({
  page: {
    padding: 30,
  },
  section: {
    margin: 10,
    padding: 10,
    flexGrow: 1,
  },
  header: {
    fontSize: 18,
    marginBottom: 8,
  },
  label: {
    fontSize: 14,
    marginBottom: 4,
  },
  value: {
    fontSize: 12,
    marginBottom: 10,
  },
});

function MyDocument({ witnesses, driverInfo, policeInfo }) {

  return (
    <Document>
      <Page size="A4" style={styles.page}>
        <View style={styles.section}>
          {witnesses.map((witness, index) => (
            <div key={index}>
              <h3>Witnesses</h3>
              <Text style={styles.header}>Witness {index + 1}</Text>
              <Text style={styles.label}>Name:</Text>
              <Text style={styles.value}>{witness.name}</Text>
              <Text style={styles.label}>Phone:</Text>
              <Text style={styles.value}>{witness.phone}</Text>
            </div>
          ))}

          <h3>Driver Info</h3>
          <Text style={styles.label}>Name:</Text>
          <Text style={styles.value}>{driverInfo.name}</Text>
          <Text style={styles.label}>Phone Number:</Text>
          <Text style={styles.value}>{driverInfo.phone}</Text>
          <Text style={styles.label} label>
            License Plate:
          </Text>
          <Text style={styles.value}>{driverInfo.licensePlate}</Text>
          <Text style={styles.label}>VIN Number:</Text>
          <Text style={styles.value}>{driverInfo.vinNumber}</Text>
          <Text style={styles.label}>Insurance Provider:</Text>
          <Text style={styles.value}>{driverInfo.insuranceProvider}</Text>
          <Text style={styles.label}>Policy Number:</Text>
          <Text style={styles.value}>{driverInfo.policyNumber}</Text>
          <Text style={styles.label}>Make of Car</Text>
          <Text style={styles.value}>{driverInfo.make}</Text>
          <Text style={styles.label}>Model of Car</Text>
          <Text style={styles.value}>{driverInfo.model}</Text>
          <Text style={styles.label}>Address:</Text>
          <Text style={styles.value}>{driverInfo.address}</Text>
          <Text style={styles.label}>City:</Text>
          <Text style={styles.value}>{driverInfo.city}</Text>
          <Text style={styles.label}>State:</Text>
          <Text style={styles.value}>{driverInfo.state}</Text>
          <Text style={styles.label}>Zip:</Text>
          <Text style={styles.value}>{driverInfo.zip}</Text>

          <h3>Policy Report Info</h3>
          <Text style={styles.label}>Police Department:</Text>
          <Text style={styles.value}>{policeInfo.policeDepartment}</Text>
          <Text style={styles.label}>Officer Name:</Text>
          <Text style={styles.value}>{policeInfo.officerName}</Text>
          <Text style={styles.label}>Incident Report Number:</Text>
          <Text style={styles.value}>{policeInfo.incidentReportNumber}</Text>
        </View>
      </Page>
    </Document>
  );
}

export default MyDocument;
