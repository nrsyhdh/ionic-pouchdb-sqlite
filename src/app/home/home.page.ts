/* import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { EmployeeService } from '../employee.service';
import { EmployeePage } from '../employee/employee.page';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  public employees : [] = [];
  constructor(public modalCtrl:ModalController,
              public employeeService:EmployeeService) {}
  
  ngOnInit(){
    this.employeeService.createPouchDB();
    this.employeeService.read()
      .then(employees => {
          this.employees = employees;
      })
      .catch((err)=>{});
  }

  async showDetails(employee){
    let modal = await this.modalCtrl.create(employee);
    modal.present();
  }

}
 */

import { Component, OnInit  } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { EmployeePage } from '../employee/employee.page';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss']
})
export class HomePage implements OnInit {
  public employees : [] = [];
  constructor(public modalCtrl: ModalController, public employeeService : EmployeeService) {


  }
    ngOnInit() {

            this.employeeService.createPouchDB();

            this.employeeService.read()
                .then(employees => {
                    this.employees = employees;
                })
                .catch((err)=>{});

    }

    async showDetails(employee) {
        let modal = await this.modalCtrl.create(employee);
        modal.present();
    }  


}