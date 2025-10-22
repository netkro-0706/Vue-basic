const validateEmail = (email) => {
  const re =
  /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i;
  return re.test(email)
};

// TODO: like password validate
const validatePassword = (password) => {
  const re = password.length > 0
  return re
}

// TODO: like nickname validate
const validateNickname = (nickname) => {
  const re = nickname.length > 0
  return re
}

export { validateEmail, validateNickname, validatePassword }