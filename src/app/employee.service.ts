/* import { Injectable } from '@angular/core';

import * as PouchDB from 'pouchdb/dist/pouchdb';
import { cordovaSqlitePlugin } from 'pouchdb-adapter-cordova-sqlite';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  public pdb;
  public employees;
  
  createPouchDB() { 
    PouchDB.plugin(cordovaSqlitePlugin);
    this.pdb = new PouchDB('employees.db', 
    { adapter: 'cordova-sqlite'});
  }

  create(employee){
    return this.pdb.post(employee);
  }

  update(employee){
    return this.pdb.put(employee);
  }

  delete(employee){
    return this.pdb.delete(employee);
  }

  read() {  
    function allDocs(): Promise<any> {
               return this.pdb.allDocs({ include_docs: true })
        .then(docs => {
          this.employees = docs.rows.map(row => {
            row.doc.Date = new Date(row.doc.Date);
            return row.doc;
          });


          return this.employees;
        });
      }

      this.pdb.changes({ live: true, since: 'now', include_docs: true})
                .on('change', ()=>{
                    allDocs().then((emps)=>{

                    this.employees = emps;
                    });
                });
    return allDocs();

  }
}
 */

import { Injectable } from '@angular/core';

import * as PouchDB from 'pouchdb/dist/pouchdb';  
import { cordovaSqlitePlugin } from 'pouchdb-adapter-cordova-sqlite';


@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  public pdb; 
  public employees;

  createPouchDB() {
        PouchDB.plugin(cordovaSqlitePlugin);
        this.pdb = new PouchDB('employees.db', 
        { adapter: 'cordova-sqlite' });
  }

  create(employee) {  
    return this.pdb.post(employee);
  } 

  update(employee) {  
    return this.pdb.put(employee);
  }

  delete(employee) {  
    return this.pdb.delete(employee);
  }

  read() {  
    function allDocs():Promise<any>{
               return this.pdb.allDocs({ include_docs: true})
        .then(docs => {
            this.employees = docs.rows.map(row => {
                row.doc.Date = new Date(row.doc.Date);
                return row.doc;
         });


            return this.employees;
        });
      }

      this.pdb.changes({ live: true, since: 'now', include_docs: true})
                .on('change', ()=>{
                    allDocs().then((emps)=>{

                    this.employees = emps;
                    });
                });
    return allDocs();

  }

}