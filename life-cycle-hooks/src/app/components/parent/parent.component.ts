import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css'],
})
export class ParentComponent implements OnInit {
  ngOnInit(): void {
    console.log('ngOnInit from the parent component');
  }
  userName = 'Maria';

  updateUser() {
    this.userName = 'Chris';
  }

  isChildDestroyed = false;

  destroy() {
    this.isChildDestroyed = true;
  }
}
