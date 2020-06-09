import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ContactService } from '../contact.service';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['contact-animations.component.scss', './contact.component.scss']
})
export class ContactComponent implements OnInit {
  public contactForm = new FormGroup({
    fullName: new FormControl(''),
    phone: new FormControl(''),
    email: new FormControl(''),
    subject: new FormControl(''),
    message: new FormControl('')
  })
  public messagePopup: string = 'none';

  constructor(private contactService: ContactService, private title: Title) { 
    this.title.setTitle('Tommy Shenkar | Contact')
  }

  ngOnInit() {
  }

  public onSubmit() {
    let form = this.contactForm.value;
    console.log('form: ', form);
    const emailRegex = /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/
    if (form.fullName !== "" && form.email !== "" && form.subject !== "" && form.message !== "" ) {
      if (emailRegex.test(form.email)) {
        form.email = form.email.toLowerCase();
        this.contactService.sendMail(form).subscribe(() => {}, err => console.log(err.message));
        console.log('form2: ', this.contactForm.value);
        this.confirmSub();
      } else {
        console.log('Ilegal email address, please type again.');
      }
    } else {
      console.log('Please fill all the fields.');
    }
  }

  private confirmSub(): void {
    this.contactForm.setValue({fullName: '', phone: '', email: '', subject: '', message: ''});
    this.messagePopup = 'block';
    setTimeout(() => 
    this.messagePopup = 'none', 3000);
  }

  public close(): void {
    this.messagePopup = 'none'
  }

}
