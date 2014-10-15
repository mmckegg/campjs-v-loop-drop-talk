var es = new EventSource("/sse");
es.onmessage = function (event) {
  if (event.data === 'reload'){
    window.location.reload(true)
  } else if (event.data === 'reload soon'){
    setTimeout(function(){
      window.location.reload(true)
    }, 500)
  }
};