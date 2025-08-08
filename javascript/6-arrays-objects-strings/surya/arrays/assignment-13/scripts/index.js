const result = document.getElementById('result');
const form = document.getElementById('form');
const textAreaInput = document.getElementById('array-elements')

function findFrequentElement(input_array){
    return input_array.reduce((acc,item)=>{
        acc.map[item]= (acc.map[item] || 0) +1;
        if (acc.map[item] > acc.maxCount){
            acc.maxCount=acc.map[item];
            acc.mostFrequent = item;
        }
        return acc;
    },{map:{},mostFrequent:null,maxCount:0}).mostFrequent
}

form.addEventListener('submit', (e) => {
    e.preventDefault();
    result.textContent = "";
    if (!textAreaInput.value) {
        result.textContent = "Please enter an array.";
        return;
    }
    let input_array = [];
    try {
        input_array = JSON.parse(textAreaInput.value);
    } catch (error) {
        result.textContent = "Invalid array format. Please enter a valid JSON array.";
        return;
    }
    console.log(input_array)
    let frequentElement = findFrequentElement(input_array);
    result.textContent=JSON.stringify(frequentElement);
})
