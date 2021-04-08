//API CALL FROM JSONPLACEHOLDER WEBSITE...
const getdatapromise=new Promise((resolve,reject)=>{
        $.get('https://jsonplaceholder.typicode.com/posts',(data)=>{
        resolve(data)
    }).fail(err=>{
        reject(new Error(`An error occured in getting data: ${err.status}`));
    })
})

const getdetailpromise=(data)=>new Promise((resolve,reject)=>{              //written as a function
    console.log(data)
    $.get("https://jsonplaceholder.typicode.com/posts/"+data[5].id,(data)=>{
        resolve(data);
    }).fail(err=>{
        reject("detail call failed "+err.status);
    })
})

const getcommentpromise=(data)=>new Promise((resolve,reject)=>{
    console.log(data)
    $.get("https://jsonplaceholder.typicode.com/comments",(data)=>{
        resolve(data);
    }).fail(err=>{
        reject("comment call failed"+err.status);
    })
})


//to make getdatapromise execute first and then getdetailpromise, use
getdatapromise
.then((response)=>getdetailpromise(response))         //we can write this syntax or next line syntax. both mean same.
.then(getcommentpromise)
.then(response=>{
    console.log(response);
})
.catch((err)=>{
    console.log(err);
})

//GETTING DATA FROM AWS...
console.log("edited");
$.get("a1a9pfh1z4hsle-ats.iot.us-east-2.amazonaws.com",(data)=>{
    console.log(data);
})