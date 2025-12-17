export const initialState = {
  Students: [],
};

const DashboardReduer = (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case "ADD_TO_STUDENT":
      return {
        ...state,
        Students: payload.Students,
      };
    default:
      throw new Error("unknow reducer");
  }
};

export default DashboardReduer;
