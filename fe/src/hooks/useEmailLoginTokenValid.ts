import { useHistory } from 'react-router-dom';
import { useSetRecoilState } from 'recoil';
import { useMutation } from 'react-query';
import { userInfo } from '../atoms/auth/atom.auth';
import { getEmailLoginUserInfo } from '../APIs/auth/auth.email';
import { TokenKey } from '../interface/auth/interface.auth';

export const useEmailLoginTokenValid = (onSuccessRedirectUrl?: string) => {
  const setUserInfo = useSetRecoilState(userInfo);
  const history = useHistory();

  const { mutate } = useMutation(getEmailLoginUserInfo, {
    onSuccess: (data) => {
      setUserInfo(data);
      // console.log(data);
      if (onSuccessRedirectUrl !== undefined) {
        history.push(onSuccessRedirectUrl);
      }
    },
    onError: (error: any) => {
      if (error.response && error.response.status === 401) {
        localStorage.removeItem(TokenKey.accessToken);
        alert('세션이 만료되었습니다. 재로그인 해주세요');
        history.push({ pathname: '/login', state: { isReLoad: true } });
      }
    },
  });

  return mutate;
};
