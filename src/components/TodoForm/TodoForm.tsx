import "./todoForm.scss";

interface FormProps {
  text: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  submitHandler: (e: React.FormEvent<HTMLFormElement>) => void;
}

const TodoForm = ({ text, onChange, submitHandler }: FormProps) => {
  return (
    <form className="formContainer" onSubmit={submitHandler}>
      <input type="text" value={text} onChange={onChange} />
      <button type="submit">+</button>
    </form>
  );
};

export default TodoForm;
