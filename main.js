function saveToCrud(event){
    event.preventDefault();
    const price = event.target.price.value;
    const product = event.target.product.value;

    const obj ={
            price,
            product,
            
    };
   
     axios.post("https://crudcrud.com/api/2ab011bf48f441cbad927a5a0c162177/EcomApp",obj)
     .then((response) =>  {
        showNewUSerOnScreen(response.data)
        console.log(response)
     })
     .catch(err =>{
        document.body.innerHTML = document.body.innerHTML + "<h4> Something went wrong</h4>"
         console.log(err)
     })
    }


    window.addEventListener("DOMContentLoaded", () =>{
        
        axios.get('https://crudcrud.com/api/2ab011bf48f441cbad927a5a0c162177/EcomApp')
         .then(response => {
            
            for(var i=0; i<= response.data.length;i++){
                showNewUSerOnScreen(response.data[i])
            }           
         })
         .catch((error) => {
            console.log(error);
         })
         
    })
    function showNewUSerOnScreen(user) {
         
         const parentNode = document.getElementById('listOfUsers');
        const childHTML = `<li id=${user._id}>Product=> ${user.product}  - Price=> ${user.price}
            <button onclick = deleteUser('${user._id}')> Delete Product</button>
            
        
            </li>`
           
           

        parentNode.innerHTML = parentNode.innerHTML + childHTML;

      
    }
    function myFunction() {
        var price = document.getElementById("price").value
        var total = total+price;
        document.getElementById("totalPrice").innerHTML = total;

    }
   
    function deleteUser(userId){
     axios.delete(`https://crudcrud.com/api/2ab011bf48f441cbad927a5a0c162177/EcomApp/${userId}`)
      .then((response)=>{
        removeUserFromScreen(userId)
      })   
      .catch((err) => {
        console.log(err)
      })

    }

    function removeUserFromScreen(userId){
         const parentNode = document.getElementById('listOfUsers');
         const childNodeToBeDeleted = document.getElementById(userId);
         
         if(childNodeToBeDeleted){
            parentNode.removeChild(childNodeToBeDeleted)
         }
    }