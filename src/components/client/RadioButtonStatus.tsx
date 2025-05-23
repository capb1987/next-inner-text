type RadioButtonStatusProps = {
  tarea: {
    state: string;
    name: string;
  };
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

export default function RadioButtonStatus({
  tarea,
  onChange,
}: RadioButtonStatusProps) {
  return (
    <div className="flex justify-between md:justify-start gap-2 items-center">
      <label htmlFor={tarea.state}>{tarea.name}</label>
      <input
        type="radio"
        className="border-gray-300 border-2 rounded-md"
        name="estado"
        value={`${tarea.state}`}
        id={tarea.state}
        onChange={onChange}
      />
    </div>
  );
}
