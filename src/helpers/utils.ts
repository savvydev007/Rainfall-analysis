export const datetime2str = (date : Date | string | number | undefined) : string =>  {
    if(date === undefined) return '';
    const cTime = new Date(date)
    
    return cTime.getFullYear() + "-" + 
            ("0" + (cTime.getMonth() + 1)).slice(-2) + "-" + 
            ("0" + cTime.getDate()).slice(-2) + " " + 
            ("0" + cTime.getHours()).slice(-2) + "-" + 
            ("0" + cTime.getMinutes()).slice(-2) + "-" + 
            ("0" + cTime.getSeconds()).slice(-2)
}

export const date2str = (date : Date | string | number | undefined) : string =>  {
    if(date === undefined) return '';
    const cTime = new Date(date)
    
    return cTime.getFullYear() + "-" + 
            ("0" + (cTime.getMonth() + 1)).slice(-2) + "-" + 
            ("0" + cTime.getDate()).slice(-2)
}

export const time2str = (date : Date | string | number | undefined) : string =>  {
    if(date === undefined) return '';
    const cTime = new Date(date)
    
    return ("0" + cTime.getHours()).slice(-2) + "-" + 
            ("0" + cTime.getMinutes()).slice(-2) + "-" + 
            ("0" + cTime.getSeconds()).slice(-2)
}

export const commaValue = (val : string | number | undefined, decimal?: number) : string => {
    if(val === undefined) return '';
    
    let num = typeof val === 'string' ? parseFloat(val) : val;
    
    var parts = num.toFixed(decimal).split(".");
    parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    return parts.join(".");
}