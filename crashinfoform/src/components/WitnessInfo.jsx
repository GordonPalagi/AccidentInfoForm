import FormControl from "@mui/joy/FormControl";
import FormLabel from "@mui/joy/FormLabel";
import Input from "@mui/joy/Input";
import Button from '@mui/joy/Button';

const WitnessForm = ({ witness, index, handleChange }) => {
    return (
        <FormControl action="" style={{display: 'flex', flexDirection: 'column', padding: '12px'}}>
            <div style={{display: 'flex', flexDirection: 'column', alignItems: 'flex-start', padding: '10px 0px'}}>
              <FormLabel style={{color: "white", fontSize: "1.3rem"}} htmlFor={`name-${index}`}>Name</FormLabel>
              <Input variant="solid" placeholder="Type in here..." style={{width: '100%'}} type="text" name="name" id={`name-${index}`} value={witness.name} onChange={(e) => handleChange(e, index)}/>
            </div>
            <div style={{display: 'flex', flexDirection: 'column', alignItems: 'flex-start'}}>
              <FormLabel style={{color: "white", fontSize: "1.3rem"}} htmlFor={`phone-${index}`}>Phone</FormLabel>
              <Input variant="solid" placeholder="Type in here..." style={{width: '100%'}} type="tel" name="phone" id={`phone-${index}`} value={witness.phone} onChange={(e) => handleChange(e, index)}/>
            </div>
        </FormControl>
    );
}

function Witness({ witnesses, setWitnesses}) {

    const handleChange = (e, index) => {
        const { name, value } = e.target;
        const newWitnesses = [...witnesses];
        newWitnesses[index][name] = value;
        setWitnesses(newWitnesses);
    };

    const addWitness = (e) => {
        e.preventDefault();
        setWitnesses(prevWitnesses => [...prevWitnesses, { name: "", phone: "" }]);
    }

    return (
        <div>
            <h2>Gather Witnesses</h2>
            {witnesses.map((witness, index) => (
                <WitnessForm key={index} witness={witness} index={index} handleChange={handleChange}/>
            ))}
            
            <Button variant="solid" size="lg" onClick={addWitness}> Add Witness</Button>
        </div>
    );
}

export default Witness;
