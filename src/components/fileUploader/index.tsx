import React, { useRef } from 'react';
import { FileInfo, Widget } from '@uploadcare/react-widget';
import { Button } from '@mui/material';
import { FileUploaderProps } from './interface';

export const FileUploader: React.FunctionComponent<FileUploaderProps> = (props) => {
  // props for uploadcare/react-widget
  const {
    buttonText = 'Upload',
    maxFiles = 1,
    publicKey,
    onChange,
    onFileSelect,
    cp,
  } = props;
  const maxFileSize = 2 * 1024 * 1024;

  // creating reference of the widget so we can perform button click event using this reference
  const widgetApiRef = useRef<any>(null);

  const handleUploadButtonClick = () => {
    if (widgetApiRef.current) {
      widgetApiRef.current.openDialog();
    }
  };

  return (
    <>
      <Button onClick={handleUploadButtonClick} variant='contained'>
        {buttonText}
      </Button>
      <Widget
        publicKey={publicKey}
        onChange={onChange}
        ref={widgetApiRef}
        onFileSelect={onFileSelect}
        multiple
        tabs="file url gdrive dropbox onedrive"
        validators={[(fileInfo: FileInfo) => {
          // checking the file size, must be 20MB
          if (fileInfo.size! > maxFileSize) {
            throw new Error('File size exceeds the limit of 20MB');
          }
        }]}
        multipleMax={maxFiles}
        {...cp}
      />
    </>
  );
};
