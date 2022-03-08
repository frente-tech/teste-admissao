import { FormikValues } from 'formik';
import { IconBaseProps } from 'react-icons/lib';

export interface IFieldProps {
  name: string;
  type?: string;
  icon?: React.ComponentType<IconBaseProps>;
}

export interface IGenericFormProps {
  initialValues: FormikValues;
  validationSchema: object;
  onSubmit: () => void;
  submitButtonText: string;
  label: string;
  fields: IFieldProps[];
}

export interface ISignInFormData {
  email: string;
  password: string;
}
