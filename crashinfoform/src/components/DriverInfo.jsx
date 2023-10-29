import InputBox from './inputBox/InputBox';
import driverInfoFields from './inputBox/DriverInfoData';

function DriverInfo({driverInfo, setDriverInfo}) {

  const handleInputChange = (key) => (e) => {
    setDriverInfo(prevState => ({ ...prevState, [key]: e.target.value }));
  }

  return (

      <div style={{display: 'flex', flexDirection: 'column'}}>
        <h2>{driverInfoFields.formTitle}</h2>
        {driverInfoFields.fields.map(field => (
          <InputBox 
            key={field.id}
            label={field.label}
            id={field.id}
            name={field.name}
            value={driverInfo[field.valueKey]}
            onChange={handleInputChange(field.valueKey)}
          />
        ))}
      </div>

  );
}


export default DriverInfo;
