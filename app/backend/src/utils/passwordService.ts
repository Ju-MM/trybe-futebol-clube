import * as bcrypt from 'bcryptjs';

const passwordService = {
  // encryptPassword: (password: string) => {
  //   const salt = bcrypt.genSaltSync(5);
  //   const encryptedPassword = bcrypt.hashSync(password, salt);
  //   return encryptedPassword;
  // },

  compare: (password: string, hash: string) => {
    const result = bcrypt.compareSync(password, hash);
    return result;
  },
};

export default passwordService;
