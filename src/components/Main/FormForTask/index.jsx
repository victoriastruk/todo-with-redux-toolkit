import { Formik, Form, Field, ErrorMessage } from 'formik';
import { useDispatch } from 'react-redux';
import * as yup from 'yup';
import { addTask } from '../../../store/slices/tasksSlice';
import styles from './Form.module.sass';

function FormForTask () {
  const dispatch = useDispatch();
  const initialValues = {
    task: '',
    deadline: '',
  };
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  const validationSchema = yup.object({
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
  const onSubmit = (values, formik) => {
    dispatch(addTask(values));
    formik.resetForm();
  };
  return (
    <div>
      <h1 className={styles.title}>Todo App</h1>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        {({ isSubmitting }) => (
          <Form>
            <Field name='task' placeholder='Task' />
            <ErrorMessage name='task' component='div' />
            <Field type='date' name='deadline' placeholder='Deadline' />
            <ErrorMessage name='deadline' component='div' />
            <button type='submit' disabled={isSubmitting}>
              Add
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default FormForTask;
