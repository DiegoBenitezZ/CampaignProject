import { ReactNode } from 'react'
import './styles.css'
import { Button } from '@/components';
import { SizeMetrics, TypeMetrics } from '@/utils/metrics';

interface Props {
    children: ReactNode,
    page: number,
    maxPage: number,
    nextPage: () => void,
    backPage: () => void,
}

export const Table = ({children, page, maxPage, nextPage, backPage} : Props) => {
    return (
        <>
            <table className='primary-table'>
                {children}
            </table>
            <div className='control-table'>
                <div className='pagination-info'>
                    Página {page} de {maxPage}
                </div>
                <Button callback={backPage} type={TypeMetrics.PRIMARY} size={ SizeMetrics.MEDIUM}>
                    Back
                </Button>
                <Button callback={nextPage} type={TypeMetrics.PRIMARY} size={ SizeMetrics.MEDIUM}>
                    Next
                </Button>
            </div>
        </>
    )
} 