import React from 'react'

import { useFormik } from 'formik';
import * as yup from 'yup';
import { Button, Grid } from '@mui/material';
import CustomFormLabel from 'src/components/forms/theme-elements/CustomFormLabel';
import CustomTextField from 'src/components/forms/theme-elements/CustomTextField';
import PageContainer from 'src/components/container/PageContainer';
import Breadcrumb from 'src/layouts/full/shared/breadcrumb/Breadcrumb';
import ParentCard from 'src/components/shared/ParentCard';

const validationSchema = yup.object();

export default function Documents() {
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
                            <CustomFormLabel>Driving License front Side Picture</CustomFormLabel>
                            <input type="file"/>
                        </Grid>
                        <Grid item xs={12} sm={12} lg={6} order={{ xs: 2, lg: 2 }}>
                            <CustomFormLabel>Driving License back Side Picture</CustomFormLabel>
                            <input type="file"/>
                        </Grid>
                        <Grid item xs={12} sm={12} lg={6} order={{ xs: 3, lg: 3 }}>
                            <CustomFormLabel>NID Card front picture</CustomFormLabel>
                           <input type="file"/>
                        </Grid>
                        <Grid item xs={12} sm={12} lg={6} order={{ xs: 4, lg: 4 }}>
                            <CustomFormLabel>NID Card back picture</CustomFormLabel>
                            <input type="file"/>
                        </Grid>
                        <Grid item xs={12} sm={12} lg={6} order={{ xs: 5, lg: 5 }}>
                            <CustomFormLabel>House electric bill copy</CustomFormLabel>
                            <input type="file"/>
                        </Grid>
                        <Grid item xs={12} sm={12} lg={6} order={{ xs: 6, lg: 6 }}>
                            <CustomFormLabel>House electric bill pay card</CustomFormLabel>
                            <input type="file" />
                        </Grid>
                        <Grid item xs={12} sm={12} lg={6} order={{ xs: 7, lg: 7 }}>
                            <CustomFormLabel>Bank cheque book picture</CustomFormLabel>
                            <input type="file"/>
                        </Grid>
                      </Grid>
                    </Grid>
                <Button color="primary" variant="contained" type="submit">Submit</Button>
        </form>
        </ParentCard>
    </PageContainer>
  )
}
