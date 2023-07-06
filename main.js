function myFunction() {
  letter = ""
  repeattime = Math.floor(Math.random()*10)+1
  for(let i=0;i<repeattime;i++){
     ltr_slct_no = Math.floor(Math.random()*5)+1
     if(ltr_slct_no==1){
        letter += "ﾎﾞｯ"
     };
     if(ltr_slct_no==2){
        letter += "ﾄﾝ"
     };
     if(ltr_slct_no==3){
        letter += "…"
     };
     if(ltr_slct_no==4){
        letter += "!!!"
     };
  };
  post(letter);
}

function post(text) {
  var data = {
      "i": "" //Personal access code here
      "text": text
  };
  var options = {
    "method": "post",
    "contentType" : "application/json",
    "payload": JSON.stringify(data)
  };

  UrlFetchApp.fetch("https://misskey.io/api/notes/create", options);
}
