const getFillerText = () => fetch('https://baconipsum.com/api/?type=meat-and-filler')
.then(response => response.json());

export default getFillerText;