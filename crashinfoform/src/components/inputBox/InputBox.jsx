import Input from "@mui/joy/Input";
import FormControl from '@mui/joy/FormControl';
import FormLabel from '@mui/joy/FormLabel';
// import FormHelperText from '@mui/joy/FormHelperText';

function InputBox({ label, id, name, value, onChange }) {
  return (
    <FormControl
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        padding: "12px",
      }}
    >
      <FormLabel
        style={{
          color: "white",
          fontSize: "1.3rem",
        }}
        htmlFor={id}
      >
        {label}
      </FormLabel>
      <Input
        placeholder="Type in here..."
        variant="solid"
        size="md"
        sx={{
          "--Input-focusedInset": "var(--any, )",
          "--Input-focusedThickness": "0.25rem",
          "--Input-focusedHighlight": "rgba(13,110,253,.25)",
          "&::before": {
            transition: "box-shadow .15s ease-in-out",
          },
          "&:focus-within": {
            borderColor: "#86b7fe",
          },
        }}
        style={{ width: "100%" }}
        type="text"
        id={id}
        name={name}
        value={value}
        onChange={onChange}
      />
      {/* <FormHelperText></FormHelperText> */}
    </FormControl>
  );
}

export default InputBox;
