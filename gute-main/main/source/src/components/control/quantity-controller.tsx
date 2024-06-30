import useDebounce from '@common/hooks/useDebounce';
import React, { useEffect, useRef, useState } from 'react';
import GUButton from './gu-button';

interface QuantityControllerProps {
  defaultValue?: number;
  value?: number;
  onChange?: (val: number) => void;
}

const QuantityController = ({ defaultValue, onChange }: QuantityControllerProps) => {
  const isFirstRun = useRef(true);

  const [currentValue, setCurrentValue] = useState(defaultValue || 1);

  const debounceValue = useDebounce(currentValue, 200);

  useEffect(() => {
    if (isFirstRun.current) {
      isFirstRun.current = false;
      return;
    }
    onChange?.(debounceValue);
  }, [debounceValue]);

  return (
    <div className="quantity-controller">
      <GUButton variant="link" onClick={() => currentValue > 1 && setCurrentValue(currentValue - 1)}>
        -
      </GUButton>
      <input
        className="result"
        type="text"
        disabled
        value={currentValue || 1}
        onChange={(e) => {
          const value = Number(
            e.target.value
              .split('')
              .filter((item) => '0123456789'.includes(item))
              .join(''),
          );
          setCurrentValue(value);
          onChange?.(value);
        }}
      />
      <GUButton variant="link" onClick={() => setCurrentValue(currentValue + 1)}>
        +
      </GUButton>
    </div>
  );
};

export default QuantityController;
