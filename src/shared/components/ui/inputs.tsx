import { ChangeEvent, InputHTMLAttributes, useEffect, useRef, useState } from 'react';
import { cn } from '@/shared/libs/utils.ts';

type CurrencyInputProps = {
  currency?: string;
} & InputHTMLAttributes<HTMLInputElement>;

export const CurrencyInput = ({ type, className, currency, ...props }: CurrencyInputProps) => {
  const [value, setValue] = useState(props?.value || '');
  const inputRef = useRef<HTMLInputElement>(null);
  const [inputWidth, setInputWidth] = useState(0);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value.replace(/[^\d.]/g, '');
    setValue(newValue);
    props?.onChange?.(newValue);
  };

  const handleFocusInput = () => {
    inputRef.current?.focus();
  };

  useEffect(() => {
    if (inputRef.current) {
      const span = document.createElement('span');
      span.style.visibility = 'hidden';
      span.style.position = 'absolute';
      span.style.fontSize = '2.25rem';
      span.style.fontFamily = window.getComputedStyle(inputRef.current).fontFamily;
      span.innerText = value;
      document.body.appendChild(span);
      const width = span.offsetWidth;
      setInputWidth(width);
      document.body.removeChild(span);
    }
  }, [value]);

  return (
    <div
      onClick={handleFocusInput}
      className="border-border relative inline-flex w-full items-center border-b py-2"
    >
      <input
        ref={inputRef}
        type={type}
        {...props}
        value={value}
        onChange={handleChange}
        className={cn('w-full text-6xl focus:outline-none', className)}
        style={{ width: `${inputWidth + 10}px` }}
        aria-label="Currency amount"
      />
      {currency && <span className="text-blue text-4xl whitespace-nowrap">{currency}</span>}
    </div>
  );
};
