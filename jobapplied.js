var jobApplied=JSON.parse(localStorage.getItem("jobApplied"));

var bookmark=JSON.parse(localStorage.getItem("bookmark")) || [];
function showJob(jobAppl){
    jobAppl.forEach(job=>{
        var row=document.createElement("tr");

        var td1=document.createElement("td");
        td1.innerText=job.name;
        var td2=document.createElement("td");
        td2.innerText=job.email;
        var td3=document.createElement("td");
        td3.innerText=job.role;
        var td4=document.createElement("td");
        td4.innerText=job.salary;

        var td5=document.createElement("td");
        td5.innerText="Bookmark";
        td5.style.color="blue"
        td5.style.cursor="pointer"
        td5.addEventListener("click",function(){
            bookmark.push(job)
            localStorage.setItem("bookmark",JSON.stringify(bookmark))
        })

        row.append(td1,td2,td3,td4,td5);

        document.querySelector("#tbody").append(row)
        
    });


}

window.addEventListener("load",(event)=>{
    showJob(jobApplied)
})

document.querySelector("#sortbyname").addEventListener("change",sortFunction)

function sortFunction(){
    document.querySelector("#tbody").innerHTML="";
    var jobs=jobApplied;
    var sort=document.querySelector("#sortbyname").value;
    // console.log(sort)
    // console.sort()
    if(sort=="asc"){
        jobs.sort((a,b)=>(a.salary-b.salary));
        
    }
    if(sort=="dsc"){
        jobs.sort((a,b)=>(b.salary-a.salary));
        
    }

    showJob(jobs);
}