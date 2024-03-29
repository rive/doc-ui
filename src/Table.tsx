import { DetailedHTMLProps, HTMLAttributes } from 'react';
import './Table.css';

export function Table(
  props: DetailedHTMLProps<HTMLAttributes<HTMLTableElement>, HTMLTableElement>
) {
  return (
    <div className="rive-table">
      <table {...props} />
    </div>
  );
}
