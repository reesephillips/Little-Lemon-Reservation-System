import { useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import '../components/styles/BookingForm.css'

export default function BookingForm() {
  
  const [availableTimes, setAvailableTimes] = useState([
    '17:00',
    '18:00',
    '19:00',
    '20:00',
    '21:00',
    '22:00',
  ]);

  const formik = useFormik({
    initialValues: {
      date: '',
      time: '17:00',
      guests: 1,
      occasion: 'Birthday'
    },
    validationSchema: Yup.object({
      date: Yup.string().required('Required'),
      guests: Yup.number()
        .min(1, 'Must be at least 1')
        .max(10, 'Cannot be more than 10')
        .required('Required')
    }),
    onSubmit: values => {
      console.log(values);
    }
  });

  return (
    <form style={{ display: 'grid', maxWidth: '200px', gap: '20px' }} onSubmit={formik.handleSubmit}>
      <label htmlFor="res-date">Choose date</label>
      <input type="date" id="res-date" {...formik.getFieldProps('date')} />
      {formik.touched.date && formik.errors.date ? (
        <div>{formik.errors.date}</div>
      ) : null}
      <label htmlFor="res-time">Choose time</label>
      <select id="res-time" {...formik.getFieldProps('time')}>
        {availableTimes.map((time) => (
          <option key={time}>{time}</option>
        ))}
      </select>
      <label htmlFor="guests">Number of guests</label>
      <input
        type="number"
        placeholder="1"
        min="1"
        max="10"
        id="guests"
        {...formik.getFieldProps('guests')}
      />
      {formik.touched.guests && formik.errors.guests ? (
        <div>{formik.errors.guests}</div>
      ) : null}
      <label htmlFor="occasion">Occasion</label>
      <select id="occasion" {...formik.getFieldProps('occasion')}>
        <option>Birthday</option>
        <option>Anniversary</option>
      </select>
      <input type="submit" value="Make Your reservation" />
    </form>
  );
}
