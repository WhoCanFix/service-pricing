import { cva } from 'class-variance-authority';
import classNames from 'classnames';
import { InputHTMLAttributes, forwardRef } from 'react';

type ExcludedTypes = 'size';

interface Props
  extends Omit<InputHTMLAttributes<HTMLInputElement>, ExcludedTypes> {
  size: 'sm' | 'md' | 'lg' | 'xl';
  countryPrefix?: string;
  behaviour: 'hug' | 'fill';
  label?: string;
  assistiveText?: string;
  readOnly?: boolean;
  inputClassName?: string;
  countryPrefixClassName?: string;
}

/**
 * Allows user to enter a vehicle registration number.
 */
export const RegistrationInput = forwardRef<HTMLInputElement, Props>(
  (
    {
      size,
      countryPrefix,
      behaviour,
      label,
      assistiveText,
      className,
      inputClassName,
      countryPrefixClassName,
      ...props
    },
    ref
  ) => {
    const inputVariants = cva('', {
      compoundVariants: [],
      variants: {
        size: {
          sm: 'px-3 py-2',
          md: 'p-3',
          lg: 'p-4',
          xl: 'py-5 px-4',
        },
        behaviour: {
          hug: 'w-auto',
          fill: 'w-full',
        },
      },
    });

    const inputWrapperVariants = cva('relative h-full', {
      variants: {
        behaviour: {
          hug: 'w-auto',
          fill: 'w-full',
        },
      },
    });

    const labelVariants = cva('', {
      compoundVariants: [],
      variants: {
        size: {
          sm: 'label-100 pb-0.5',
          md: 'label-200 pb-1',
          lg: 'label-300 pb-2',
          xl: 'label-400 pb-3',
        },
      },
    });

    const assistiveTextVariants = cva('', {
      compoundVariants: [],
      variants: {
        size: {
          sm: 'body-100 pt-0.5',
          md: 'body-200 pt-1',
          lg: 'body-300 pt-2',
          xl: 'body-400 pt-3',
        },
      },
    });

    return (
      <div className="flex flex-col font-registration">
        {label && (
          <div
            className={classNames(labelVariants({ size }), 'text-ink-contrast')}
          >
            {label}
          </div>
        )}

        <div
          className={classNames(
            className
          )}
        >
          <div className={inputWrapperVariants({ behaviour })}>
            <input
              className={classNames(
                {
                  'pointer-events-none': props.readOnly,
                },
                inputVariants({ size, behaviour }),
                'border-100 border-interactive-reg-400 bg-interactive-reg-300 rounded-default h-full pr-6 uppercase',
                {
                  'border-l-none !rounded-l-none': countryPrefix,
                  '!bg-interactive-disabled-100 !border-interactive-disabled-200 !text-ink-nonEssential':
                    props.readOnly || props.disabled,
                },
                inputClassName
              )}
              ref={ref}
              {...props}
            />
          </div>
        </div>

        {assistiveText && (
          <div
            className={classNames(
              assistiveTextVariants({ size }),
              'text-ink-nonEssential'
            )}
          >
            {assistiveText}
          </div>
        )}
      </div>
    );
  }
);
