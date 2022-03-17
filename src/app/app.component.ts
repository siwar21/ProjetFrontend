import { Component } from '@angular/core';
import User from './Interfaces/User';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'frontend-test-siwar';

  constructor(){
    this.users.forEach(user=>{
      if (user?.checked) this.selected++ 
    })
  }

  setChecked = (index:any) => {
    this.users[index].checked = !this.users[index].checked
    this.selected = 0
    this.users.forEach(user=>{
      if (user?.checked) this.selected++ 
    })
  }

  addUser = () => {
    this.newUser.dob = new Date(this.newUser.dob)
    this.newUser.hired = new Date(this.newUser.hired)
    console.log(this.newUser)
    this.users.push(this.newUser)
    this.newUser = {
      checked:false,
      name:"",
      phone:"",
      ssn:"",
      dob:new Date(1984,12,6),
      hired:new Date(2017,3,24),
      cdl:"",
      state:"",
      cdlExp:"",
      medicalExp:"",
      mvrExp:""
  }
  }

  selected:number = 0
 
    
  public searchInput!: string;
  

  

  
  users:User[] = [
    {
      checked:false,
      name:"Angelo Trotter",
      phone:"11111111",
      ssn:"123-45-6789",
      dob:new Date(1984,12,6),
      hired:new Date(2017,3,24),
      cdl:"44433245",
      state:"UTAH",
      cdlExp:"in 56 days",
      medicalExp:"in 56 days",
      mvrExp:"in 65 days"
    },
    {
      checked:false,
      name:"Darryl Tolbert",
      phone:"11111111",
      ssn:"123-45-6789",
      dob:new Date(1984,12,6),
      hired:new Date(2017,3,24),
      cdl:"44433245",
      state:"UTAH",
      cdlExp:"in 56 days",
      medicalExp:"in 56 days",
      mvrExp:"in 65 days"
    },
    {
      checked:false,
      name:"Eric Reid",
      phone:"11111111",
      ssn:"123-45-6789",
      dob:new Date(1984,12,6),
      hired:new Date(2017,3,24),
      cdl:"44433245",
      state:"UTAH",
      cdlExp:"in 56 days",
      medicalExp:"in 56 days",
      mvrExp:"in 65 days"
    },
    {
      checked:false,
      name:"Glen Cotton",
      phone:"11111111",
      ssn:"123-45-6789",
      dob:new Date(1984,12,6),
      hired:new Date(2017,3,24),
      cdl:"44433245",
      state:"UTAH",
      cdlExp:"in 56 days",
      medicalExp:"in 56 days",
      mvrExp:"in 65 days"
    },
    {
      checked:false,
      name:"Issac Douglas",
      phone:"11111111",
      ssn:"123-45-6789",
      dob:new Date(1984,12,6),
      hired:new Date(2017,3,24),
      cdl:"44433245",
      state:"UTAH",
      cdlExp:"in 56 days",
      medicalExp:"in 56 days",
      mvrExp:"in 65 days"
    },
    {
      checked:false,
      name:"James Smith",
      phone:"11111111",
      ssn:"123-45-6789",
      dob:new Date(1984,12,6),
      hired:new Date(2017,3,24),
      cdl:"44433245",
      state:"UTAH",
      cdlExp:"in 56 days",
      medicalExp:"in 56 days",
      mvrExp:"in 65 days"
    },
    {
      checked:false,
      name:"Angelo Trotter",
      phone:"11111111",
      ssn:"123-45-6789",
      dob:new Date(1984,12,6),
      hired:new Date(2017,3,24),
      cdl:"44433245",
      state:"UTAH",
      cdlExp:"in 56 days",
      medicalExp:"in 56 days",
      mvrExp:"in 65 days"
    },
    {
      checked:false,
      name:"Darryl Tolbert",
      phone:"11111111",
      ssn:"123-45-6789",
      dob:new Date(1984,12,6),
      hired:new Date(2017,3,24),
      cdl:"44433245",
      state:"UTAH",
      cdlExp:"in 56 days",
      medicalExp:"in 56 days",
      mvrExp:"in 65 days"
    },
    {
      checked:false,
      name:"Angelo Trotter",
      phone:"11111111",
      ssn:"123-45-6789",
      dob:new Date(1984,12,6),
      hired:new Date(2017,3,24),
      cdl:"44433245",
      state:"UTAH",
      cdlExp:"in 56 days",
      medicalExp:"in 56 days",
      mvrExp:"in 65 days"
    },
    {
      checked:false,
      name:"Darryl Tolbert",
      phone:"11111111",
      ssn:"123-45-6789",
      dob:new Date(1984,12,6),
      hired:new Date(2017,3,24),
      cdl:"44433245",
      state:"UTAH",
      cdlExp:"in 56 days",
      medicalExp:"in 56 days",
      mvrExp:"in 65 days"
    },
    {
      checked:false,
      name:"Angelo Trotter",
      phone:"11111111",
      ssn:"123-45-6789",
      dob:new Date(1984,12,6),
      hired:new Date(2017,3,24),
      cdl:"44433245",
      state:"UTAH",
      cdlExp:"in 56 days",
      medicalExp:"in 56 days",
      mvrExp:"in 65 days"
    },
    {
      checked:false,
      name:"Darryl Tolbert",
      phone:"11111111",
      ssn:"123-45-6789",
      dob:new Date(1984,12,6),
      hired:new Date(2017,3,24),
      cdl:"44433245",
      state:"UTAH",
      cdlExp:"in 56 days",
      medicalExp:"in 56 days",
      mvrExp:"in 65 days"
    },
    {
      checked:false,
      name:"Angelo Trotter",
      phone:"11111111",
      ssn:"123-45-6789",
      dob:new Date(1984,12,6),
      hired:new Date(2017,3,24),
      cdl:"44433245",
      state:"UTAH",
      cdlExp:"in 56 days",
      medicalExp:"in 56 days",
      mvrExp:"in 65 days"
    },
    {
      checked:false,
      name:"Darryl Tolbert",
      phone:"11111111",
      ssn:"123-45-6789",
      dob:new Date(1984,12,6),
      hired:new Date(2017,3,24),
      cdl:"44433245",
      state:"UTAH",
      cdlExp:"in 56 days",
      medicalExp:"in 56 days",
      mvrExp:"in 65 days"
    },
    {
      checked:false,
      name:"Angelo Trotter",
      phone:"11111111",
      ssn:"123-45-6789",
      dob:new Date(1984,12,6),
      hired:new Date(2017,3,24),
      cdl:"44433245",
      state:"UTAH",
      cdlExp:"in 56 days",
      medicalExp:"in 56 days",
      mvrExp:"in 65 days"
    },
    {
      checked:false,
      name:"Darryl Tolbert",
      phone:"11111111",
      ssn:"123-45-6789",
      dob:new Date(1984,12,6),
      hired:new Date(2017,3,24),
      cdl:"44433245",
      state:"UTAH",
      cdlExp:"in 56 days",
      medicalExp:"in 56 days",
      mvrExp:"in 65 days"
    },
    {
      checked:false,
      name:"Angelo Trotter",
      phone:"11111111",
      ssn:"123-45-6789",
      dob:new Date(1984,12,6),
      hired:new Date(2017,3,24),
      cdl:"44433245",
      state:"UTAH",
      cdlExp:"in 56 days",
      medicalExp:"in 56 days",
      mvrExp:"in 65 days"
    },
    {
      checked:false,
      name:"Darryl Tolbert",
      phone:"11111111",
      ssn:"123-45-6789",
      dob:new Date(1984,12,6),
      hired:new Date(2017,3,24),
      cdl:"44433245",
      state:"UTAH",
      cdlExp:"in 56 days",
      medicalExp:"in 56 days",
      mvrExp:"in 65 days"
    },
    {
      checked:false,
      name:"Angelo Trotter",
      phone:"11111111",
      ssn:"123-45-6789",
      dob:new Date(1984,12,6),
      hired:new Date(2017,3,24),
      cdl:"44433245",
      state:"UTAH",
      cdlExp:"in 56 days",
      medicalExp:"in 56 days",
      mvrExp:"in 65 days"
    },
    {
      checked:false,
      name:"Darryl Tolbert",
      phone:"11111111",
      ssn:"123-45-6789",
      dob:new Date(1984,12,6),
      hired:new Date(2017,3,24),
      cdl:"44433245",
      state:"UTAH",
      cdlExp:"in 56 days",
      medicalExp:"in 56 days",
      mvrExp:"in 65 days"
    },
    {
      checked:false,
      name:"Angelo Trotter",
      phone:"11111111",
      ssn:"123-45-6789",
      dob:new Date(1984,12,6),
      hired:new Date(2017,3,24),
      cdl:"44433245",
      state:"UTAH",
      cdlExp:"in 56 days",
      medicalExp:"in 56 days",
      mvrExp:"in 65 days"
    },
    {
      checked:false,
      name:"Darryl Tolbert",
      phone:"11111111",
      ssn:"123-45-6789",
      dob:new Date(1984,12,6),
      hired:new Date(2017,3,24),
      cdl:"44433245",
      state:"UTAH",
      cdlExp:"in 56 days",
      medicalExp:"in 56 days",
      mvrExp:"in 65 days"
    },
    {
      checked:false,
      name:"Angelo Trotter",
      phone:"11111111",
      ssn:"123-45-6789",
      dob:new Date(1984,12,6),
      hired:new Date(2017,3,24),
      cdl:"44433245",
      state:"UTAH",
      cdlExp:"in 56 days",
      medicalExp:"in 56 days",
      mvrExp:"in 65 days"
    },
    {
      checked:false,
      name:"Darryl Tolbert",
      phone:"11111111",
      ssn:"123-45-6789",
      dob:new Date(1984,12,6),
      hired:new Date(2017,3,24),
      cdl:"44433245",
      state:"UTAH",
      cdlExp:"in 56 days",
      medicalExp:"in 56 days",
      mvrExp:"in 65 days"
    },
    {
      checked:false,
      name:"Angelo Trotter",
      phone:"11111111",
      ssn:"123-45-6789",
      dob:new Date(1984,12,6),
      hired:new Date(2017,3,24),
      cdl:"44433245",
      state:"UTAH",
      cdlExp:"in 56 days",
      medicalExp:"in 56 days",
      mvrExp:"in 65 days"
    },
    {
      checked:false,
      name:"Darryl Tolbert",
      phone:"11111111",
      ssn:"123-45-6789",
      dob:new Date(1984,12,6),
      hired:new Date(2017,3,24),
      cdl:"44433245",
      state:"UTAH",
      cdlExp:"in 56 days",
      medicalExp:"in 56 days",
      mvrExp:"in 65 days"
    },
    {
      checked:false,
      name:"Angelo Trotter",
      phone:"11111111",
      ssn:"123-45-6789",
      dob:new Date(1984,12,6),
      hired:new Date(2017,3,24),
      cdl:"44433245",
      state:"UTAH",
      cdlExp:"in 56 days",
      medicalExp:"in 56 days",
      mvrExp:"in 65 days"
    },
    {
      checked:false,
      name:"Darryl Tolbert",
      phone:"11111111",
      ssn:"123-45-6789",
      dob:new Date(1984,12,6),
      hired:new Date(2017,3,24),
      cdl:"44433245",
      state:"UTAH",
      cdlExp:"in 56 days",
      medicalExp:"in 56 days",
      mvrExp:"in 65 days"
    },
    {
      checked:false,
      name:"Angelo Trotter",
      phone:"11111111",
      ssn:"123-45-6789",
      dob:new Date(1984,12,6),
      hired:new Date(2017,3,24),
      cdl:"44433245",
      state:"UTAH",
      cdlExp:"in 56 days",
      medicalExp:"in 56 days",
      mvrExp:"in 65 days"
    },
    {
      checked:false,
      name:"Darryl Tolbert",
      phone:"11111111",
      ssn:"123-45-6789",
      dob:new Date(1984,12,6),
      hired:new Date(2017,3,24),
      cdl:"44433245",
      state:"UTAH",
      cdlExp:"in 56 days",
      medicalExp:"in 56 days",
      mvrExp:"in 65 days"
    },
  ]

  
  newUser:User = {
    checked:false,
    name:"",
    phone:"",
    ssn:"",
    dob:new Date(1984,12,6),
    hired:new Date(2017,3,24),
    cdl:"",
    state:"",
    cdlExp:"",
    medicalExp:"",
    mvrExp:""
}

}
