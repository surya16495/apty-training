let value1 = document.getElementById('value1');
let type1 = document.getElementById('type1');
let value2 = document.getElementById('value2');
let type2 = document.getElementById('type2');
let result=document.getElementById('result');

function getValues() {
    let val1 = value1.value;
    let val2 = value2.value;
    let t1 = type1.value;
    let t2 = type2.value;
    return [val1, val2, t1, t2];
}

function typeConversion(val1,val2,Type1,Type2){
    let convertedValue1;
    let convertedValue2;
    if (Type1 == 'number' ){
        convertedValue1 = Number(val1);
    }else if (Type1 == 'string'){
        convertedValue1 = String(val1);
    }else if (Type1 == 'boolean'){
        convertedValue1 = Boolean(val1);
    }else if (Type1 == 'undefined'){
        convertedValue1=undefined;
    }else if (Type1 == 'null'){
        convertedValue1 = null;
    }else if (Type1 == 'object'){
        convertedValue1 = Object(val1);
    };

    if (Type2 == 'number' ){
        convertedValue2 = Number(val2);
    }else if (Type2 == 'string'){
        convertedValue2 = String(val2);
    }else if (Type2 == 'boolean'){
        convertedValue2 = Boolean(val2);
    }else if (Type2 == 'undefined'){
        convertedValue2=undefined;
    }else if (Type2 == 'null'){
        convertedValue2 = null;
    }else if (Type2 == 'object'){
        convertedValue2 = Object(val2);
    };
 
    return [convertedValue1,convertedValue2];
}

function looseEquals(){
    let [val1, val2, t1, t2] = getValues();
    let [convertedValue1,convertedValue2]=typeConversion(val1,val2,t1,t2);
    result.textContent= convertedValue1 == convertedValue2;
}
function strictEquals(){
    let [val1, val2, t1, t2] = getValues();
    let [convertedValue1,convertedValue2]=typeConversion(val1,val2,t1,t2);
    result.textContent= convertedValue1 === convertedValue2;
}
function looseNotEqual(){
    let [val1, val2, t1, t2] = getValues();
    let [convertedValue1,convertedValue2]=typeConversion(val1,val2,t1,t2);
    result.textContent= convertedValue1 != convertedValue2;
}
function strictNotEqual(){
    let [val1, val2, t1, t2] = getValues();
    let [convertedValue1,convertedValue2]=typeConversion(val1,val2,t1,t2);
    result.textContent= convertedValue1 !== convertedValue2;
}
function greaterThan(){
    let [val1, val2, t1, t2] = getValues();
    let [convertedValue1,convertedValue2]=typeConversion(val1,val2,t1,t2);
    result.textContent= convertedValue1 > convertedValue2;
}
function lessThan(){
    let [val1, val2, t1, t2] = getValues();
    let [convertedValue1,convertedValue2]=typeConversion(val1,val2,t1,t2);
    result.textContent= convertedValue1 < convertedValue2;
}
function greaterThanOrEquals(){
    let [val1, val2, t1, t2] = getValues();
    let [convertedValue1,convertedValue2]=typeConversion(val1,val2,t1,t2);
    result.textContent= convertedValue1 >= convertedValue2;
}
function lessThanOrEquals(){
    let [val1, val2, t1, t2] = getValues();
    let [convertedValue1,convertedValue2]=typeConversion(val1,val2,t1,t2);
    result.textContent= convertedValue1 <= convertedValue2;
}
