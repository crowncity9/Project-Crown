const WORLD = {
  apartmentObjects: [
    { name:"Bed", x:120, y:130, w:140, h:90, color:"#6a4b4b", action:"You made the bed. Discipline starts small." },
    { name:"Closet", x:285, y:130, w:80, h:110, color:"#463838", action:"Fresh outfit equipped." },
    { name:"TV", x:430, y:135, w:150, h:45, color:"#111111", action:"CPNN News: Crown Point wakes up to another tense morning." },
    { name:"Fridge", x:135, y:310, w:80, h:110, color:"#dddddd", action:"You grabbed cold water." },
    { name:"Front Door", x:640, y:275, w:38, h:90, color:"#ffd75b", action:"door" }
  ],

  buildings: [
    { name:"King's Market", x:980, y:280, w:210, h:120, color:"#c89d38" },
    { name:"King Cuts", x:1240, y:280, w:190, h:120, color:"#326bbd" },
    { name:"Unity Park Court", x:980, y:650, w:380, h:210, color:"#2e7d3f" },
    { name:"Highland Rec Center", x:520, y:720, w:320, h:160, color:"#8b6b38" },
    { name:"New Hope Church", x:1450, y:600, w:210, h:150, color:"#dddddd" },
    { name:"Crown Fuel", x:1500, y:300, w:220, h:120, color:"#a33a2d" }
  ],

  npcs: [
    { name:"Ms. Pearl", x:760, y:515, color:"#ffd75b", text:"Morning, baby. Welcome back to Highland Heights.", step:2, next:"Visit King's Market." },
    { name:"Marcus", x:1060, y:450, color:"#95e06c", text:"You finally outside? Solo been waiting at Unity Park.", step:3, next:"Go to Unity Park Court." },
    { name:"King Solo", x:1130, y:610, color:"#111111", text:"Crown Point changes people. What kind of crown you trying to build?", step:4, next:"Mission complete. Free roam unlocked." },
    { name:"Neighbor", x:650, y:610, color:"#eeeeee", text:"Good to see somebody from the Heights doing positive.", step:-1, next:"" },
    { name:"Hooper", x:1250, y:735, color:"#ff8844", text:"Courts been active all morning. You running next?", step:-1, next:"" }
  ],

  vehicles: [
    { name:"Sedan", x:850, y:505, w:70, h:38, color:"#303030" }
  ]
};
