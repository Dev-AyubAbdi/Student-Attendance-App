import { createContext, useContext, useReducer } from "react";
import DashboardReduer, { initialState } from "./Students.Reduer";

export const StudentsContext = createContext();

export const StudentProvider = ({ children }) => {
  const [state, dispatch] = useReducer(DashboardReduer, initialState);

  const addNewStudents = (student) => {
    const newStudent = state.Students.concat(student);

    dispatch({
      type: "ADD_TO_STUDENT",
      payload: {
        Students: newStudent,
      },
    });
  };
  const values = {
    Students: state.Students,
    addNewStudents,
  };

  return (
    <StudentsContext.Provider value={values}>
      {children}
    </StudentsContext.Provider>
  );
};
const useStudents = () => {
  const context = useContext(StudentsContext);

  if (!context === undefined) {
    throw new error("use inside of context");
  }
  return context;
};

export default useStudents;
