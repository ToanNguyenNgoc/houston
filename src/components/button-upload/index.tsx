import { ChangeEvent } from "react";
import { FaCamera } from "react-icons/fa"

interface ButtonUploadProps {
  multiple?: boolean;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void,
  className?: string,
  iconSize?: number,
  iconColor?: string
}

export const ButtonUpload = (props: ButtonUploadProps) => {
  const { multiple, onChange } = props;
  const change = (e: ChangeEvent<HTMLInputElement>) => onChange && onChange(e)
  return (
    <>
      <input
        onChange={change}
        type="file"
        accept="image/*"
        id="ip-media"
        hidden multiple={multiple}
      />
      <label style={{ cursor: 'pointer' }} className={props.className} htmlFor="ip-media">
        <FaCamera size={props.iconSize} color={props.iconColor} />
      </label>
    </>
  )
}