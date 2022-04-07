let listekarmandan = [];

function addMember(name, daramad, saatkari) {
  let karmand = {name,daramad,saatkari,};
    
  listekarmandan.push(karmand);
}

addMember("jalili", 3500000, 240);
console.log(listekarmandan);

function removeMember(name) {
  let index = listekarmandan.findIndex(function(iteam){ return iteam.name === name});
  let user = null;
  if (index >= 0) {
    user = listekarmandan[index];
    listekarmandan.splice(index, 1);
  }
  return user;
}
console.log(removeMember("jalili"));

