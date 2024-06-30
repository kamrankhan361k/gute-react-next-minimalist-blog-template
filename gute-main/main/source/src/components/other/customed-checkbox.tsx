import { ThemeVariation } from '@common/enum';
import { renderThemeClass } from '@common/functions';
import classNames from 'classnames';
import React, { useEffect, useState } from 'react';

interface CustomedCheckboxProps {
  label: string;
  defaultValue?: boolean;
  value?: boolean;
  className?: string;
  theme?: ThemeVariation;
  shape?: 'round' | 'circle';
  onChange?: (p: boolean) => void;
}

const CustomedCheckbox = ({
  label,
  value,
  shape = 'round',
  defaultValue,
  className,
  theme,
  onChange,
}: CustomedCheckboxProps) => {
  const [checked, setChecked] = useState(defaultValue);

  useEffect(() => {
    setChecked(value);
  }, [value]);

  const r = Math.random().toString(36).substring(7);

  const renderShape = () => '-' + shape;

  return (
    <label
      htmlFor={'checkbox-' + r}
      className={classNames('checkbox-group customed', renderShape(), renderThemeClass(theme), className)}>
      {label}
      <input
        onChange={() => {
          if (!value) {
            setChecked(!checked);
          }
          onChange?.(!checked);
        }}
        type="checkbox"
        id={'checkbox-' + r}
        checked={checked}
      />
      <span className="checkmark" />
    </label>
  );
};

export default CustomedCheckbox;
