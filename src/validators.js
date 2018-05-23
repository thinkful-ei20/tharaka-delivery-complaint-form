export const required = value => (value ? undefined : 'Required');
export const nonEmpty = value =>
    value.trim() !== '' ? undefined : 'Cannot be empty';

export const fiveChar = value => 
    value.trim().length === 5 ? undefined : 'The Tracking Number Must Be 5 Characters Long';


export const isNum = value => 
    value.match(/^-{0,1}\d+$/) ? undefined : 'Only Numbers Allowed'
    
