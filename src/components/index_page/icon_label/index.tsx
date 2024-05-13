import { FC, ComponentType } from 'react';
import { SvgIconProps } from '../../icons/base';
import { IconContainer } from './styled';

export type IconLabelProps = {
  icon: ComponentType<SvgIconProps>;
  withBorder?: boolean;
  className?: string;
};
export const IconLabel: FC<IconLabelProps> = ({ icon: Icon, withBorder = true, className }) => {
  return (
    <IconContainer $withBorder={withBorder} className={className}>
      <Icon />
    </IconContainer>
  );
};
