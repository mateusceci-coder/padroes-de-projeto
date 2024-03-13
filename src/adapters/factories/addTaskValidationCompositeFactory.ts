import { Validation } from "../interfaces/validation";
import { ValidationComposite } from "../validations/validationComposite";

export const AddTaskValidationCompositeFactory = (): ValidationComposite => {
  const validations: Validation[] = [];

  //todo validation required fields
  //todo validation date validation
  return new ValidationComposite(validations);
};
