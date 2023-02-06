import { User } from '../models/user';

/**
 * @see https://github.com/leandroluk/undef-api-auth/wiki/%5BCSU001%5D-Register-*User*
 */
export type RegisterUser = {
  register(data: RegisterUser.Data): Promise<void>;
};
export namespace RegisterUser {
  export type Data = {
    body: Pick<User, 'email'>;
  };
}