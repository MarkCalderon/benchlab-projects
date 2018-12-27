function takeQuery(){
    //  Document = HTML
    // 
    var i_question = document.getElementById("question").value;
    outputQuery(processQuery(i_question));
}

function outputQuery(x_answer){
    document.getElementById("answer").innerHTML = x_answer;
}

function processQuery(i_question){
    var x_answer = "Sorry we don't understand the question. Please call us at 2221888.";

    if(faq[i_question.toLowerCase()]){
        return x_answer = faq[i_question.toLowerCase()];
    }
    else{
        return x_answer;
    }
}

