const reducer = (state, action) => {
    console.log(state);
    switch (action.type) {
      case "fName":{
        return {...state, fName : action.value};
      }
      case "lName":{
        return {...state, lName : action.value};
      }
      case "dateOfBirth":{
        return {...state, dateOfBirth : action.value};
      }
      case "email":{
        return {...state, email : action.value};
      }
      case "address":{
        return {...state, address : action.value};
      }
      case "bigMessage":{
        return {...state, bigMessage : action.value};
      }
      case "mChoice1":{
        if(action.value == 1){
          return {...state, mChoice1 : 0,mChoice2 : 1};
        }else{
          return {...state, mChoice1 : 1, mChoice2 : 0};
        }
      }
      case "mChoice2":{
        if(action.value == 1){
          return {...state, mChoice2 : 0, mChoice1 : 1};
        }else{
          return {...state, mChoice2 : 1, mChoice1 : 0};
        }
      }
      case "male":{
        if(action.value == 1){
          return {...state, male : 0, female : 1};
        }else{
          return {...state, male : 1, female : 0};
        }
      }
      case "female":{
        if(action.value == 1){
          return {...state, female : 0, male : 1};
        }else{
          return {...state, female : 1, male : 0};
        }
      }
      case "bChoice1":{
        if(action.value == 1){
          return {...state, bChoice1 : 0};
        }else{
          return {...state, bChoice1 : 1};
        }
      }
      case "bChoice2":{
        if(action.value == 1){
          return {...state, bChoice2 : 0};
        }else{
          return {...state, bChoice2 : 1};
        }
      }
        default:
          return {...state};
    }
  };

  const reducerWrong = (wrongState, wrongAction) => {
    console.log(wrongState);
    switch (wrongAction.type) {
      case "fName": {
        return { ...wrongState, wrongFName: wrongAction.value };
      }
      case "lName": {
        return { ...wrongState, wrongLName: wrongAction.value };
      }
      case "dateOfBirth": {
        return { ...wrongState, wrongDateOfBirth: wrongAction.value };
      }
      case "email": {
        return { ...wrongState, wrongEmail: wrongAction.value };
      }
      case "address": {
        return { ...wrongState, wrongAddress: wrongAction.value };
      }
      default:
        return { ...wrongState };
    }
  };

export {reducer, reducerWrong};
