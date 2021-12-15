import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormArray, FormControl, FormGroup, FormGroupName } from '@angular/forms';
import { Validators } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
registrationForm:FormGroup;
isActive:boolean=false;
siteKey:string;

//
// separateDialCode = false;
// SearchCountryField = SearchCountryField;
// CountryISO = CountryISO;
// PhoneNumberFormat = PhoneNumberFormat;
// preferredCountries: CountryISO[] = [CountryISO.UnitedStates, CountryISO.UnitedKingdom];
//

  // resolved(captchaResponse: string): void {
  //   console.log(`Resolved captcha with response: ${captchaResponse}`)};
  // 
  get Name(){
    return this.registrationForm.get('name');
  }
  // 
  // 
  get Email(){
    return this.registrationForm.get('email');
  }
  // 
  // 
  get Age(){
    return this.registrationForm.get('age');
  }
  // 
  // 
  get Phone(){
    return this.registrationForm.get('phone');
  }
  // 
    // 
    get Occupation(){
      return this.registrationForm.get('occupation');
    }
    // 
  // 
  get Address(){
    
    return this.registrationForm.get('addresses');
  }
  // 
  // 
  get AddressLine1(){
    return this.registrationForm.get('address.addressLine1');
  }
  // 
  // 
  get AddressLine2(){
    return this.registrationForm.get('address.addressLine2');
  }
  // 
  // 
  get City(){
    return this.registrationForm.get('address.city');
  }
  // 
  // 
  get State(){
    return this.registrationForm.get('address.state');
  }
  // 
  // 
  get Postal(){
    return this.registrationForm.get('address.postalCode');
  }
  // 
  get CHK(){
    return this.registrationForm.get('chk');
  }
  constructor(private fb:FormBuilder) { 
    this.siteKey='6LfttZ8dAAAAAOXDySJmX-z765b5tEG79WjODYXv';
  }
  // 
  // 
  get Recaptcha(){
return this.registrationForm.get('recaptcha');
  }
  // 
  ngOnInit(): void {
    this. registrationForm=this.fb.group({
        name:['',[Validators.required]],
        email:['',[Validators.required,Validators.email]],
        age:['',[Validators.required]],
        phone:['',[Validators.required,Validators.minLength(10),Validators.maxLength(10)]],
        occupation:['',[Validators.required]],
        chk:[null],
          // addresses:this.fb.array([this.createAddress()])
            address:this.fb.group({
        addressLine1: ['', [Validators.required]],
          addressLine2: ['',[Validators.required]],
              city: ['',[Validators.required]],
          state: ['',[Validators.required]],
          postalCode: ['',[Validators.required,Validators.maxLength(6)]],
        }),alternateAddress:this.fb.array([]),
        recaptcha: ['',[Validators.required]]
  });
}
  get formArray() {
    return this.registrationForm.get('alternateAddress') as FormArray;
  }

  addAlternateAddress() {
   let addressForm=this.fb.group({
      addressLine1: ['', [Validators.required]],
        addressLine2: ['',[Validators.required]],
           city: ['',[Validators.required]],
       state: ['',[Validators.required]],
        postalCode: ['',[Validators.required,Validators.maxLength(6)]]
      })
    this.formArray.push(addressForm)
    // this.formArray.push(this.fb.control(''));
  }
  deleteAlternateAddress(index:number){
this.formArray.removeAt(index);
  }
   //required function for chckbox
  onChecked(e:any){
    console.log(e.checked)
    if(e.checked){
this.registrationForm.controls["chk"].setValidators(null)
this.registrationForm.controls["chk"].updateValueAndValidity();
    }
    else{
      this.registrationForm.controls["chk"].setValidators([Validators.required])
      this.registrationForm.controls["chk"].updateValueAndValidity();
    }
  }
  //required function for capcha

  onCountryChange(event){
console.log(event)
  }
  onSubmit() {
    console.log(this.registrationForm.value);
  }
}

