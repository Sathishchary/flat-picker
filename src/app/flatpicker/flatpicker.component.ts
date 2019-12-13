import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import flatpickr from 'flatpickr';

@Component({
  selector: 'app-flatpicker',
  templateUrl: './flatpicker.component.html',
  styleUrls: []
})
export class FlatpikerComponent implements OnInit {
  @Input() dataField: any;
  @Output() onChange: EventEmitter<any> = new EventEmitter();
  constructor() { }

  ngOnInit() {
    flatpickr('.flatpickr', {
      dateFormat: 'm/j/Y',
      time_24hr: false,
      minDate: new Date(),
      position: 'auto',
      defaultDate: new Date(),
      static: true
    });
  }
  change() {
    this.onChange.emit(this.dataField);
  }
}
