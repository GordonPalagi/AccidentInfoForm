

const WitnessForm = ({ witness, index, handleChange }) => {
    return (
        <form action="" style={{display: 'flex', flexDirection: 'column', padding: '12px'}}>
            <div style={{display: 'flex', flexDirection: 'column', alignItems: 'flex-start', padding: '10px 0px'}}>
              <label htmlFor={`name-${index}`}>Name</label>
              <input style={{width: '100%'}} type="text" name="name" id={`name-${index}`} value={witness.name} onChange={(e) => handleChange(e, index)}/>
            </div>
            <div style={{display: 'flex', flexDirection: 'column', alignItems: 'flex-start'}}>
              <label htmlFor={`phone-${index}`}>Phone</label>
              <input style={{width: '100%'}} type="tel" name="phone" id={`phone-${index}`} value={witness.phone} onChange={(e) => handleChange(e, index)}/>
            </div>
        </form>
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
            
            <button onClick={addWitness}> Add Witness</button>
        </div>
    );
}

export default Witness;
