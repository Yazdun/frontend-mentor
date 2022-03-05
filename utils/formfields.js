import { passwordStrength } from 'check-password-strength'

export const signupFields = [
  {
    name: 'username',
    label: 'username',
    type: 'text',
    id: 'username',
    placeholder: 'enter your username',
    key: 'OG6p7uEJaW',
    validation: {
      required: {
        value: true,
        message: 'username is required',
      },
      pattern: {
        value: /^[a-zA-Z0-9_.-]*$/,
        message: 'cannot contain symbols and space',
      },
    },
  },

  {
    name: 'password',
    label: 'password',
    type: 'password',
    id: 'password',
    placeholder: 'enter your password',
    key: 'XQs7S6FI5L',
    validation: {
      required: {
        value: true,
        message: 'password is required',
      },
      validate: {
        strength: value =>
          passwordStrength(value).id > 0 || 'password is too weak',
      },
    },
  },
]
