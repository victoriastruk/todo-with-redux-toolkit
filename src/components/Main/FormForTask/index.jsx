import { Formik, Form } from 'formik';
import { useDispatch } from 'react-redux';
import Input from '../../Input';
import { addTask } from '../../../store/slices/tasksSlice';
import styles from './Form.module.sass';
import { TASK_VALIDATION_SCHEMA } from '../../../utils/validate/taskSchema';

function FormForTask () {
  const dispatch = useDispatch();
  const initialValues = {
    task: '',
    deadline: '',
  };

  const onSubmit = (values, formik) => {
    dispatch(addTask(values));
    formik.resetForm();
  };
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Todo App</h1>
      <Formik
        initialValues={initialValues}
        validationSchema={TASK_VALIDATION_SCHEMA}
        onSubmit={onSubmit}
      >
        {({ isSubmitting, isValid, dirty }) => (
          <Form className={styles.form}>
            <div className={styles.inputWrapper}>
              <Input name='task' type='text' placeholder='Task' />
              <Input name='deadline' type='date' placeholder='Deadline' />
            </div>
            <button
              className={styles.btn}
              type='submit'
              disabled={isSubmitting || !isValid || !dirty}
            >
              Add
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default FormForTask;
