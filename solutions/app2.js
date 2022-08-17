const user = {
  firstName: 'John',
  lastName: 'Doe',
};

const {firstName : f, lastName : l, job : j = 'unknown'} = user;

//
 export {
   l,
   f,
   j,
};
