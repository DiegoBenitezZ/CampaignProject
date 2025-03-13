import { MainLayout } from "@/layouts";
import { BarVerticalChar } from "./components";
import { useLocalStorage } from "@/hooks/useLocalStorage";

export const DashboardPage = () => {
    const [campaings] = useLocalStorage('campaing', []);
    const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'Agost', 'September', 'October', 'November', 'December'];
    const getDataByMonth = () => {
        let resultProfit = Array.from({ length: 12 }, () => 0);
        let resultClicks = Array.from({ length: 12 }, () => 0);

        campaings.map((campaing : any) => {
            let index = (new Date(campaing.startDate)).getMonth();

            resultProfit[index] += campaing.revenue - campaing.cost;
            resultClicks[index] += campaing.clicks;
        })

        return [resultProfit, resultClicks];
    }

    const [profitData, clicksData] = getDataByMonth();

    return (
        <MainLayout>
            <BarVerticalChar 
                labels={labels} 
                values={profitData} 
                title="Total Profits By Month"
                label="Profits"
            />
            <BarVerticalChar 
                labels={labels} 
                values={clicksData} 
                title="Total Clicks By Month"
                label="Clicks"
            />
        </MainLayout>
    );
}