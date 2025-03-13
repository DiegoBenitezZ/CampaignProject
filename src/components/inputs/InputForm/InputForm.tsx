import { Control, Controller, FieldError } from 'react-hook-form'

interface Props {
    name: string,
    control: Control<any>;
    label: string,
    placeholder?: string,
    type?: string,
    error?: FieldError;
}

export const InputForm = ({ name, control, label, type, error, placeholder } : Props) => {
    return (
        <div className='form-group'>
            <label htmlFor={name}>{label}</label>
            <Controller
                name={name}
                control={control}
                render={({field}) =>
                    <input id={name} placeholder={placeholder} type={type} {...field} className={`form-control ${error ? "is-invalid" : ""}`} />
                }
            />
            {error && <p className='error'>{error.message}</p>}
        </div>
    )
}