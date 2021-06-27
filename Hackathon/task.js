function happyClicked(){
    var happyTasks = ["Complete an act of kindness for someone!", "Spend time with a friend!", "Read a book!", "Watch a movie!", "Exercise or play a sport!", "Spend time with family or friends!", "Volunteer/do communtiy service!", "Go on social media for a short bit!", "Be grateful for all you have and express it!", "Breathe deeply!", "Think about the future or begin planning for it", "Practice meditation!", "Stretch!", "Call one of your friends!", "Play a board/video game!", "Make a new pal!", "Bake something delicious!", "Donate to a charity!"];


    var taskchosen = parseInt(Math.floor(Math.random()*happyTasks.length));
    task.innerHTML = happyTasks[taskchosen];
    happyTasks.splice(taskchosen, 1);
    cb.innerHTML = "N";
  
    taskchosen = parseInt(Math.floor(Math.random()*happyTasks.length));
    task2.innerHTML = happyTasks[taskchosen];
    happyTasks.splice(taskchosen, 1);
    cb2.innerHTML = "N";

    taskchosen = parseInt(Math.floor(Math.random()*happyTasks.length));
    task3.innerHTML = happyTasks[taskchosen];
    happyTasks.splice(taskchosen, 1);
    cb3.innerHTML = "N";

    /*task.innerHTML = happyTasks[Math.floor(Math.random() * happyTasks.length)];
    if(task.innerHTML = happyTasks[0]) {
      happyTasks = happyTasks - happyTasks[0];
    }
    var taskchosen = Math.floor(Math.random()*happyTasks.length);
    task.innerHTML = happyTasks[taskchosen];
    happyTasks = happyTasks.splice(taskchosen);
    cb.innerHTML = "N";
    taskchosen = Math.floor(Math.random()*happyTasks.length);
    task2.innerHTML = happyTasks[taskchosen];
    happyTasks = happyTasks.splice(taskchosen);
    cb2.innerHTML = "N";
    taskchosen = Math.floor(Math.random()*happyTasks.length);
    task2.innerHTML = happyTasks[taskchosen];
    happyTasks = happyTasks.splice(taskchosen); 
    cb3.innerHTML = "N";
    */
}
function sadClicked(){
  var sadTasks = ["Eat one of your comfort foods (in moderation)!", "Spend time outdoors!", "Sleep or take rest, give yourself a break!", "Ask an adult for help or talk to them about how you're feeling!", "Practice self care, for example taking a shower!"];

  var taskchosen = parseInt(Math.floor(Math.random()*sadTasks.length));
  task.innerHTML = sadTasks[taskchosen];
  sadTasks.splice(taskchosen, 1);
  cb.innerHTML = "N";
  
  taskchosen = parseInt(Math.floor(Math.random()*sadTasks.length));
  task2.innerHTML = sadTasks[taskchosen];
  sadTasks.splice(taskchosen, 1);
  cb2.innerHTML = "N";

  taskchosen = parseInt(Math.floor(Math.random()*sadTasks.length));
  task3.innerHTML = sadTasks[taskchosen];
  sadTasks.splice(taskchosen, 1);
  cb3.innerHTML = "N";
  //randomly generates three tasks while ensuring that none of them overlap + flicking all boxes to off
}

function neutralClicked(){
  var neutralTasks = ["Do schoolwork or something productive!", "Do chores or help out a family member!", "Take some short rest", "Go for a drive or to a store!", "Practice basic self-care, for example brushing your teeth!", ];
  var taskchosen = parseInt(Math.floor(Math.random()*neutralTasks.length));
  task.innerHTML = neutralTasks[taskchosen];
  neutralTasks.splice(taskchosen, 1);
  cb.innerHTML = "N";
  
  taskchosen = parseInt(Math.floor(Math.random()*neutralTasks.length));
  task2.innerHTML = neutralTasks[taskchosen];
  neutralTasks.splice(taskchosen, 1);
  cb2.innerHTML = "N";

  taskchosen = parseInt(Math.floor(Math.random()*neutralTasks.length));
  task3.innerHTML = neutralTasks[taskchosen];
  neutralTasks.splice(taskchosen, 1);
  cb3.innerHTML = "N";
}