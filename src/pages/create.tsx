import React from 'react'
import TextField from '@mui/material/TextField'
import FormControl from '@mui/material/FormControl'
import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'
import Select from '@mui/material/Select'
import Button from '@mui/material/Button'
import { Container } from '@mui/material'
import { useForm } from '@refinedev/react-hook-form'
import { Controller } from 'react-hook-form'
import { HttpError } from '@refinedev/core'

interface IFormValue {
  firstname: string
  lastname: string
  address: string
  number: number
  work: string
  company: string
  role: string
}
const defaultValues = {
  firstname: '',
  lastname: '',
  address: '',
  number: 0,
  work: 'unemployed',
  company: '',
  role: '',
}

const Create: React.FC = () => {
  const {
    control,
    handleSubmit, 
    watch,
    formState: { errors },
  } = useForm<IFormValue, HttpError, IFormValue>({
    mode: 'onChange',
    defaultValues,
  })

  const handleSubmission = (data: IFormValue) => console.log(data)
  return (
    <Container maxWidth='md'>
      <form style={{ display: 'flex', flexDirection: 'column' }}>
        <Controller
          control={control}
          name='firstname'
          rules={{ required: true, minLength: 5 }}
          render={({ field }) => (
            <TextField
              {...field}
              error={errors.firstname ? true : false}
              fullWidth
              sx={{ maxWidth: 600 }}
              label='First Name'
              margin='dense'
              helperText={
                errors.firstname && 'You need to enter at least 5 characters!'
              }
            />
          )}
        />
        {/* {errors.firstname && (
          <span style={{ color: 'red' }}>
            You need to enter at least 5 characters!
          </span>
        )} */}
        <Controller
          control={control}
          name='lastname'
          render={({ field }) => (
            <TextField
              {...field}
              fullWidth
              sx={{ maxWidth: 600 }}
              label='Last Name'
              margin='dense'
            />
          )}
        />
        <Controller
          control={control}
          name='address'
          render={({ field }) => (
            <TextField
              {...field}
              fullWidth
              sx={{ maxWidth: 600 }}
              label='Address'
              margin='dense'
            />
          )}
        />
        <Controller
          control={control}
          name='number'
          render={({ field }) => (
            <TextField
              {...field}
              fullWidth
              sx={{ maxWidth: 600 }}
              label='Number'
              margin='dense'
              type='number'
            />
          )}
        />
        <FormControl sx={{ marginTop: 1, marginBottom: 0.7 }}>
          <InputLabel id='type-label'>Work</InputLabel>
          <Controller
            control={control}
            name='work'
            render={({ field }) => (
              <Select
                sx={{ maxWidth: 600 }}
                margin='dense'
                {...field}
                type='select'
                labelId='type-label'
                label='Work'
              >
                <MenuItem value='employed'>Employed</MenuItem>
                <MenuItem value='unemployed'>Unemployed</MenuItem>
              </Select>
            )}
          />
        </FormControl>
        <Controller
          control={control}
          name='company'
          render={({ field }) => (
            <TextField
              {...field}
              fullWidth
              sx={{ maxWidth: 600 }}
              label='Company'
              margin='dense'
            />
          )}
        />
        <Controller
          control={control}
          name='role'
          render={({ field }) => (
            <TextField
              {...field}
              fullWidth
              sx={{ maxWidth: 600 }}
              label='Role'
              margin='dense'
            />
          )}
        />
        <Button
          type='submit'
          variant='contained'
          fullWidth
          sx={{
            maxWidth: '600px',
            padding: '10px',
            backgroundColor: '#67BE23',
            color: 'white',
            marginTop: '5px',
          }}
        >
          Submit
        </Button>
      </form>
    </Container>
  )
}

export default Create
