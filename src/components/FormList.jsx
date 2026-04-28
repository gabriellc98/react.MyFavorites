function FormList({ types, ...props }) {
  return (
    <select
      className="rounded-lg bg-transparent border border-[#3A2547] px-4 py-2 text-[#CFC6B8] [&>option]:bg-[#241935] focus:border-[#F6C667]"
      defaultValue=""
      {...props}
    >
      {/* <option value="" disabled>
        Select one option
      </option> */}
      {types.map((type) => (
        <option key={type.id} value={type.id}>
          {type.name}
        </option>
      ))}
    </select>
  );
}

export default FormList;
