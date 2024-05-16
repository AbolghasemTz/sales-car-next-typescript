import { CustomVuttonProps } from '@/types'
import React from 'react'

function CoustomButton({ title, containerStyle, handleClick,btnType }: CustomVuttonProps) {
    return (
        <button
            disabled={false}
            type={btnType}
            className={`custom-btn ${containerStyle}`}
            onClick={handleClick}
        >
            <span className={`flex-1`}>
                {title}
            </span>
        </button>
    )
}

export default CoustomButton
