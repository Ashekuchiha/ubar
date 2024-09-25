import React, { useEffect, useState } from 'react';
import {
  Box,
  Typography,
  FormGroup,
  FormControlLabel,
  Button,
  Stack,
  Divider,
} from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';

import CustomCheckbox from '../../../components/forms/theme-elements/CustomCheckbox';
import CustomTextField from '../../../components/forms/theme-elements/CustomTextField';
import CustomFormLabel from '../../../components/forms/theme-elements/CustomFormLabel';

import AuthSocialButtons from './AuthSocialButtons';
import { useDispatch, useSelector } from 'react-redux';
import { login } from 'src/views/MyWidgets/userSlice';

import { useFormik } from 'formik';
import * as Yup from 'yup';

const users = [
  {
    username: 'ashik',
    password: '12345678',
    role: 'admin',
  },
  {
    username: 'alif',
    password: '12345678',
    role: 'user',
  },
];

const validationSchema = Yup.object({
  username: Yup.string().required('Username is required'),
  password: Yup.string().required('Password is required'),
});

const AuthLogin = ({ title, subtitle, subtext }) => {
  
  // const [username, setUsername] = useState('');
  // const [password, setPassword] = useState('');
  // const [error, setError] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isAuthenticated = useSelector((state) => state.user.isAuthenticated);
  useEffect(() => {
    if (isAuthenticated) {
      navigate('/dashboard');
    }
  }, [isAuthenticated, navigate]);

  const formik = useFormik({
    initialValues: {
      username: '',
      password: '',
    },
    validationSchema,
    onSubmit: async (values) => {
      const result = await dispatch(login(values));
      if (result.payload) {
        navigate('/dashboard');
      }
    },
  });

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   const result = await dispatch(login({ username, password }));
  //   if (result.payload) {
  //     navigate('/dashboard'); 
  //   }
  // };
  return (
    <>
      {title ? (
        <Typography fontWeight="700" variant="h3" mb={1}>
          {title}
        </Typography>
      ) : null}

      {subtext}

      <AuthSocialButtons title="Sign in with" />
      <Box mt={3}>
        <Divider>
          <Typography
            component="span"
            color="textSecondary"
            variant="h6"
            fontWeight="400"
            position="relative"
            px={2}
          >
            or sign in with
          </Typography>
        </Divider>
      </Box>
      <form onSubmit={formik.handleSubmit}>
        <Stack>
          <Box>
            <CustomFormLabel htmlFor="username">Username</CustomFormLabel>
            <CustomTextField 
            // id="username"
            // variant="outlined"
            // fullWidth
            // value={username}
            // onChange={(e) => setUsername(e.target.value)}
            id="username"
            name="username"
            variant="outlined"
            fullWidth
            value={formik.values.username}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.username && Boolean(formik.errors.username)}
            helperText={formik.touched.username && formik.errors.username}
          
             />
          </Box>
          <Box>
            <CustomFormLabel htmlFor="password">Password</CustomFormLabel>
            <CustomTextField 
            // id="password"
            // type="password"
            // variant="outlined"
            // fullWidth
            // value={password}
            // onChange={(e) => setPassword(e.target.value)}
            id="password"
            name="password"
            type="password"
            variant="outlined"
            fullWidth
            value={formik.values.password}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.password && Boolean(formik.errors.password)}
            helperText={formik.touched.password && formik.errors.password}
          
            />
          </Box>
          <Stack justifyContent="space-between" direction="row" alignItems="center" my={2}>
            <FormGroup>
              <FormControlLabel
                control={<CustomCheckbox defaultChecked />}
                label="Remeber this Device"
              />
            </FormGroup>
            <Typography
              component={Link}
              to="/auth/forgot-password"
              fontWeight="500"
              sx={{
                textDecoration: 'none',
                color: 'primary.main',
              }}
            >
              Forgot Password ?
            </Typography>
          </Stack>
        </Stack>
        <Box>
          <Button
            // color="primary"
            // variant="contained"
            // size="large"
            // fullWidth
            // component={Link}
            // to="/"
            // type="submit"
            color="primary"
            variant="contained"
            size="large"
            fullWidth
            type="submit"
          >
            Sign In 
          </Button>
        </Box>
        {subtitle}
      </form>
    </>
  )
};

export default AuthLogin;
