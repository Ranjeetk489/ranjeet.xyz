import React from 'react'

interface KeyboardButtonProps {
    letter: string;
    onClick?: () => void;
    disabled?: boolean;
}

const KeyboardButton: React.FC<KeyboardButtonProps> = ({letter, disabled}) => {
    const style = {
        background: 'white',
        opacity: disabled ? '.25' : '1'
    }
  return (
    <div className='text-dark-navy flex justify-center items-center rounded-lg uppercase text-2xl w-7 h-14' style={style}>
      {letter}
    </div>
  )
}

export default KeyboardButton
