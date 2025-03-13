import {SubmitHandler, useForm} from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { InputForm } from '@/components'
import { schema, FormValues } from '@/models/form.model'
import { useLocalStorage } from '@/hooks/useLocalStorage'
import './styles.css'
import { useNavigate } from 'react-router-dom'

export const CampaingForm = () => {
    let navigate = useNavigate();
    const [campaing, setCampaing] = useLocalStorage('campaing', []);
    const {control, handleSubmit, formState: {errors}} = useForm<FormValues>({
        resolver: zodResolver(schema)
    });

    console.log(campaing);

    const onSubmit: SubmitHandler<FormValues> = (data) => {
        setCampaing([...campaing, data]);
        alert('The campaign was created successfully');
        navigate(-1);
    }

    return (
        <form id='campaing-form' className='campaing-form' onSubmit={handleSubmit(onSubmit)}>
            <h1 className='form-title'>Create a Campaing</h1><br/>
            <InputForm placeholder='Enter the campaign name' name='name' control={control} label="Name" type="text" error={errors.name}/>
            <InputForm name='startDate' control={control} label="Start Date" type="date" error={errors.startDate}/>
            <InputForm name='endDate' control={control} label="End Date" type="date" error={errors.endDate}/>
            <InputForm placeholder='Enter the campaing cost' name='cost' control={control} label="Cost" type="number" error={errors.cost}/>
            <InputForm placeholder='Enter the campaing revenue' name='revenue' control={control} label="Revenue" type="number" error={errors.revenue}/>
            <button type='submit'>Submit</button>
        </form>
    )
}