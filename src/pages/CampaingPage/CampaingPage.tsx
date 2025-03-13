import { MainLayout } from '@/layouts'
import { CampaingTable } from './components/CampaingTable/CampaingTable'
import { useLocalStorage } from '@/hooks/useLocalStorage'
import { Button } from '@/components'
import { SizeMetrics, TypeMetrics } from '@/utils/metrics'
import './styles.css'
import { useState } from 'react'

export const CampaingPage = () => {
    const [campaings, setCampaings] = useLocalStorage('campaing', []);
    const [currentData, setCurrentData] = useState(campaings);

    const sortByName = () => {
        console.log(1);
        let temp = campaings.sort((a, b) => a.name.localeCompare(b.name));
        
        setCurrentData(() => [...temp]);
    }

    const sortByStartDate = () => {
        let temp = campaings;
        
        temp.sort((a: any, b: any) => {
            const dateA : Date = new Date(a.startDate);
            const dateB : Date = new Date(b.startDate);
            
            return dateA - dateB;
        });
        
        setCurrentData(() => [...temp]);
    }

    const sortByProfit = () => {
        let temp = campaings;
        
        temp.sort((a, b) => {
            const profitA = a.revenue - a.cost;
            const profitB = b.revenue - b.cost;
            return profitA - profitB;
        });

        console.log(temp)

        setCurrentData(() => [...temp]);
    }

    const deleteRow = (index : number) => {
        if(confirm('Do you want delete this element?')) {
            let temp = currentData;
            temp.splice(index, 1);

            setCampaings(temp);
            setCurrentData(() => [...temp]);
        }
    }

    return (
        <MainLayout>
            <div className='group-button-control'>
                <span>Sort:</span>
                <Button callback={sortByName} type={TypeMetrics.SECONDARY} size={SizeMetrics.SMALL}>
                    By Name
                </Button>
                <Button callback={sortByStartDate} type={TypeMetrics.SECONDARY} size={SizeMetrics.SMALL}>
                    By Start Date
                </Button>
                <Button callback={sortByProfit} type={TypeMetrics.SECONDARY} size={SizeMetrics.SMALL}>
                    By Profit
                </Button>
            </div>
            <CampaingTable campaings={currentData} deleteRow={deleteRow}/>
        </MainLayout>
    )
}