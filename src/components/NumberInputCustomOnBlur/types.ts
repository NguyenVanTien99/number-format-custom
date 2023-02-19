export type NumberInputCustomProps = Omit<
  React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  >,
  "ref"
> & {
  name?: string;

  type?: string;

  className?: string;

  placeholder?: string;

  onKeyPress?: (event: React.KeyboardEvent) => void;

  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;

  onClick?: (event: React.ChangeEvent<HTMLInputElement>) => void;

  ariaLabel?: string;

  reference?:
    | string
    | ((instance: HTMLInputElement | null) => void)
    | React.RefObject<HTMLInputElement>
    | null
    | undefined;

  readonly?: boolean;

  defaultValue?: string;

  errors?: Record<string, string | undefined>;

  value?: string;

  hidden?: boolean;

  classNameContainer?: string;

  isDisplayErrorInline?: boolean;

  onKeyDown?: (event: React.KeyboardEvent) => void;

  isErrors?: boolean;

  isAllowed?: boolean;

  decimalSeparator?: number;
};
