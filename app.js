
const tem = firebase.firestore();
const showhere = document.querySelector("h2");
tem.collection('temp').get().then((snapshot)=>{
  snapshot.forEach(doc=>{
    console.log(doc.data());
    showData(doc);
  })
})

$("button").click(function(){
  location.reload();
})


function showData(doc){
  showhere.innerHTML = doc.data().temp + " °C";
}
