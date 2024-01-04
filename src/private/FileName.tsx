import cn from 'classnames';
import './FileName.css';

export interface FileNameProps {
  filename: string | undefined;
  language: string | undefined;
}

export function FileName({ language, filename }: FileNameProps) {
  return (
    <span className="rrdu-file-name">
      {language && (
        <span className={cn('rrdu-file-name-icon', 'rrdu-file-name-icon-' + language)}>
          {language === 'bash' ? '> _' : language}
        </span>
      )}
      <span className="rrdu-file-name-text">{filename}</span>
    </span>
  );
}
