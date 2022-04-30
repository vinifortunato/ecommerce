import { DefaultButtonProps } from './DefaultButton.types';
import * as Style from './DefaultButton.style';

const DefaultButton = ({ label, onClick, disabled = false }: DefaultButtonProps) => {
  return (
    <Style.Wrapper
      type="button"
      onClick={onClick}
      data-testid="default-button"
      disabled={disabled}
    >
      {label}
    </Style.Wrapper>
  );
};

export default DefaultButton;
