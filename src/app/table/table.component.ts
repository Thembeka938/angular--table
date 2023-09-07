import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
})
export class TableComponent implements OnInit {
  displayedColumns: string[] = ['name', 'surname', 'contact', 'email'];
  dataSource = new MatTableDataSource<any>([]);

  ngOnInit() {
    // Retrieve user data from local storage
    const userData = localStorage.getItem('registrationData');
    if (userData) {
      const user = JSON.parse(userData);
      // Assuming user data is an array, you may need to adjust accordingly
      this.dataSource.data = [user];
    }
  }

  addData() {
    const newRow: any = { name: '', surname: '', contact: '', email: '' };
    this.dataSource.data.push(newRow);
    this.dataSource._updateChangeSubscription();
  }

  removeData() {
    if (this.dataSource.data.length > 0) {
      this.dataSource.data.pop();
      this.dataSource._updateChangeSubscription();
    }
  }
}
