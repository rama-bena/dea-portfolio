export const DottedButton = ({ name, Icon }) => {
  return (
    <button className="flex items-center justify-center text-lg rounded-lg border border-gray-300 bg-gray-200 px-6 py-3 font-medium text-gray-800 transition-transform duration-300 hover:bg-gray-300 active:bg-gray-400">
      {name} {Icon && <Icon className="inline ml-2" />}
    </button>
  );
};
