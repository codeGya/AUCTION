document.getElementById('address').addEventListener('submit',sendAddressDetails)

async function sendAddressDetails(){
    const townName=document.getElementById('town').value
    const cityName=document.getElementById('city').value
    const stateName=document.getElementById('state').value
    const addressDetails={
        town:townName,
        city:cityName,
        state:stateName,
    }
    console.log(addressDetails)
    const config={
        headers:{
            header1:localStorage.getItem('token')
        }
    }

    await axios.post('http://localhost:5000/add/address',addressDetails,config)
}