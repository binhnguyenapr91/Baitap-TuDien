let listEng = ["hello","dog","cat","fish","tiger","lion"];
let listVie = ["xin chào","chó","mèo","cá","hổ","sư tử"];
let needToSearch = "";
let status=false;

needToSearch = prompt("Enter the word you want to search:");


status = listEng.indexOf(needToSearch);
if (status === -1){
    alert("Word not found!")
}else{
    alert(listVie[status]);
}
