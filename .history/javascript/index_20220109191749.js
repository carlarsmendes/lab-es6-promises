// This will print in the wrong order.
// We added it as an example and to test that the arrays from data.js are loaded

// 🚨🚨🚨 Comment out the below code before you start working on the code

// Out of sync
  // getInstruction("mashedPotatoes", 0, (step1) => {
  //   document.querySelector("#mashedPotatoes").innerHTML += `<li>${step1}</li>`;
  // }, (error) => console.log(error));
  
  // getInstruction("mashedPotatoes", 1, (step2) => {
  //   document.querySelector("#mashedPotatoes").innerHTML += `<li>${step2}</li>`;
  // }, (error) => console.log(error));
  
  // getInstruction("mashedPotatoes", 2, (step3) => {
  //   document.querySelector("#mashedPotatoes").innerHTML += `<li>${step3}</li>`;
  // }, (error) => console.log(error));
  
  // getInstruction("mashedPotatoes", 3, (step4) => {
  //   document.querySelector("#mashedPotatoes").innerHTML += `<li>${step4}</li>`;
  // }, (error) => console.log(error));
  
  // getInstruction("mashedPotatoes", 4, (step5) => {
  //   document.querySelector("#mashedPotatoes").innerHTML += `<li>${step5}</li>`;
  //   document.querySelector("#mashedPotatoesImg").removeAttribute("hidden");
  // }, (error) => console.log(error));



// Iteration 1 - MashedPotatoes using callbacks
getInstruction("mashedPotatoes",0, (step1) => {
  document.querySelector("#mashedPotatoes").innerHTML += `<li>${step1}</li>`;
    getInstruction("mashedPotatoes",1, (step2) => {
      document.querySelector("#mashedPotatoes").innerHTML += `<li>${step2}</li>`;
        getInstruction("mashedPotatoes",2, (step3) => {
          document.querySelector("#mashedPotatoes").innerHTML += `<li>${step3}</li>`;
            getInstruction("mashedPotatoes",3, (step4) => {
              document.querySelector("#mashedPotatoes").innerHTML += `<li>${step4}</li>`;
                getInstruction("mashedPotatoes",4, (step5) => {
                  document.querySelector("#mashedPotatoes").innerHTML += `<li>${step5}</li>`;
                  document.querySelector("#mashedPotatoesImg").removeAttribute("hidden");
                });
            });
        });
    });
});

// Iteration 2 - Steak using promises
//This only works because the obtainDirections function
   obtainInstruction("steak",0)
    .then((instruction) =>{ 
      document.querySelector("#steak").innerHTML += `<li>${instruction}</li>`;
      return obtainInstruction("steak",1);
    })
    .then((instruction) => {
    document.querySelector("#steak").innerHTML += `<li>${instruction}</li>`;
    return obtainInstruction("steak",2);})
    .then((instruction) => {
      document.querySelector("#steak").innerHTML += `<li>${instruction}</li>`;
      return obtainInstruction("steak",3);
    })
    .then((instruction) => {
      document.querySelector("#steak").innerHTML += `<li>${instruction}</li>`;
      return obtainInstruction("steak",4);
    })
    .then((instruction) => {
      document.querySelector("#steak").innerHTML += `<li>${instruction}</li>`;
      return obtainInstruction("steak",5);
    })
    .then((instruction) => {
      document.querySelector("#steak").innerHTML += `<li>${instruction}</li>`;
      return obtainInstruction("steak",6);
    })
    .then((instruction) => {
      document.querySelector("#steak").innerHTML += `<li>${instruction}</li>`;
      document.querySelector("#steakImg").removeAttribute("hidden");
      return obtainInstruction("steak",7);
    })
    //.then(() => obtainDirections(4)) //if returns undefined
    .catch((err) => console.error(err));

// Iteration 3 Brussels Srpouts using async/await

async function cookBroccoli () {
  const step0 = await obtainInstruction("broccoli",0);
  document.querySelector("#broccoli").innerHTML += `<li>${step0}</li>`;
  const step1 = await obtainInstruction("broccoli",1);
  document.querySelector("#broccoli").innerHTML += `<li>${step1}</li>`;
  const step2 = await obtainInstruction("broccoli",2);
  document.querySelector("#broccoli").innerHTML += `<li>${step2}</li>`;
  const step3 = await obtainInstruction("broccoli",3);
  document.querySelector("#broccoli").innerHTML += `<li>${step3}</li>`;
  const step4 = await obtainInstruction("broccoli",4);
  document.querySelector("#broccoli").innerHTML += `<li>${step4}</li>`;
  document.querySelector("#broccoliImg").removeAttribute("hidden");
}
cookBroccoli();



// Bonus 2 - Promise all
// ...

let p1 = obtainInstruction("brusselsSprouts",0);
let p2 = obtainInstruction("brusselsSprouts",1);
let p3 = obtainInstruction("brusselsSprouts",2);
let p4 = obtainInstruction("brusselsSprouts",3);
let p5 = obtainInstruction("brusselsSprouts",4);

Promise.all([p1, p2, p3,p4,p5]).then((values) => 
{
values.forEach((step)=>{
  document.querySelector("#brusselsSprouts").innerHTML += `<li>${step}</li>`;
});
document.querySelector("#brusselsSproutsImg").removeAttribute("hidden");
  });
// console.log("values", values));