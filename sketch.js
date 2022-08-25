var weight = [35,38,42,45,43,34,36,41,48,32];

function setup() {
  createCanvas(400,400);

}
for (var i=0; i<weight.length; i=i+1) {
  console.log (weight[i])
}
function draw() 
{
  background(30);
}
function weight_average() {
  var sum=0
  for(var i=0;i<weight.length;i=i+1) {
sum=sum+weight[i]
  }
  var average=sum/weight.length
  console.log (average)
}
weight_average()
 

