// form testing
// http://localhost:3000/login

import * as React from 'react'
import {render, screen} from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import Login from '../../components/login'
import faker from 'faker';
import {build} from '@jackfranklin/test-data-bot';

const userBuilder = build('User', {
  fields: {
    name: faker.internet.userName(),
    password: faker.internet.password()
  },
});

test('submitting the form calls onSubmit with username and password', async () => {

  // const handleSubmit = jest.fn(); 
  
  // const user = userBuilder();

  // render(<Login onSubmit={handleSubmit} />);
  // const username = screen.getByLabelText('Username');
  // const password = screen.getByLabelText('Password');

  // await userEvent.type(username, user.username);
  // await userEvent.type(password, user.password);

  // await userEvent.click(screen.getByText('Submit'));
  
  // expect(handleSubmit).toHaveBeenCalledWith(user);
})

/*
eslint
  no-unused-vars: "off",
*/
