# Business ProgressSoft Angular

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 16.2.1.
This Angular-based project is a Business Card Management System that allows users to create, update, delete, and filter business cards. The system also supports importing and exporting business card data via CSV and XML files.

## Table of Contents
- [Development server](#Development)
- [Code scaffolding](#Codescaffolding)
- [Features](#Features)
- [Technology Stack](#Technology)
- [Usage](#Usage)
- [Code Structure](#Codestructure)
- [API Endpoints](#Endpoints)
- [Dependencies](#Dependencies)
- [Images of project](#images)
- [Video of project](#video)



## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Features

- **Create, Update, Delete Business Cards:** Manage your business card collection with simple CRUD operations.
- **Image Upload:** Upload images for each business card.
- **Filter Business Cards:** Search for business cards by email using a custom filter.
- **Import/Export CSV/XML:** Import and export business cards in CSV and XML formats.
- **Responsive Design:** Built using Angular Material to ensure a user-friendly, responsive interface.

## Technology Stack

- **Frontend:** Angular 12, Angular Material
- **Backend:** .NET 6 API (not included in this repository)
- **Services:** HttpClient for API integration

## Usage

### Business Card Operations

1. **Create a Business Card:**
   - Click the "New Business Card" button and fill out the form with the card details.
   - Upload an image for the business card using the upload button.
   - Submit the form to create the business card.

2. **Filter Business Cards:**
   - Enter an email in the search bar and click the "Search" button to filter business cards.

3. **Update a Business Card:**
   - Click the "Update" button on any business card to edit its details and submit the form.

4. **Delete a Business Card:**
   - Click the "Delete" button to remove the selected business card.

5. **Import/Export Business Cards:**
   - Use the "Import CSV/XML" button to upload a file with card data.
   - Use the "Export CSV/XML" button to download all business cards in the selected format.
## Code Structure

- **Services:** The `CardserviceService` handles API calls to the backend for business card operations.
- **Components:** 
  - `BusnissComponent`: The main component for displaying and managing business cards.
  - `FilterPipe`: Custom pipe to filter business cards by email.
## API Endpoints

This project integrates with a backend .NET API. Below are some of the key endpoints:

- **Get All Cards:** `GET /api/Bcards/GetCard`
- **Filter Cards by Email:** `GET /api/Bcards/FilterByEmail/{email}`
- **Create Card:** `POST /api/Bcards/InsertCard`
- **Update Card:** `PUT /api/Bcards/UpdateCard`
- **Delete Card:** `DELETE /api/Bcards/DeleteCard/{id}`
- **Upload Image:** `POST /api/Bcards/uploadImage/`
- **Import from CSV/XML:** `POST /api/Bcards/CreateCardFromCSV`, `POST /api/Bcards/InsertCardFromXML`
- **Export to CSV/XML:** `GET /api/Bcards/ExportCardsToCSV`, `GET /api/Bcards/ExportCardsToXML`

## Dependencies

- Angular 12
- Angular Material
- RxJS
- HttpClientModule

## Images of project
<div>
  <img src="https://github.com/user-attachments/assets/83814d6d-bb85-4c6d-b40d-3f8b68466f33">
  <img src="https://github.com/user-attachments/assets/34e06bb5-bfa5-416f-bb21-069b9bb80454">
  <img src="https://github.com/user-attachments/assets/0e877205-3128-48dc-8742-f62697f9d761">
  <img src="https://github.com/user-attachments/assets/2233b0c6-1c6c-49c6-9e53-df079d53f4d0">
  <img src="https://github.com/user-attachments/assets/353906f5-6a7f-4b60-8ebb-4740b1e993d2">
  <img src="https://github.com/user-attachments/assets/672b532d-f806-4c30-94e1-d9db03e610f0">
  <img src="https://github.com/user-attachments/assets/99672032-1a00-4e51-b0b2-01af9acc2204">
  
</div>


## Video of project


[![Show Video](https://github.com/user-attachments/assets/83814d6d-bb85-4c6d-b40d-3f8b68466f33)](https://github.com/user-attachments/assets/56e5055e-795e-4a8a-a5f0-f7ad28c93e9f)
