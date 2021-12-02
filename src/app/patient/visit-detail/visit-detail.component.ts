import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-visit-detail',
  templateUrl: './visit-detail.component.html',
  styleUrls: ['./visit-detail.component.css']
})
export class VisitDetailComponent implements OnInit {
  diagnosisForm!: FormGroup;
  proceduresForm!: FormGroup;
  medicationForm!: FormGroup;
  diagnosis!: FormArray;
  procedures!: FormArray;
  medications!: FormArray;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.diagnosisForm = this.fb.group({
      diagnosis: this.fb.array([this.newDiagnosis()]),
    });
    this.proceduresForm = this.fb.group({
      procedures: this.fb.array([this.newProcedures()]),
    });
    this.medicationForm = this.fb.group({
      medications: this.fb.array([this.newMedications()]),
    });
  }

  newDiagnosis(): FormGroup {
    return this.fb.group({
      diagnosisId: '',
      diagnosisDesc: '',
    });
  }
  newProcedures(): FormGroup {
    return this.fb.group({
      procedure: '',
      desc: '',
    });
  }
  newMedications(): FormGroup {
    return this.fb.group({
      medication: '',
      dosage: '',
      desc: '',
    });
  }
  addDiagnosis(): void {
    this.diagnosis = this.diagnosisForm.get('diagnosis') as FormArray;
    this.diagnosis.push(this.newDiagnosis());
  }
  addProcedure(): void {
    this.procedures = this.proceduresForm.get('procedures') as FormArray;
    this.procedures.push(this.newProcedures());
  }
  addMedication(): void {
    this.medications = this.medicationForm.get('medications') as FormArray;
    this.medications.push(this.newMedications());
  }
  deleteDiagnosis(i: number) {
    this.diagnosis = this.diagnosisForm.get('diagnosis') as FormArray;
    this.diagnosis.removeAt(i);
  }
  deleteProcedure(i: number) {
    this.procedures = this.proceduresForm.get('procedures') as FormArray;
    this.procedures.removeAt(i);
  }
  deleteMedication(i: number) {
    this.medications = this.medicationForm.get('medications') as FormArray;
    this.medications.removeAt(i);
  } 
 

}
