function FormButton({ children }) {
  return (
    <button
      type="submit"
      className="text-[#212121] font-semibold py-2 px-4 bg-[#F5C76E] rounded-lg hover:opacity-80 hover:cursor-pointer"
    >
      {children}
    </button>
  );
}

export default FormButton;
