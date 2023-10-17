import * as Yup from 'yup';
import moment from 'moment';

const signUpRegularExp: any = '^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])';
const loginExp: any = '/^[A-Z0-9._%+-]+@[A-Z0-9.-]+.[A-Z]{2,4}$/i';

export const LoginSchema = Yup.object().shape({
  email: Yup.string().required('Please Enter Your Email').email(),
  password: Yup.string()
    .required('Please Enter Your Password')
    .min(8, 'Password Too Short'),
});

export const ClerkIdSchema = Yup.object().shape({
  clerkId: Yup.string().required('Invalid Clerk / Server ID'),
});

export const UpdatePasswordSchema = Yup.object().shape({
  password: Yup.string()
    .required('Please Enter Your Password')
    .min(8, 'Password Too Short'),
  newPassword: Yup.string()
    .required('Password Required')
    .min(
      8,
      'Password should include at least one uppercase letter, one lowercase letter, one number and one special character, Password should be eight characters long!',
    )
    .matches(
      /(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{8,}$/,
      'Password should include at least one uppercase letter, one lowercase letter, one number and one special character, Password should be eight characters long!',
    ),
  confirmPassword: Yup.string()
    .required('Confirm Your Password')
    .oneOf([Yup.ref('password'), null], 'Passwords must match'),
});

export const ChangePasswordSchema = Yup.object().shape({
  password: Yup.string()
    .required('Password Required')
    .min(
      8,
      'Password should include at least one uppercase letter, one lowercase letter, one number and one special character, Password should be eight characters long!',
    )
    .matches(
      /(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{8,}$/,
      'Password should include at least one uppercase letter, one lowercase letter, one number and one special character, Password should be eight characters long!',
    ),
  confirmPassword: Yup.string()
    .required('Confirm Your Password')
    .oneOf([Yup.ref('password'), null], 'Passwords must match'),
});

export const ForgotPasswordSchema = Yup.object().shape({
  email: Yup.string()
    .required('Phone Number Required')
    .min(10, 'Enter complete number')
    .matches(
      /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/,
      'Invalid Phone Number',
    ),
});

export const ForgotPasswordEmailSchema = Yup.object().shape({
  email: Yup.string()
    .required('Please Enter Your Email')
    .email('Please Enter Valid Email'),
  password: Yup.string()
    .required('Password Required')
    .min(
      8,
      'Password should include at least one uppercase letter, one lowercase letter, one number and one special character, Password should be eight characters long!',
    )
    .matches(
      /(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{8,}$/,
      'Password should include at least one uppercase letter, one lowercase letter, one number and one special character, Password should be eight characters long!',
    ),
  confirmPassword: Yup.string()
    .required('Confirm Your Password')
    .oneOf([Yup.ref('password'), null], 'Passwords must match'),
});

export const SignUpSchema = Yup.object().shape({
  firstName: Yup.string()
    .required('Please Enter Your First Name')
    .matches(/^[aA-zZ\s]+$/, 'Only alphabets are allowed')
    .min(2, 'Minimum 2 characters required')
    .max(25, 'Maximum 25 characters allowed'),
  lastName: Yup.string()
    .required('Please Enter Your Last Name')
    .matches(/^[aA-zZ\s]+$/, 'Only alphabets are allowed')
    .min(2, 'Minimum 2 characters required')
    .max(25, 'Maximum 25 characters allowed'),
  email: Yup.string()
    .required('Please Enter Your Email')
    .email('Invalid Email'),
  password: Yup.string()
    .required('Password Required')
    .min(
      8,
      'Password should include at least one uppercase letter, one lowercase letter, one number and one special character, Password should be eight characters long!',
    )
    .matches(
      /(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{8,}$/,
      'Password should include at least one uppercase letter, one lowercase letter, one number and one special character, Password should be eight characters long!',
    ),
  confirmPassword: Yup.string()
    .required('Confirm Your Password')
    .oneOf([Yup.ref('password'), null], 'Passwords must match'),
});
export const SecurityQuestin = Yup.object().shape({
  question: Yup.string().required('Please Enter Your Question'),
  answer: Yup.string().required('Please Enter Your Answer'),
});
export const PCA_ContactSchema = Yup.object().shape({
  name: Yup.string()
    .required('Please Enter Your  Name')
    .matches(/^[aA-zZ\s]+$/, 'Only alphabets are allowed')
    .min(2, 'Minimum 2 characters required')
    .max(25, 'Maximum 25 characters allowed'),
  email: Yup.string()
    .required('Please Enter Your Email')
    .email('Invalid Email'),

  re_email: Yup.string()
    .required('Please Re-Enter Your Email')
    .email('Invalid Email')
    .oneOf([Yup.ref('email'), null], 'Email must match'),

  mobileNo: Yup.string().required('Please Enter Your Mobile No'),
});
