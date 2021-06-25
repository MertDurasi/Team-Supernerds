import "./EinstellungInput.css";

const EinstellungInput = ({text, identifier, styling}) => {

  return (
    <div className={identifier} style={styling}>
      <span id="position-text-einstellungen">{text}</span>
      <input id="basic-input-einstellungen"></input>
    </div>
  );
};

export default EinstellungInput;
