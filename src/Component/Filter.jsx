import useTodos from "../hooks/useContext";
const Filter = () => {
    const {filterTodos} =useTodos();
    return (
      <select
        onChange={(e) => {
          filterTodos(e.target.value);
        }}
        className="form-select"
        aria-label="Default select example"
      >
        <option value="all">Open this select menu</option>
        <option value="true">Completed</option>
        <option value=''>Pending</option>
      </select>
    );
  };
  
  export default Filter;
