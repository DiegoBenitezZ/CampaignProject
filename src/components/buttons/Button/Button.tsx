import { ReactNode } from 'react'
import './styles.css'
import { SizeMetrics, TypeMetrics } from '@/utils/metrics'

interface Props {
    children: ReactNode,
    type: String,
    size: String,
    callback?: () => void,
}

export const Button = ({children, type, size, callback} : Props) => {
    let buttonTypeClass = (type) ? `button-${type}` : 'button-primary'
    let buttonSizeClass = (size) ? `button-${size}` : 'button-primary'
    
    return (
        <button 
            onClick={callback}
            className={`button ${buttonTypeClass} ${buttonSizeClass}`}
        >
            {children}
        </button>
    )
}