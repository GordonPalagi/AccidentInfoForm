import InputBox from "./inputBox/InputBox";
import policeInfoFields from "./inputBox/PoliceInfoData";


function PoliceInfo({policeInfo, setPoliceInfo} ) {

  const handleInputChange = (key) => (e) => {
    setPoliceInfo(prevState => ({ ...prevState, [key]: e.target.value }));
  }

  return (
    <div style={{padding: '20px 0px'}}>
      <h2>{policeInfoFields.formTitle}</h2>
      <form action="" style={{display: 'flex', flexDirection: 'column'}}>
        {policeInfoFields.fields.map(field => (
          <InputBox 
            key={field.id}
            label={field.label}
            id={field.id}
            name={field.name}
            value={policeInfo[field.valueKey]}
            onChange={handleInputChange(field.valueKey)}
          />
        ))}
      </form>
    </div>
  );
}

export default PoliceInfo;
