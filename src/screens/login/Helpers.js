export const checkEmail = mail => {
  //check if user exist from api
  let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  return reg.test(mail);
};

export const login = (mail, password) => {
  //attempt to login to api
  const users = ["papidiagne@domain.com", "johndoe@gmail.com"];
  let found = null;
  found = users.find(email => {
    return email == mail;
  });
  const response = "tokenFromApi";
  if (password == "passer" && found != null) return response;
  return "error";
};
