import { FileUpload, FilesUpload, FileInfo } from '@uploadcare/react-widget';
/**
 * FileUploader properties
 */
export interface FileUploaderProps {
  /** text for the button component */
  buttonText: string;
  /** public key for our uploadcare/react-widget */
  publicKey: string;
  /** maximum files to upload in a signle time */
  maxFiles?: number;
  /** function to perform some task on file change */
  onChange?: (_arg1?: FileInfo) => void;
  /** function to perform some task on file select, most commonly making a commit */
  onFileSelect: (_arg1?: FileUpload | FilesUpload | null) => void;
  /** allows us to add custom props */
  cp?: {};
}
