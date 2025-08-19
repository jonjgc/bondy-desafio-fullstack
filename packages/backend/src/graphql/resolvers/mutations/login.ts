import bcrypt from 'bcrypt';
import { User } from '../../../models/User'; 

export const login = async (_parent: any, args: { email: string, password: string }) => {
  const { email, password } = args;

  const user = await User.findOne({ email });
  if (!user) {
    throw new Error('E-mail ou senha inválidos.');
  }

  const isPasswordValid = await bcrypt.compare(password, user.password);
  if (!isPasswordValid) {
    throw new Error('E-mail ou senha inválidos.');
  }

  return user;
};