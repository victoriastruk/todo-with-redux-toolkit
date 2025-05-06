import * as yup from 'yup';

const today = new Date();
today.setHours(0, 0, 0, 0);

export const TASK_VALIDATION_SCHEMA = yup.object({
  task: yup
    .string()
    .min(3, 'Must be 3 characters or more')
    .trim()
    .required('Task is required.'),
  deadline: yup
    .date()
    .required('Deadline is required')
    .min(today, 'Date cannot be in the past'),
});
