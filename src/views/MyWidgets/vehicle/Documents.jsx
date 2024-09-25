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
                            <CustomFormLabel>Car front Side Picture</CustomFormLabel>
                            <input type="file"/>
                        </Grid>
                        <Grid item xs={12} sm={12} lg={6} order={{ xs: 2, lg: 2 }}>
                            <CustomFormLabel>Car back Side Picture</CustomFormLabel>
                            <input type="file"/>
                        </Grid>
                        <Grid item xs={12} sm={12} lg={6} order={{ xs: 3, lg: 3 }}>
                            <CustomFormLabel>Car left side picture</CustomFormLabel>
                           <input type="file"/>
                        </Grid>
                        <Grid item xs={12} sm={12} lg={6} order={{ xs: 4, lg: 4 }}>
                            <CustomFormLabel>Car right side picture</CustomFormLabel>
                            <input type="file"/>
                        </Grid>
                        <Grid item xs={12} sm={12} lg={6} order={{ xs: 5, lg: 5 }}>
                            <CustomFormLabel>Car fitness licence picture</CustomFormLabel>
                            <input type="file"/>
                        </Grid>
                        <Grid item xs={12} sm={12} lg={6} order={{ xs: 6, lg: 6 }}>
                            <CustomFormLabel>Car bolubook picture</CustomFormLabel>
                            <input type="file" />
                        </Grid>
                        <Grid item xs={12} sm={12} lg={6} order={{ xs: 7, lg: 7 }}>
                            <CustomFormLabel>Car tax token picture</CustomFormLabel>
                            <input type="file"/>
                        </Grid>
                        <Grid item xs={12} sm={12} lg={6} order={{ xs: 8, lg: 8 }}>
                            <CustomFormLabel>Car road permits picture</CustomFormLabel>
                            <input type="file"/>
                        </Grid>
                        <Grid item xs={12} sm={12} lg={6} order={{ xs: 9, lg: 9 }}>
                            <CustomFormLabel>Car sale buy did copy picture</CustomFormLabel>
                            <input type="file"/>
                        </Grid>
                        <Grid item xs={12} sm={12} lg={6} order={{ xs: 10, lg: 10 }}>
                            <CustomFormLabel>Car extra 6 documents picture</CustomFormLabel>
                            <input type="file"/>
                        </Grid>
                        <Grid item xs={12} sm={12} lg={6} order={{ xs: 11, lg: 11 }}>
                            <CustomFormLabel>Car documents update</CustomFormLabel>
                            <input type="file"/>
                        </Grid>
                        <Grid item xs={12} sm={12} lg={6} order={{ xs: 12, lg: 12 }}>
                            <CustomFormLabel>Car owner picture</CustomFormLabel>
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
