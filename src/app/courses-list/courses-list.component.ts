import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-courses-list',
  templateUrl: './courses-list.component.html',
  styleUrls: ['./courses-list.component.css']
})
export class CoursesListComponent implements OnInit {

  

Arr=[
  {
      title:"sql",
  imgUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXNEMP8iA0XuzE6749xM_ptjqNkUWOYjX2Qg&usqp=CAU",
  description:"sql is very important course",
  price:110
  }
  ,
  {
      title:"java",
  imgUrl:"https://th.bing.com/th/id/OIP.WYCH3tYBx68H1c8LkL8aigHaCt?w=310&h=128&c=7&o=5&pid=1.7",
  description:"java is very important course",
  price:250
  }
  ,
  {
      title:"Js",
  imgUrl:"https://th.bing.com/th/id/OIP.rGQKYE5EiF3nqBeU92Vj3AHaHV?w=165&h=180&c=7&o=5&pid=1.7",
  description:"java script is very important course",
  price:190
  }
  ,
  {
      title:"c",
  imgUrl:"https://th.bing.com/th/id/OIP.9AnD6B1oACybNa_aKHWF5AAAAA?w=177&h=180&c=7&o=5&pid=1.7",
  description:"c is very important course",
  price:100
  }
  ,
  {
      title:"c++",
  imgUrl:"https://www.bing.com/th?id=AMMS_445145f18d327a881bba9f4cb02705e7&w=115&h=115&c=5&o=6&pid=3.1",
  description:"c++ is very important course",
  price:160
  }
  ,
  {
      title:"c#",
  imgUrl:"https://th.bing.com/th/id/OIP.BGFa9NdCc6kb-eXVLT4hmQHaHO?w=179&h=180&c=7&o=5&pid=1.7",
  description:"c# is very important course",
  price:140
  }
  ,
  {
      title:"python",
  imgUrl:"https://th.bing.com/th/id/OIP.fLQhu96hlnNlG6xU80GP7QAAAA?w=177&h=180&c=7&o=5&pid=1.7",
  description:"python is very important course",
  price:150
  }
  ,
  {
      title:"Angular",
  imgUrl:"https://th.bing.com/th/id/OIP.RJk2yKVeau1UoYMy5b93GgHaD4?w=336&h=180&c=7&o=5&pid=1.7",
  description:"Angular is very important course",
  price:200
  }
  ,
  {
      title:"React",
  imgUrl:"https://th.bing.com/th/id/OIP.EpxiAAlx2Eho5aItxfUppgHaC2?w=329&h=134&c=7&o=5&pid=1.7",
  description:"React is very important course",
  price:150
  }
  ,
  {
      title:"vue",
  imgUrl:"https://th.bing.com/th/id/OIP.ACR0gj0wbx91V_xgURifWgHaDG?w=303&h=146&c=7&o=5&pid=1.7",
  description:"vue is very important course",
  price:120
  }
  
  ]
  
  constructor() { }

  ngOnInit(): void {
  }

}
