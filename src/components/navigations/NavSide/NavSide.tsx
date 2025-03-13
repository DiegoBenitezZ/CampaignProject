import { Button } from '@/components/buttons/Button/Button';
import { SizeMetrics, TypeMetrics } from '@/utils/metrics';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import './styles.css';
import { Link } from 'react-router-dom';

export const NavSide = () => {
    return (
        <nav id="nav-side">
            <Link to="/">
                <Button type={ TypeMetrics.NAVIGATION } size={ SizeMetrics.EXTRA_LARGE }>
                    <FontAwesomeIcon icon={'fa-solid fa-chart-line' as IconProp}/>
                    <span>Dashboard</span>
                </Button>
            </Link>
            <Link to="/campaing">
                <Button type={ TypeMetrics.NAVIGATION } size={ SizeMetrics.EXTRA_LARGE }>
                    <FontAwesomeIcon icon={'fa-solid fa-rectangle-ad' as IconProp}/>
                    <span>Campaings</span>
                </Button>
            </Link>
            <Link to="/campaing/create">
                <Button type={ TypeMetrics.NAVIGATION } size={ SizeMetrics.EXTRA_LARGE }>
                    <FontAwesomeIcon icon={'fa-solid fa-circle-plus' as IconProp}/>
                    <span>Add Campaigns</span>
                </Button>
            </Link>
        </nav>
    )
}