import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Validators, FormBuilder, FormGroup } from '@angular/forms'
import { Welcome } from '../welcome/welcome';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  public myForm: FormGroup;
  public user: any;
  public password: any;
  public valida: boolean = false;

  constructor(public navCtrl: NavController, public formBuilder: FormBuilder) {
    let erEspecial = /[|@#%&]/;
    let erLetras = /^[a-z]*$/;
    this.myForm = this.formBuilder.group({
      user: ['arannavarrofl', [<any>Validators.pattern(erLetras), Validators.minLength(6), Validators.required]],
      password: ['12400297@ittepic', [<any>Validators.pattern(erEspecial), Validators.minLength(8), Validators.required]],
    });

    this.user = this.myForm.controls['user'];
    this.password = this.myForm.controls['password'];
  }
  login() {


    if (this.password.value === '12400297@ittepic' && this.user.value === 'arannavarrofl') {
      this.valida = false;
      console.log("exitomaximo");
      this.navCtrl.push(Welcome);
      return;
    } else {
      this.valida = true;
      return;
    }
  }

}
