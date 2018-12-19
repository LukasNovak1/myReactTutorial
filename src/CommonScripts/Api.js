import $ from 'jquery'

export function Get(url, successFunction, errorFunction) {
  

  $.ajax({
    url: url,
    success: successFunction
    
  });

  
}