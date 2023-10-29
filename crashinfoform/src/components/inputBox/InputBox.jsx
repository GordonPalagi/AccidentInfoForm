


function InputBox({ label, id, name, value, onChange }) {
  return (
    <div style={{display: 'flex', flexDirection: 'column', alignItems: 'flex-start', padding: '12px'}}>
      <label htmlFor={id}>{label}</label>
      <input style={{width: '100%'}} type="text" id={id} name={name} value={value} onChange={onChange} />
    </div>
  );
}

export default InputBox;
