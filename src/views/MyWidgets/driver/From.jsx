import React from 'react'
import PageContainer from 'src/components/container/PageContainer'
import ParentCard from 'src/components/shared/ParentCard'
import Breadcrumb from 'src/layouts/full/shared/breadcrumb/Breadcrumb'

import { useFormik } from 'formik';
import * as yup from 'yup';
import { Button, FormHelperText, Grid, MenuItem } from '@mui/material';
import CustomFormLabel from 'src/components/forms/theme-elements/CustomFormLabel';
import CustomTextField from 'src/components/forms/theme-elements/CustomTextField';
import CustomSelect from 'src/components/forms/theme-elements/CustomSelect';

const validationSchema = yup.object();

export default function From() {

    const formik = useFormik({
        initialValues: {},
        validationSchema: validationSchema,
        onSubmit: (values) => {
          alert(JSON.stringify(values, null, 2));
          console.log("values",values)
        },
      });

  return (
    <PageContainer title="Driver & Car Details Form" description="this is Custom Form page">
        <Breadcrumb title="Driver & Car Details Form" subtitle="" />
        <ParentCard title="Fill up the Following from">
        <form onSubmit={formik.handleSubmit}>
                <Grid container spacing={2} mb={3}>
                    <Grid container spacing={2} mb={3}>
                        <Grid item xs={12} sm={12} lg={6} order={{ xs: 1, lg: 1 }}>
                            <CustomFormLabel>First Name</CustomFormLabel>
                            <CustomTextField
                                fullWidth
                                id="fname"
                                name="fname"
                                value={formik.values.fname}
                                onChange={formik.handleChange}
                                error={formik.touched.fname && Boolean(formik.errors.fname)}
                                helperText={formik.touched.fname && formik.errors.fname}
                            />
                        </Grid>
                        <Grid item xs={12} sm={12} lg={6} order={{ xs: 2, lg: 2 }}>
                            <CustomFormLabel>Last Name</CustomFormLabel>
                            <CustomTextField
                                fullWidth
                                id="lname"
                                name="lname"
                                value={formik.values.lname}
                                onChange={formik.handleChange}
                                error={formik.touched.lname && Boolean(formik.errors.lname)}
                                helperText={formik.touched.lname && formik.errors.lname}
                            />
                        </Grid>
                        <Grid item xs={12} sm={12} lg={6} order={{ xs: 3, lg: 3 }}>
                            <CustomFormLabel>Mobile</CustomFormLabel>
                            <CustomTextField
                                fullWidth
                                id="mobile"
                                name="mobile"
                                value={formik.values.mobile}
                                onChange={formik.handleChange}
                                error={formik.touched.mobile && Boolean(formik.errors.mobile)}
                                helperText={formik.touched.mobile && formik.errors.mobile}
                            />
                        </Grid>
                        <Grid item xs={12} sm={12} lg={6} order={{ xs: 4, lg: 4 }}>
                            <CustomFormLabel>Email</CustomFormLabel>
                            <CustomTextField
                                fullWidth
                                id="email"
                                name="email"
                                value={formik.values.email}
                                onChange={formik.handleChange}
                                error={formik.touched.email && Boolean(formik.errors.email)}
                                helperText={formik.touched.email && formik.errors.email}
                            />
                        </Grid>
                        <Grid item xs={12} sm={12} lg={6} order={{ xs: 5, lg: 5 }}>
                            <CustomFormLabel>Password</CustomFormLabel>
                            <CustomTextField
                                fullWidth
                                id="password"
                                name="password"
                                value={formik.values.password}
                                onChange={formik.handleChange}
                                error={formik.touched.password && Boolean(formik.errors.password)}
                                helperText={formik.touched.password && formik.errors.password}
                            />
                        </Grid>
                        {/* <Grid item xs={12} sm={12} lg={6} order={{ xs: 6, lg: 6 }}>
                            <CustomFormLabel>Profile Picture</CustomFormLabel>
                            <input type="file" />
                        </Grid> */}
                        <Grid item xs={12} sm={12} lg={6} order={{ xs: 7, lg: 7 }}>
                            <CustomFormLabel>Gender</CustomFormLabel>
                            <CustomSelect
                            labelId="gender-select"
                            id="gender" fullWidth
                            name="gender"
                            value={formik.values.gender}
                            onChange={formik.handleChange}
                        >
                            <MenuItem value='male'>male</MenuItem>
                            <MenuItem value='female'>female</MenuItem>
                        </CustomSelect>
                        {formik.errors.gender && (
                            <FormHelperText error id="standard-weight-helper-text-email-login">
                                {' '}
                                {formik.errors.gender}{' '}
                            </FormHelperText>
                        )}
                        </Grid>
                        <Grid item xs={12} sm={12} lg={6} order={{ xs: 8, lg: 8 }}>
                            <CustomFormLabel>City</CustomFormLabel>
                            <CustomTextField
                                fullWidth
                                id="city"
                                name="city"
                                value={formik.values.city}
                                onChange={formik.handleChange}
                                error={formik.touched.city && Boolean(formik.errors.city)}
                                helperText={formik.touched.city && formik.errors.city}
                            />
                        </Grid>
                        <Grid item xs={12} sm={12} lg={6} order={{xs: 9, lg: 9}}>            
                            <CustomFormLabel>Driver NID Number</CustomFormLabel>
                            <CustomTextField
                                fullWidth
                                id="nidnumber"
                                name="nidnumber"
                                value={formik.values.nidnumber}
                                onChange={formik.handleChange}
                                error={formik.touched.nidnumber && Boolean(formik.errors.nidnumber)}
                                helperText={formik.touched.nidnumber && formik.errors.nidnumber}
                            />
                        </Grid>
                        <Grid item xs={12} sm={12} lg={6} order={{xs: 10, lg: 10}}>
                        <CustomFormLabel>Emergency Number</CustomFormLabel>
                            <CustomTextField
                                fullWidth
                                id="emergencynumber"
                                name="emergencynumber"
                                value={formik.values.emergencynumber}
                                onChange={formik.handleChange}
                                error={formik.touched.emergencynumber && Boolean(formik.errors.emergencynumber)}
                                helperText={formik.touched.emergencynumber && formik.errors.emergencynumber}
                            />
                        </Grid>
                        <Grid item xs={12} sm={12} lg={6} order={{xs: 11, lg: 11}}>
                        <CustomFormLabel>Driving Car's Name</CustomFormLabel>
                        <CustomTextField
                                fullWidth
                                id="carname"
                                name="carname"
                                value={formik.values.carname}
                                onChange={formik.handleChange}
                                error={formik.touched.carname && Boolean(formik.errors.carname)}
                                helperText={formik.touched.carname && formik.errors.carname}
                            />
                        </Grid>
                        <Grid item xs={12} sm={12} lg={6} order={{xs: 12, lg: 12}}>
                        <CustomFormLabel>Driving Licence Number</CustomFormLabel>
                            <CustomTextField
                                fullWidth
                                id="licencenumber"
                                name="licencenumber"
                                value={formik.values.licencenumber}
                                onChange={formik.handleChange}
                                error={formik.touched.licencenumber && Boolean(formik.errors.licencenumber)}
                                helperText={formik.touched.licencenumber && formik.errors.licencenumber}
                            />
                        </Grid>
                        <Grid item xs={12} sm={12} lg={6} order={{xs: 13, lg: 13}}>
                        <CustomFormLabel>Driving Experience Car's </CustomFormLabel>
                        <CustomTextField
                                fullWidth
                                id="decname"
                                name="decname"
                                value={formik.values.decname}
                                onChange={formik.handleChange}
                                error={formik.touched.decname && Boolean(formik.errors.decname)}
                                helperText={formik.touched.decname && formik.errors.decname}
                            />
                        </Grid>
                        <Grid item xs={12} sm={12} lg={6} order={{xs: 14, lg: 14}}>
                        <CustomFormLabel>Driving Experience Year </CustomFormLabel>
                        <CustomTextField
                                
                                fullWidth
                                id="experience"
                                name="experience"
                                value={formik.values.experience}
                                onChange={formik.handleChange}
                                error={formik.touched.experience && Boolean(formik.errors.experience)}
                                helperText={formik.touched.experience && formik.errors.experience}
                            />
                        </Grid>

                    </Grid>
                </Grid>
                <Button color="primary" variant="contained" type="submit">Submit</Button>
        </form>
        </ParentCard>
    </PageContainer>
  )
}
