player1_name=localStorage.getItem("player1_name");
player2_name=localStorage.getItem("player2_name");
player1_score=0;
player2_score=0;
document.getElementById("player1_name").innerHTML=player1_name+":";
document.getElementById("player2_name").innerHTML=player2_name+":";
document.getElementById("player1_score").innerHTML=player1_score;
document.getElementById("player2_score").innerHTML=player2_score;
document.getElementById("player_question").innerHTML=player1_name+"-question turn";
document.getElementById("player_answer").innerHTML=player2_name+"-answer turn";

function send(){

num1=document.getElementById("num1").value;
num2=document.getElementById("num2").value;
answer=parseInt(num1)*parseInt(num2);




    question="<h4 id='word_display'>Q."+num1+"x"+num2+"</h4>";
    input_box="<br>answer:<input type='text' id='input_check_box'>";
    check_button="<br><br><button class='btn btn-info' onclick='check()'>check</button>";
    row=question+input_box+check_button;
    document.getElementById("output").innerHTML=row;
    document.getElementById("word").value="";
    }