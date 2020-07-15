import { renderHook } from '@testing-library/react-hooks';
import MockAdapter from 'axios-mock-adapter';

import api from '../../services/api';
import { useAuth, AuthProvider } from '../../hooks/auth';

const apiMock = new MockAdapter(api);

describe('Auth hook', () => {
  it('should be able to sign in', async () => {
    apiMock.onPost('sessions').replyOnce(200, {
      user: {
        id: 'id-uuid',
        name: 'John Doe',
        email: 'johndoe@mail.com',
      },
      token: 'token-jwt',
    });

    const { result, waitForNextUpdate } = renderHook(() => useAuth(), {
      wrapper: AuthProvider,
    });

    result.current.signIn({
      email: 'johndoe@mail.com',
      password: 'asdfasdf',
    });

    await waitForNextUpdate();

    expect(result.current.user.email).toBe('johndoe@mail.com');
  });
});
