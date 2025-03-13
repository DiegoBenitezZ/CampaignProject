import { Table } from '@/components'
import './styles.css'
import { useEffect, useState } from 'react';

const pageJump = 10;

interface Props {
    campaings: Array<JSON>;
    deleteRow: (index : number) => void;
}


export const CampaingTable = ({campaings, deleteRow} : Props) => {
    const [index, setIndex] = useState(0);
    const [currentData, setCurrentData] = useState(campaings);
    let jump = index + pageJump;
    const amountCampaings = currentData.length;
    const splice_campaings = (amountCampaings > 0) ? currentData.slice(index, jump) : [];

    useEffect(() => {
        setCurrentData(campaings);
    }, [campaings]);

    const nexPage = () => {
        if(jump < amountCampaings) {
            setIndex((prev) => prev = jump)
        }
    }

    const backPage = () => {
        let jump = index - pageJump;
        
        if(jump >= 0){
            setIndex((prev) => prev = jump)
        }
    }

    return (
        <Table 
            page={index} 
            maxPage={amountCampaings}
            nextPage={nexPage}
            backPage={backPage}
        >
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Start Date</th>
                    <th>End Date</th>
                    <th>Clicks</th>
                    <th>Cost</th>
                    <th>Revenue</th>
                    <th>Profit</th>
                </tr>
            </thead>
            <tbody>
                {
                    splice_campaings.map((row : any, index: number) => {
                        return (
                            <tr onClick={() => deleteRow(index)} key={index}>
                                <td>{row.name}</td>
                                <td>{new Date(row.startDate).toLocaleDateString("en-US")}</td>
                                <td>{new Date(row.endDate).toLocaleDateString("en-US")}</td>
                                <td>{row.clicks}</td>
                                <td>{row.cost}</td>
                                <td>{row.revenue}</td>
                                <td>{row.revenue - row.cost}</td>
                            </tr>
                        )
                    })
                }
            </tbody>
        </Table>
    )
}