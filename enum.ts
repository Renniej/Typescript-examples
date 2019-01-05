enum DaysOfTheWeek{
    SUN = 100, MON, TUE, WED, THU, FRI, SAT  //Mon is 101, Tue = 102, etc etc
}

var day : DaysOfTheWeek; // day is of type DaysOfTheWeek

day = DaysOfTheWeek.MON;

if (day === DaysOfTheWeek.MON){
    console.log("GOT TO GO TO WORK!");
}