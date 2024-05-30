async function fetchDataWithErrorHandling() {
   try {
     const response = fetch('https://swapi.dev/api/people/1');
     if(!response.ok) throw new Error('Network response is not ok.');
     const data = (await response).json();
     console.log(data);
   } catch (error) {
    console.log('Error while fetching data: ', error);
   }
}