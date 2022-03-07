import { displayExistingLibrary } from "./display-existing-library";
import { addTaskFormManagement } from "./form-management";

export const start = () => {

    displayExistingLibrary();

    addTaskFormManagement();
}