// import { CommonModule } from '@angular/common';
// import { Component } from '@angular/core';
// import { FormBuilder, FormGroup } from '@angular/forms';

// @Component({
//   selector: 'app-post-data',
//   templateUrl: './post-data.component.html',
//   styleUrl: './post-data.component.css'
// })
// export class PostDataComponent {
//   myForm: FormGroup;

//   constructor(private formBuilder: FormBuilder) {
//     this.myForm = this.formBuilder.group({
//       instituteName: [''],
//       phoneNumber: [''],
//       // Add other form controls here
//     });
//   }
//   onSubmit(formValue: any) {
//     console.log(formValue);
//   }
// }


import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-post-data',
  templateUrl: './post-data.component.html',
  styleUrls: ['./post-data.component.css']
})
export class PostDataComponent implements OnInit {
  myForm: FormGroup;
  paramsData: any
  editCheck: boolean = false
  @ViewChild("formValid") form: NgForm
  private baseURL = "https://lively-duck-khakis.cyclic.app/api/institute"

  constructor(private formBuilder: FormBuilder, private router: Router, private route: ActivatedRoute, private http: HttpClient) {
    // this.myForm = this.formBuilder.group({
    // name: [''],
    // address: [''],
    // tel: [''],
    // shortName: [''],
    // skill:new FormArray([
    //   new FormControl(null)
    // ])
    // });

    //second ways Reactive FormGroup without using the FormBuilder

    this.myForm = new FormGroup({
      name: new FormControl(null, Validators.required),
      address: new FormControl(null, Validators.required),
      tel: new FormControl(null, Validators.required),
      shortName: new FormControl(null, Validators.required),
      skill: new FormArray([
        new FormControl(null, Validators.required),
      ])
    })

    ////////////// Only one Form control changes call //////////////

    // this.myForm.get('name').valueChanges.subscribe((e)=>{
    //   console.log(e)
    // })

    ////////////// Only one Form control check status //////////////

    this.myForm.get('name').statusChanges.subscribe((e) => {
      // console.log(e)
      if (e = "VALID") {
        ////////////// when you add the some value in input directly so you use this logic //////////////

        let name = this.myForm.get('name').value || ""
        let tel = this.myForm.get('tel').value || ""
        let shortValue = name + tel
        this.myForm.get('shortName').patchValue(shortValue)
      }
    })
    this.myForm.get('tel').statusChanges.subscribe((e) => {
      // console.log(e)
      if (e = "VALID") {
        ////////////// when you add the some value in input directly so you use this logic //////////////

        let name = this.myForm.get('name').value || ""
        let tel = this.myForm.get('tel').value || "";
        let shortValue = name + tel
        this.myForm.get('shortName').patchValue(shortValue)
      }
    })

    ////////////// all Form control changes call//////////////

    // this.myForm.valueChanges.subscribe((e)=>{
    //   console.log(e)
    // })

    ////////////// all Form control check status//////////////

    // this.myForm.statusChanges.subscribe((e)=>{
    //   console.log(e)
    // })

    //////////////// when you add the some value in input directly so you use this logic //////////////

    // let name = this.myForm.get('name').value || ""
    // let tel = this.myForm.get('tel').value || ""
    // let shortValue = name + tel
    // this.myForm.get('shortName').patchValue(shortValue)

    ////////////// how to get first character of fName and lName //////////////

    // console.log(this.myForm.get('name').value.slice(0,1))

  }
  ngOnInit(): void {
    console.log(history.state)

    // First way to get the Data Start

    // this.route.params.subscribe((params: any) => {
    //   // console.log(typeof(params))
    //   if (params.name) {
    //     this.editCheck = true
    //     this.paramsData = params
    //     this.myForm.patchValue(params)
    //   }
    // });
    // Second way to get the Data End


    // Second way to get the Data Start
    if (history.state.name) {
      this.editCheck = true
      this.paramsData = history.state
      this.myForm.patchValue(history.state)
    }
    // Second way to get the Data End

  }

  onSubmit() {
    console.log(this.form.value)
    if (this.editCheck) {
      console.log(this.paramsData._id)
      console.log(this.myForm.value)
      this.http.put(`${this.baseURL}/${this.paramsData._id}`, this.myForm.value).subscribe((res) => {
        this.form.reset()
        this.router.navigateByUrl("/institute")
      }, (e) => {
        console.log(e)
      })
    } else {
      this.http.post(this.baseURL, this.myForm.value).subscribe((res) => {
        this.form.reset()
        this.router.navigateByUrl("/institute")
      }, (e) => {
        console.log(e)
      })
    }
  }

  addSkill() {
    // // let addInput = new FormControl(null,Validators.required)
    // (<FormArray>this.myForm.get('skill')).push(new FormControl(null, Validators.required))

    const addInput = new FormControl(null, Validators.required);
    (<FormArray>this.myForm.get('skill')).push(addInput)

  }
  deleteSkill(i) {
    const delInp = <FormArray>this.myForm.get('skill');
    delInp.removeAt(i)
  }
}
