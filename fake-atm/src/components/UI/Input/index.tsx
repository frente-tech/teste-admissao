import { InputHTMLAttributes } from 'react';
import { IconBaseProps } from 'react-icons/lib';
import { Container, UIInput } from './styles';

interface IInputProps extends InputHTMLAttributes<HTMLInputElement> {
  icon?: React.ComponentType<IconBaseProps>;
}

const Input: React.FC<IInputProps> = ({ icon: Icon, ...rest }) => (
  <Container>
    {Icon && <Icon size={20} />}
    <UIInput {...rest} />
  </Container>
);

export default Input;
