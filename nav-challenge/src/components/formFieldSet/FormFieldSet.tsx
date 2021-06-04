import { FC } from "react";

interface FormFieldSetProps {
  type: string;
  label: string;
  inputValue: string;
  placeHolder: string;
  handleChange: (e: any) => void;
}

const FormFieldSet: FC<FormFieldSetProps> = ({
  type,
  label,
  inputValue,
  placeHolder,
  handleChange,
}) => {
  return (
    <fieldset>
      <label>{label}</label>
      <input
        type={type}
        placeholder={placeHolder}
        className="form-control"
        value={inputValue}
        onChange={e => {
          handleChange(e);
        }}
      />
    </fieldset>
  );
};

export default FormFieldSet;
