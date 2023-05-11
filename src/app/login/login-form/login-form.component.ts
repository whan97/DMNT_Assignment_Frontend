import { OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Login, LoginPost } from 'src/app/shared/model/login.model';
import { ApiCallService } from 'src/app/shared/service/api-call.service';
import { ToastrService } from 'ngx-toastr'
import { Router, ActivatedRoute } from '@angular/router'
import { tap } from 'rxjs';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent implements OnInit {
  loginForm?: FormGroup
  
  constructor(private formBuilder: FormBuilder, private apiCallService : ApiCallService ,
    private router: Router
    ){} 

  ngOnInit(): void {
    this.inItForm()
  }

  inItForm(){
    this.loginForm = this.formBuilder.group({
      username: ['', [Validators.required]],
    password: [null, [Validators.required, Validators.minLength(8), Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])/)]]
    })
  }

  form() { return this.loginForm?.controls}

  redirectToPage(): void {
    this.router.navigate(['users/display']); 
  }
  
  onSubmit(){

    const postValues: LoginPost = {
      username: this.loginForm?.controls['username'].value,
      password: this.loginForm?.controls['password'].value
    }

    this.apiCallService.postValue(postValues)
      .pipe(
        tap((result: any) => {
          localStorage.setItem("token", result.token)
          this.router.navigate(['/users/display']); 
        })
      )
    .subscribe({error:(() => console.log('test'))})
  }
}
