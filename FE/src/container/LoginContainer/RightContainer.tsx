import React, { useState } from 'react';
import { useRouter } from 'next/router';
import { useDispatch } from 'react-redux';
import { RightComponent } from '../../components/LoginComponent/RightComponent/RightComponent';
import { requestLogin } from '../../store/modules/user';

export const RightContainer = (): JSX.Element => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();
  const dispatch = useDispatch();

  console.log('render Right');

  const onChangeEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log('change Email');
    setEmail(e.target.value);
  };

  const onChangePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log('change password');
    setPassword(e.target.value);
  };

  const pushStateHandler = () => {
    router.push('/signup');
  };

  const onClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    console.log('click button');
    const params = { id: email, password };
    dispatch(requestLogin(params, pushStateHandler));
    setEmail('');
    setPassword('');
  };

  return (
    <RightComponent
      email={email}
      onChangeEmail={onChangeEmail}
      password={password}
      onChangePassword={onChangePassword}
      onClick={onClick}
    />
  );
};
