export default function orderByProps(obj, prop = []) {
    const sortProp = [];
    const sortKey = [];
    
    for (const key in obj) {
        if (prop.length > 0) {
            if (!prop.includes(key)) {
                sortKey.push( { key: key, value: obj[key] } );
            }
        } else {
            sortKey.push( {key: key, value: obj[key]} );
        }
    };

    sortKey.sort((a, b) => a.key > b.key ? 1 : -1);
  
    prop.forEach((key) => {
        sortProp.push ( { key: key, value: obj[key] } )
    });
          
    const result = [...sortProp, ...sortKey];
    return result;
}