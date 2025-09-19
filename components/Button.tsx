import Link from 'next/link';
import { cva, type VariantProps } from 'class-variance-authority';

const buttonVariants = cva(
  'inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary disabled:opacity-50 disabled:pointer-events-none',
  {
    variants: {
      variant: {
        default: 'bg-primary text-white hover:bg-primary/90',
        outline: 'border border-primary bg-transparent text-primary hover:bg-primary hover:text-white',
        ghost: 'hover:bg-primary/10',
      },
      size: {
        default: 'h-10 py-2 px-4',
        lg: 'h-12 py-3 px-6',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  }
);

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof buttonVariants> {
  href?: string;
}

const Button = ({ className, variant, size, href, ...props }: ButtonProps) => {
  if (href) {
    return (
      <Link href={href} className={buttonVariants({ variant, size, className })}>
        {props.children}
      </Link>
    );
  }

  return (
    <button className={buttonVariants({ variant, size, className })} {...props} />
  );
};

export { Button, buttonVariants };
