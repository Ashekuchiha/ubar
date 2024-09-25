import React from 'react'
import PageContainer from 'src/components/container/PageContainer'
import ParentCard from 'src/components/shared/ParentCard'
import Breadcrumb from 'src/layouts/full/shared/breadcrumb/Breadcrumb'

import { useFormik } from 'formik';
import * as yup from 'yup';
import { Button, Grid } from '@mui/material';
import CustomFormLabel from 'src/components/forms/theme-elements/CustomFormLabel';
import CustomTextField from 'src/components/forms/theme-elements/CustomTextField';

const validationSchema = yup.object();

export default function Form() {

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
                            <CustomFormLabel>Car Model Name</CustomFormLabel>
                            <CustomTextField
                                fullWidth
                                id="cmname"
                                name="cmname"
                                value={formik.values.cmname}
                                onChange={formik.handleChange}
                                error={formik.touched.cmname && Boolean(formik.errors.cmname)}
                                helperText={formik.touched.cmname && formik.errors.cmname}
                            />
                        </Grid>
                        <Grid item xs={12} sm={12} lg={6} order={{ xs: 2, lg: 2 }}>
                            <CustomFormLabel>Car Number</CustomFormLabel>
                            <CustomTextField
                                fullWidth
                                id="cnumber"
                                name="cnumber"
                                value={formik.values.cnumber}
                                onChange={formik.handleChange}
                                error={formik.touched.cnumber && Boolean(formik.errors.cnumber)}
                                helperText={formik.touched.cnumber && formik.errors.cnumber}
                            />
                        </Grid>
                        <Grid item xs={12} sm={12} lg={6} order={{ xs: 3, lg: 3 }}>
                            <CustomFormLabel>Car Model Year</CustomFormLabel>
                            <CustomTextField
                                fullWidth
                                id="cmyear"
                                name="cmyear"
                                value={formik.values.cmyear}
                                onChange={formik.handleChange}
                                error={formik.touched.cmyear && Boolean(formik.errors.cmyear)}
                                helperText={formik.touched.cmyear && formik.errors.cmyear}
                            />
                        </Grid>
                        <Grid item xs={12} sm={12} lg={6} order={{ xs: 4, lg: 4 }}>
                            <CustomFormLabel>Car Registration Year</CustomFormLabel>
                            <CustomTextField
                                fullWidth
                                id="cryear"
                                name="cryear"
                                value={formik.values.cryear}
                                onChange={formik.handleChange}
                                error={formik.touched.cryear && Boolean(formik.errors.cryear)}
                                helperText={formik.touched.cryear && formik.errors.cryear}
                            />
                        </Grid>
                        <Grid item xs={12} sm={12} lg={6} order={{ xs: 5, lg: 5 }}>
                            <CustomFormLabel>Car Engine Number</CustomFormLabel>
                            <CustomTextField
                                fullWidth
                                id="carenumber"
                                name="carenumber"
                                value={formik.values.carenumber}
                                onChange={formik.handleChange}
                                error={formik.touched.carenumber && Boolean(formik.errors.carenumber)}
                                helperText={formik.touched.carenumber && formik.errors.carenumber}
                            />
                        </Grid>
                        <Grid item xs={12} sm={12} lg={6} order={{ xs: 6, lg: 6 }}>
                            <CustomFormLabel>Car Color</CustomFormLabel>

                        </Grid>
                        <Grid item xs={12} sm={12} lg={6} order={{ xs: 7, lg: 7 }}>
                            <CustomFormLabel>Car C.C number</CustomFormLabel>
                            <CustomTextField
                                fullWidth
                                id="carccnumber"
                                name="carccnumber"
                                value={formik.values.carccnumber}
                                onChange={formik.handleChange}
                                error={formik.touched.carccnumber && Boolean(formik.errors.carccnumber)}
                                helperText={formik.touched.carccnumber && formik.errors.carccnumber}
                            />
                        </Grid>
                        <Grid item xs={12} sm={12} lg={6} order={{ xs: 8, lg: 8 }}>
                            <CustomFormLabel>Car Blue Book Number</CustomFormLabel>
                            <CustomTextField
                                fullWidth
                                id="cbbnumber"
                                name="cbbnumber"
                                value={formik.values.cbbnumber}
                                onChange={formik.handleChange}
                                error={formik.touched.cbbnumber && Boolean(formik.errors.cbbnumber)}
                                helperText={formik.touched.cbbnumber && formik.errors.cbbnumber}
                            />
                        </Grid>
                        <Grid item xs={12} sm={12} lg={6} order={{xs: 9, lg: 9}}>            
                            <CustomFormLabel>Car Sets</CustomFormLabel>
                            <CustomTextField
                                fullWidth
                                id="carsets"
                                name="carsets"
                                value={formik.values.carsets}
                                onChange={formik.handleChange}
                                error={formik.touched.carsets && Boolean(formik.errors.carsets)}
                                helperText={formik.touched.carsets && formik.errors.carsets}
                            />
                        </Grid>
                        <Grid item xs={12} sm={12} lg={6} order={{xs: 10, lg: 10}}>
                        <CustomFormLabel>Car Tax Token Number</CustomFormLabel>
                            <CustomTextField
                                fullWidth
                                id="cttbumber"
                                name="cttbumber"
                                value={formik.values.cttbumber}
                                onChange={formik.handleChange}
                                error={formik.touched.cttbumber && Boolean(formik.errors.cttbumber)}
                                helperText={formik.touched.cttbumber && formik.errors.cttbumber}
                            />
                        </Grid>
                        <Grid item xs={12} sm={12} lg={6} order={{xs: 11, lg: 11}}>
                        <CustomFormLabel>Car Fitness Number</CustomFormLabel>
                        <CustomTextField
                                fullWidth
                                id="carfitnumber"
                                name="carfitnumber"
                                value={formik.values.carfitnumber}
                                onChange={formik.handleChange}
                                error={formik.touched.carfitnumber && Boolean(formik.errors.carfitnumber)}
                                helperText={formik.touched.carfitnumber && formik.errors.carfitnumber}
                            />
                        </Grid>
                        <Grid item xs={12} sm={12} lg={6} order={{xs: 12, lg: 12}}>
                        <CustomFormLabel>Car Rut Permits Number</CustomFormLabel>
                        <CustomTextField
                                fullWidth
                                id="crpnumber"
                                name="crpnumber"
                                value={formik.values.crpnumber}
                                onChange={formik.handleChange}
                                error={formik.touched.crpnumber && Boolean(formik.errors.crpnumber)}
                                helperText={formik.touched.crpnumber && formik.errors.crpnumber}
                            />
                        </Grid>
                        <Grid item xs={12} sm={12} lg={6} order={{xs: 13, lg: 13}}>
                        <CustomFormLabel>Car Chassiize number</CustomFormLabel>
                        <CustomTextField
                                fullWidth
                                id="cchanumber"
                                name="cchanumber"
                                value={formik.values.cchanumber}
                                onChange={formik.handleChange}
                                error={formik.touched.cchanumber && Boolean(formik.errors.cchanumber)}
                                helperText={formik.touched.cchanumber && formik.errors.cchanumber}
                            />
                        </Grid>
                        <Grid item xs={12} sm={12} lg={6} order={{xs: 14, lg: 14}}>
                        <CustomFormLabel>Car Owner Name</CustomFormLabel>
                        <CustomTextField
                                fullWidth
                                id="caroname"
                                name="caroname"
                                value={formik.values.caroname}
                                onChange={formik.handleChange}
                                error={formik.touched.caroname && Boolean(formik.errors.caroname)}
                                helperText={formik.touched.caroname && formik.errors.caroname}
                            />
                        </Grid>
                        <Grid item xs={12} sm={12} lg={6} order={{xs: 15, lg: 15}}>
                        <CustomFormLabel>Car Owner Mobille</CustomFormLabel>
                        <CustomTextField
                                fullWidth
                                id="comobile"
                                name="comobile"
                                value={formik.values.comobile}
                                onChange={formik.handleChange}
                                error={formik.touched.comobile && Boolean(formik.errors.comobile)}
                                helperText={formik.touched.comobile && formik.errors.comobile}
                            />
                        </Grid>
                        <Grid item xs={12} sm={12} lg={6} order={{xs: 16, lg: 16}}>
                        <CustomFormLabel>Car Owner NID Number</CustomFormLabel>
                        <CustomTextField
                                fullWidth
                                id="connumber"
                                name="connumber"
                                value={formik.values.connumber}
                                onChange={formik.handleChange}
                                error={formik.touched.connumber && Boolean(formik.errors.connumber)}
                                helperText={formik.touched.connumber && formik.errors.connumber}
                            />
                        </Grid>
                        <Grid item xs={12} sm={12} lg={6} order={{xs: 17, lg: 17}}>
                        <CustomFormLabel>Car Owner Bank Name</CustomFormLabel>
                        <CustomTextField
                                fullWidth
                                id="cobankname"
                                name="cobankname"
                                value={formik.values.cobankname}
                                onChange={formik.handleChange}
                                error={formik.touched.cobankname && Boolean(formik.errors.cobankname)}
                                helperText={formik.touched.cobankname && formik.errors.cobankname}
                            />
                        </Grid>
                        <Grid item xs={12} sm={12} lg={6} order={{xs: 18, lg: 18}}>
                        <CustomFormLabel>Car Owner Bank  Account</CustomFormLabel>
                        <CustomTextField
                                fullWidth
                                id="cobacc"
                                name="cobacc"
                                value={formik.values.cobacc}
                                onChange={formik.handleChange}
                                error={formik.touched.cobacc && Boolean(formik.errors.cobacc)}
                                helperText={formik.touched.cobacc && formik.errors.cobacc}
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
