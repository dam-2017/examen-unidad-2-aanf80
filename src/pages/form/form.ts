import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { FormControl, Validators, FormBuilder, FormGroup } from '@angular/forms'
/**
 * Generated class for the Form page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-form',
  templateUrl: 'form.html',
})
export class Form {
  
  public name: any = "";
  public lastname: any = "";
  public maternalname: any = "";
  public birthday: any = "";
  public gender: any = "";
  public edoCivil: any = "";
  public curp:string;
  public myForm: FormGroup;

  constructor(public navCtrl: NavController, private formBuilder: FormBuilder) {
  // let regex = /^[0-9]{4}-(0[1-9]|1[0-2])-(0[1-9]|[1-2][0-9]|3[0-1])$/;
   
    this.myForm = this.formBuilder.group({
      name: ['Armando', Validators.required],
      lastname: ['Navarro', Validators.required],
      maternalname: ['Flores', Validators.required],
      birthday: ['1994/06/24', Validators.required]
    });

    this.name = this.myForm.controls['name'];
    this.lastname = this.myForm.controls['lastname'];
    this.maternalname = this.myForm.controls['maternalname'];   
    this.birthday = this.myForm.controls['birthday'];
   
    }

  sendData() {

  let ap = this.lastname.value.substring(0,2);
  let am = this.maternalname.value.substring(0,1);
  let nom = this.name.value.substring(0,1);
  let nombre = ap+am+nom;


  let newVAlue: any;

  let dia:string;
  let mes:string;
  let anio:string;

dia= this.birthday.value.split('/')[2];
mes= this.birthday.value.split('/')[1];
anio = this.birthday.value.split('/')[0];

let year = anio.substring(2);

let fecha= this.birthday.value;
this.curp = nombre.toUpperCase()+year+mes+dia+"d3g";
    console.log(nombre);
    console.log(this.birthday.value);
     

  }

}
