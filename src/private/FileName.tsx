import cn from 'classnames';
import './FileName.css';

export interface FileNameProps {
  filename: string | undefined;
  language: string | undefined;
}

export function FileName({ language, filename }: FileNameProps) {
  return (
    <span className="rive-file-name">
      {language && (
        <span className={cn('rive-file-name-icon', 'rive-file-name-icon-' + language)}>
          {language === 'bash' ? '> _' : language}
        </span>
      )}
      <span className="rive-file-name-text">{filename}</span>
    </span>
  );
}
