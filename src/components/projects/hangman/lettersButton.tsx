import React from 'react'

interface LettersButtonProps {
    letter?: string;
    onClick?: () => void;
}

const LettersButton: React.FC<LettersButtonProps> = ({onClick, letter}) => {
    const style = {
        background: "#2463FF",
        color: "white",
        borderRadius: "12px",
        fontSize: "40px",
        opacity: letter === '_' ? '.25' : '1',
        boxShadow: `inset 0px 6px 0px #3C74FF`,
      };

  return (
    <>
      <div
        style={{
          background: "#140E66",
          borderRadius: "12px",
          padding: "0 1px 2px 1px",
        }}
      >
        <button className="uppercase w-10 h-16" style={style} onClick={onClick}>
          {letter === '_' ? '' : letter}
        </button>
      </div>
    </>
  )
}

export default LettersButton
