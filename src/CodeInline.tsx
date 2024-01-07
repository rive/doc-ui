import cn from 'classnames';
import './CodeInline.css';

export function CodeInline({
  className,
  ...props
}: React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>) {
  return <code className={cn('rive-code-inline', className)} {...props} />;
}
