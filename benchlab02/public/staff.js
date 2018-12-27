var url = 'http://localhost:3000/staff';
var staffList = document.getElementById('staff');

function createTag(element){
    return document.createElement(element);
}

function appendTag(parent, child){
    return parent.appendChild(child);
    //takes a created element and puts into child
    //and becomes a parent to the new child
    //E.g. appendTag(body, h1)
}

function deletePost(id){
    fetch(url+ "/" + id, {
        method: "DELETE"
    })
    .then(alert("Staff " + id + " is deleted")); //After deleting, sends an alert
}

function updatePost(id){

    var x = document.getElementById(id);
    var y = document.getElementById(id);

    fetch(url + "/" + id,{
        method: "PUT",
        body: JSON.stringify({
                "name": x.value,
                "bio": y.value
        }),
        headers: {"content-type":"application/json"}
    })
    .then(alert("Staff " + id + " is updated successfully!"))
    .catch(error => console.log(error))
}

fetch(url)
.then(response => response.json())
.then(function(data){
    let staffs = data,
            header = createTag('thead'),
            th1 = createTag('td');
        th1.innerHTML = "Staff Name";
        appendTag(header, th1);
        appendTag(staffList, header);
    // staff is an array filled with objects
    return staffs.map(function(staff){
        //After mapping, the new variable "staff"
        //has values mapped to its corresponding keys
        //console.log(staff.name);
        let row = createTag('tr'),
            cell = createTag('td'),
            bio = createTag('td'),
           // edit = createTag('td'), replace with updBtn
           // remove = createTag('td'), replace with del
            del = createTag('button'),
            updName = createTag('input');
            updBio = createTag('input');
            updBtn = createTag('button');

        //Transfer of Data to Element
        updName.setAttribute("id", staff.id);
        updName.setAttribute("name", name);
        updName.value = staff.name; 
        updBio.setAttribute("id", staff.id);
        updName.setAttribute("name", bio);
        updBio.value = staff.bio;

        //Update Staff
        //<button onclick="updatePost(id)"></button>
        updBtn.setAttribute("onclick", "updatePost("+ staff.id +")");
        updBtn.innerHTML = "📝";

        //Delete Staff
        //<button onclick="deletePost(id)"></button>
        del.setAttribute("onclick", "deletePost("+ staff.id +")");
        //<button onclick="deletePost(id)">Delete</button>
        del.innerHTML = "❌";
        
        //Appending Columns
        appendTag(cell, updName);
        appendTag(bio, updBio);
        appendTag(row, cell); // Staff name in column 1
        appendTag(row, bio); // Staff name in column 2
        appendTag(row, updBtn); // edit icon in column 3
        appendTag(row, del); //remove icon in column 4
        appendTag(staffList, row);
    });
})
//.then(data => console.log(data))
//.then(data => staffList.innerHTML = data.name);

// var heading = document.createElement('h1');
// heading.innerHTML = "Heading 1";
// //<h1>Heading 1</h1>
// document.body.appendChild(heading);
