function analyze(){
let input=document.getElementById('input').value||"";
let notes="";
let output="";

// formatter
if(input.includes("func") || input.includes("class")){
  output += input.replace(/\{/g,"{\n").replace(/\}/g,"\n}\n");
  notes += "Basic formatting applied.\n";
}

// memory / ARC
if(input.includes("weak") || input.includes("unowned")){
  notes += "ARC memory reference detected.\n";
}

// optional
if(input.includes("!")){
  notes += "Force unwrap detected (risk).\n";
}
if(input.includes("?")){
  notes += "Optional handling detected.\n";
}

// closure
if(input.includes("{") && input.includes("in")){
  notes += "Closure detected.\n";
}
if(input.includes("[weak self]")){
  notes += "Weak capture in closure detected.\n";
}

if(!notes) notes="No major Swift patterns detected.";

document.getElementById('result').innerText =
"Output:\n"+output+"\nNotes:\n"+notes;
}
