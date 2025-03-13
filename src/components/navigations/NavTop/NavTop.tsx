import { Button } from '@/components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { IconProp } from '@fortawesome/fontawesome-svg-core'
import { SizeMetrics, TypeMetrics } from '@/utils/metrics'
import './styles.css'
import { Link } from 'react-router-dom'

export const NavTop = () => {
    return (
        <nav id='nav-top'>
            <span className='greenting'>Hello! Everybody</span>
            <img src="/img/logo.webp" alt="" />
            <Link to="/campaing/create" >
                <Button type={TypeMetrics.LINK} size={SizeMetrics.MEDIUM}>
                    <FontAwesomeIcon icon={'fa-solid fa-circle-plus' as IconProp}/>
                    Add
                </Button>
            </Link>
        </nav>
    )
}