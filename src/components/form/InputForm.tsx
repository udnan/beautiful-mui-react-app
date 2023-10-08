import React, {useState, useEffect} from 'react';
import dayjs, {Dayjs} from 'dayjs';
import {
  Alert,
  AlertTitle,
  Button,
  Dialog,
  FormControl,
  FormControlLabel,
  FormGroup,
  FormLabel,
  Paper,
  Radio,
  RadioGroup,
  SelectChangeEvent,
  Stack
} from "@mui/material";
import BeautifulAutoComplete from './BeautifulAutoComplete';
import BeautifulSelect from './BeautifulSelect';
import BeautifulTextField from './BeautifulTextField';
import {DesktopDatePicker, LocalizationProvider} from '@mui/x-date-pickers';
import {AdapterDayjs} from "@mui/x-date-pickers/AdapterDayjs";
import {Contact, contactData, date, setContactData} from "../../data/contactData";
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import StyledFormGroup from "./StyledFormGroup";

export const minWidth: number = 300;
const paperInputsStyle = {
  '& .MuiOutlinedInput-root': {
    '& > fieldset': {
      border: '1px solid',
      borderColor: 'primary.main',
    },
    '&:hover': {
      '& > fieldset': {
        borderColor: 'primary.light',
      }
    }
  },
  '& .MuiFormLabel-root': {
    color: 'primary.main',
  }
};

const InputForm = () => {
  const getDefaultValues = () => {
    return {id: contactData.length + 1, name: "", skills: [], role: "", startDate: date, preference: "Office"};
  };

  const [successAlertOpen, setSuccessAlertOpen] = useState<boolean>(false);
  const [formValues, setFormValues] = useState<Contact>(getDefaultValues());
  const [submitting, setSubmitting] = useState<boolean>(false);

  useEffect(() => {
    if (submitting) {
      setContactData(formValues)
        .then((data: Contact) => {
          setFormValues(getDefaultValues());
          setSubmitting(false);
          setSuccessAlertOpen(true);
        })
        .catch((error: Error) => {
          setSubmitting(false);
          console.error(error.message)
        });
    }
  }, [submitting]);

  const handleNameChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): void => {
    const {name, value} = event?.target;
    setFormValues({...formValues, [name]: value});
  };

  const handleSkillsChange = (event: React.SyntheticEvent<Element, Event>, value: Array<string>): void => {
    setFormValues({...formValues, skills: [...value]});
  };

  const handleRoleChange = (event: SelectChangeEvent<string>, child: React.ReactNode): void => {
    const {value} = event?.target;
    setFormValues({...formValues, role: value});
  };

  const handleDateChange = (date: Dayjs | null): void => {
    setFormValues({...formValues, startDate: date});
  }

  const handlePreferenceChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    const {name, value} = event?.target;
    setFormValues({...formValues, [name]: value});
  }

  const handleSubmit = (event: React.MouseEvent<Element, MouseEvent>): void => {
    setSubmitting(true);
  };

  const handleClear = (event: React.MouseEvent<Element, MouseEvent>): void => {
    setFormValues(getDefaultValues());
  };

  const handleSuccessAlertClose = (event: React.MouseEvent<HTMLButtonElement>): void => {
    setSuccessAlertOpen(false);
  };

  // console.log(formValues)
  return (
    <>
      <Paper sx={paperInputsStyle}>
        <form>
          <FormControl>
            <StyledFormGroup row>
              <BeautifulTextField
                value={formValues.name}
                onChange={handleNameChange}
              />
              <BeautifulAutoComplete
                value={formValues.skills}
                onChange={handleSkillsChange}
              />
            </StyledFormGroup>
            <StyledFormGroup row>
              <BeautifulSelect
                value={formValues.role}
                onChange={handleRoleChange}
              />
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DesktopDatePicker
                  label='Date'
                  value={dayjs(formValues.startDate)}
                  onChange={handleDateChange}
                  views={['day']}
                  components={{ OpenPickerIcon: CalendarTodayIcon }}
                  // InputProps={{}}
                  // PopperProps={{}}
                />
              </LocalizationProvider>
            </StyledFormGroup>
            <StyledFormGroup row>
              <FormGroup
                sx={{
                  minWidth: minWidth,
                  marginRight: 2
                }}
              >
                <FormLabel component='legend'>
                  Work Preference
                </FormLabel>
                <RadioGroup
                  id='preference-type-radio'
                  name='preference'
                  value={formValues.preference}
                  onChange={handlePreferenceChange}
                >
                  <FormControlLabel control={<Radio/>} label='Home' value='Home'/>
                  <FormControlLabel control={<Radio/>} label='Hybrid' value='Hybrid'/>
                  <FormControlLabel control={<Radio/>} label='Office' value='Office'/>
                </RadioGroup>
              </FormGroup>
              <Stack>
                <Button disabled={submitting} onClick={handleSubmit}>SUBMIT</Button>
                <Button onClick={handleClear}>CLEAR</Button>
              </Stack>
            </StyledFormGroup>
          </FormControl>
        </form>
      </Paper>
      <Dialog open={successAlertOpen} onClose={handleSuccessAlertClose}>
        <Alert>
          <AlertTitle>Success!</AlertTitle>
        </Alert>
      </Dialog>
    </>
  );
};

export default InputForm;
