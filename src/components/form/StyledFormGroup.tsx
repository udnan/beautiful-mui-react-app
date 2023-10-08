import {styled} from '@mui/material/styles';
import FormGroup from '@mui/material/FormGroup';

const StyledFormGroup = styled(FormGroup, {
  name: 'StyledFormGroup',
  slot: 'Wrapper',
  skipSx: true
})(
  (props) => ({
    padding: props.theme.spacing(2),
    justifyContent: 'space-between'
  })
)

export default StyledFormGroup;
