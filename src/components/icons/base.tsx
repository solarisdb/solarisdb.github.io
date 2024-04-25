import type { MouseEvent, ReactElement, CSSProperties } from 'react';
import { forwardRef } from 'react';
import styled, { css } from 'styled-components';

type SvgBaseIconProps = {
  size?: number | string;
  viewBox?: string;
  style?: CSSProperties;
  color?: string;
  className?: string;
  onClick?: (event: MouseEvent<HTMLOrSVGElement>) => void;
  children?: ReactElement | ReactElement[];
  dataTest?: string;
};

export type SvgIconProps = Omit<SvgBaseIconProps, 'children' | 'viewBox'>;

const setSize = css<{ $size: SvgBaseIconProps['size'] }>`
  ${({ $size }) => {
    return typeof $size === 'number' ? `${$size}px` : $size;
  }};
`;

export const StyledSvg = styled.svg<{
  $size: SvgBaseIconProps['size'];
  $color: SvgBaseIconProps['color'];
}>`
  display: block;
  color: ${({ $color }) => $color};
  fill: currentColor;
  font-size: ${setSize};
  height: 1em;
`;

/**
 * SvgIcon component
 *
 * @param {SvgBaseIconProps} props
 * @param {number} [props.size] - Size of the icon
 * @param {string} [props.viewBox] - ViewBox of the icon
 * @param {CSSProperties} [props.style] - Css styles
 * @param {string} [props.className] - Classname
 * @param {JSX.Element} [props.children] - Children
 * @param {(event: MouseEvent<HTMLOrSVGElement>) => void} [props.onClick] - onClick event
 * @returns {JSX.Element}
 */

export const SvgBaseIcon = forwardRef<SVGSVGElement, SvgBaseIconProps>((props, ref) => {
  const {
    style,
    color = 'inherit',
    viewBox = '0 0 24 24',
    onClick,
    size = 24,
    className,
    children,
  } = props;

  return (
    <StyledSvg
      style={style}
      $color={color}
      viewBox={viewBox}
      className={className}
      onClick={onClick}
      $size={size}
      ref={ref}
    >
      {children}
    </StyledSvg>
  );
});

SvgBaseIcon.displayName = 'SvgBaseIcon';
