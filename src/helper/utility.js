export const isZipCode = function(str) {
    const regexp = /^[0-9]{5}(?:-[0-9]{4})?$/;  
      
    if (regexp.test(str)){
      return true;
    }else{
      return false;
    }
}