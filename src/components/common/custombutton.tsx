import React, { memo, ReactNode } from 'react'

interface CustomButtonProps {
  children: ReactNode
  addedClass?: string
  handler: () => void
  disabled?: boolean
}

const CustomButton = memo<CustomButtonProps>(({ children, addedClass, handler, disabled }) => (
  <button
    className={`gpna-custom-button${addedClass ? ` ${addedClass}` : ''}`}
    onClick={handler}
    disabled={disabled}
  >
    {children}
  </button>
))

CustomButton.displayName = 'CustomButton'
export default CustomButton
