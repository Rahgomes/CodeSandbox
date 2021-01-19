export const API_URL = "https://randomuser.me/api/?";

export function GET_USERS() {
  return {
    url: `${API_URL}results=9&inc=gender,name,location,email,dob,phone,cell,id,picture,info,nat,login&nat=BR`,
    options: {
      method: "GET",
    },
  };
}
