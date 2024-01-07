import { RiMacbookLine, RiSmartphoneLine, RiTabletLine } from '@remixicon/react';
import cn from 'classnames';
import { CSSProperties, useMemo, useState } from 'react';
import { LiveEditor, LiveError, LivePreview, LiveProvider } from 'react-live';
import './DemoBlock.css';
import { CopyButton } from './private/CopyButton';
import { FileName } from './private/FileName';
import { Spacer } from './private/Spacer';
import { Toolbar } from './private/Toobar';
import { ToolButton } from './private/ToolButton';
import { ToolSelect } from './private/ToolSelect';

export interface DemoBlockProps {
  device?: 'laptop' | 'tablet' | 'mobile' | 'responsive';
  language?: 'jsx' | 'tsx';
  filename?: string | undefined;
  code: string;
  disablePadding?: boolean;
  className?: string;
  style?: CSSProperties;
}

export function DemoBlock({
  code,
  filename,
  language = 'jsx',
  device = 'responsive',
  disablePadding,
  className,
  style,
}: DemoBlockProps) {
  const deviceList = useMemo(
    () => [
      { value: 'mobile', label: 'Mobile', icon: <RiSmartphoneLine /> },
      { value: 'tablet', label: 'Tablet', icon: <RiTabletLine /> },
      { value: 'laptop', label: 'Laptop', icon: <RiMacbookLine /> },
    ],
    []
  );

  const [selectedDevice, setSelectedDevice] = useState<string>(
    device === 'responsive' ? 'laptop' : device
  );

  const selectedDeviceObj = useMemo(
    () => deviceList.find((item) => item.value === selectedDevice),
    [selectedDevice, deviceList]
  );

  return (
    <div
      className={cn('rive-demo-block', 'rive-demo-block-' + selectedDevice, className)}
      style={style}
    >
      <Toolbar>
        <FileName language={language} filename={filename} />
        <Spacer />
        {device === 'responsive' ? (
          <ToolSelect value={selectedDevice} onChange={setSelectedDevice} options={deviceList} />
        ) : (
          <ToolButton icon={selectedDeviceObj?.icon}>{selectedDeviceObj?.label}</ToolButton>
        )}
        <CopyButton code={code} />
      </Toolbar>
      <LiveProvider
        code={code}
        // disable the built-in theme of react-prism-renderer
        theme={{ plain: {}, styles: [] }}
        enableTypeScript={language === 'tsx'}
      >
        <div className="rive-demo-block-main">
          <LivePreview
            className={cn(
              'rive-demo-block-preview',
              disablePadding && 'rive-demo-block-preview-disable-padding'
            )}
          />
          <div className="rive-demo-block-develop">
            <LiveError className="rive-demo-block-error" />
            <LiveEditor className="rive-demo-block-editor" />
          </div>
        </div>
      </LiveProvider>
    </div>
  );
}
