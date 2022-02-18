function startClassification()
{
  navigator.mediaDevices.getUserMedia({ audio: true});
  classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/qukGLD35k/model.json', modelReady);
}

function modelReady(){
  classifier.classify(gotResults);
}